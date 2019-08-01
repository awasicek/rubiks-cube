import { observable, action, computed } from "mobx";
import { directions, rows, columns } from "@constants/cube";
import faces from "@constants/faces";
import initCubeConfig from "@data/initial_configuration";

/*
 * RUBIK'S CUBE LEGEND:
 *
 *          Left | Ctr | Right (columns)
 *         ___________________
 *     Top |-1,1 | 0,1 | 1,1 |
 *         |_____|_____|_____|
 *  Middle |-1,0 | 0,0 | 1,0 |
 *         |_____|_____|_____|
 *  Bottom |-1,-1| 0,-1| 1,-1|
 *         |_____|_____|_____|
 *  (rows)                       (x,y)
 */

export default class CubeStore {
    @observable allTiles = initCubeConfig.tiles.byId;
    @observable allFaces = initCubeConfig.faces.byId;

    @computed get tilesFaceF() {
        const tileIds = this.allFaces.faceF.tiles;
        return tileIds.map(tileId => this.allTiles[tileId]);
    }

    @computed get tilesFaceB() {
        const tileIds = this.allFaces.faceB.tiles;
        return tileIds.map(tileId => this.allTiles[tileId]);
    }

    @computed get tilesFaceU() {
        const tileIds = this.allFaces.faceU.tiles;
        return tileIds.map(tileId => this.allTiles[tileId]);
    }

    @computed get tilesFaceD() {
        const tileIds = this.allFaces.faceD.tiles;
        return tileIds.map(tileId => this.allTiles[tileId]);
    }

    @computed get tilesFaceR() {
        const tileIds = this.allFaces.faceR.tiles;
        return tileIds.map(tileId => this.allTiles[tileId]);
    }

    @computed get tilesFaceL() {
        const tileIds = this.allFaces.faceL.tiles;
        return tileIds.map(tileId => this.allTiles[tileId]);
    }

    /**
     * @description TODO
     */
    @action.bound
    updateFaces = ({ removeFromFace, addToFace, tileId }) => {
        const tileIndex = this.allFaces[removeFromFace].tiles.indexOf(tileId);
        this.allFaces[removeFromFace].tiles.splice(tileIndex, 1);
        this.allFaces[addToFace].tiles.push(tileId);
    };

    /**
     * @description TODO
     */
    @action.bound
    rotateRow = ({ direction, row }) => {
        // ascertain the tiles that will change faces due to the rotation
        let yCoord;
        if (row === rows.BOTTOM) {
            yCoord = -1;
        } else if (row === rows.MIDDLE) {
            yCoord = 0;
        } else if (row === rows.TOP) {
            yCoord = 1;
        } else {
            throw new Error("Invalid Argument: Unrecognized row type.");
        }

        /* only the tiles on the row of the faces F, B, L, and R will change faces
         * (tiles on the U and D faces will not change faces). */
        const affectedTiles = [...this.tilesFaceF, ...this.tilesFaceB, ...this.tilesFaceL, ...this.tilesFaceR].filter(
            tile => tile.position.yCoord === yCoord
        );

        if (direction === directions.RIGHT) {
            // front -> right -> back -> left -> front
            affectedTiles.forEach(tile => {
                switch (tile.face) {
                    case faces.F_FACE: {
                        this.updateFaces({
                            removeFromFace: faces.F_FACE,
                            addToFace: faces.R_FACE,
                            tileId: tile.id
                        });
                        tile.face = faces.R_FACE;
                        break;
                    }
                    case faces.R_FACE: {
                        this.updateFaces({
                            removeFromFace: faces.R_FACE,
                            addToFace: faces.B_FACE,
                            tileId: tile.id
                        });
                        tile.face = faces.B_FACE;
                        break;
                    }
                    case faces.B_FACE: {
                        this.updateFaces({
                            removeFromFace: faces.B_FACE,
                            addToFace: faces.L_FACE,
                            tileId: tile.id
                        });
                        tile.face = faces.L_FACE;
                        break;
                    }
                    case faces.L_FACE: {
                        this.updateFaces({
                            removeFromFace: faces.L_FACE,
                            addToFace: faces.F_FACE,
                            tileId: tile.id
                        });
                        tile.face = faces.F_FACE;
                        break;
                    }
                    default:
                        throw new Error("Invalid Argument: Unrecognized face type.");
                }
            });
        } else if (direction === directions.LEFT) {
            // front <- right <- back <- left <- front
            affectedTiles.forEach(tile => {
                switch (tile.face) {
                    case faces.F_FACE: {
                        this.updateFaces({
                            removeFromFace: faces.F_FACE,
                            addToFace: faces.L_FACE,
                            tileId: tile.id
                        });
                        tile.face = faces.L_FACE;
                        break;
                    }
                    case faces.R_FACE: {
                        this.updateFaces({
                            removeFromFace: faces.R_FACE,
                            addToFace: faces.F_FACE,
                            tileId: tile.id
                        });
                        tile.face = faces.F_FACE;
                        break;
                    }
                    case faces.B_FACE: {
                        this.updateFaces({
                            removeFromFace: faces.B_FACE,
                            addToFace: faces.R_FACE,
                            tileId: tile.id
                        });
                        tile.face = faces.R_FACE;
                        break;
                    }
                    case faces.L_FACE: {
                        this.updateFaces({
                            removeFromFace: faces.L_FACE,
                            addToFace: faces.B_FACE,
                            tileId: tile.id
                        });
                        tile.face = faces.B_FACE;
                        break;
                    }
                    default:
                        throw new Error("Invalid Argument: Unrecognized face type.");
                }
            });
        } else {
            throw new Error("Invalid Argument: Unrecognized rotation direction.");
        }

        // determine if an orthogonal face itself needs to be rotated
        switch (row) {
            case rows.TOP: {
                if (direction === directions.LEFT) {
                    this.rotateFace(this.tilesFaceU, -90);
                } else if (direction === directions.RIGHT) {
                    this.rotateFace(this.tilesFaceU, 90);
                }
                break;
            }
            case rows.MIDDLE: {
                // no-op
                break;
            }
            case rows.BOTTOM: {
                if (direction === directions.LEFT) {
                    this.rotateFace(this.tilesFaceD, 90);
                } else if (direction === directions.RIGHT) {
                    this.rotateFace(this.tilesFaceD, -90);
                }
                break;
            }
            default:
                throw new Error("Invalid Argument: Unrecognized row type.");
        }
    };

    /**
     * @description TODO
     */
    @action.bound
    rotateColumn = ({ direction, column }) => {
        // ascertain the tiles that will change faces due to the rotation
        let xCoord;
        if (column === columns.LEFT) {
            xCoord = -1;
        } else if (column === columns.CENTER) {
            xCoord = 0;
        } else if (column === columns.RIGHT) {
            xCoord = 1;
        } else {
            throw new Error("Invalid Argument: Unrecognized column type.");
        }

        /* only the tiles on the column of the faces F, B, U, and D will change faces
         * (tiles on the L and R faces will not change faces). */
        const affectedTiles = [...this.tilesFaceF, ...this.tilesFaceB, ...this.tilesFaceU, ...this.tilesFaceD].filter(
            tile => {
                const affectedNonbackTile = tile.face !== faces.B_FACE && tile.position.xCoord === xCoord;
                // note: the back face has its mirror column rotated
                const affectedBackTile = tile.face === faces.B_FACE && tile.position.xCoord === -xCoord;
                return affectedNonbackTile || affectedBackTile;
            }
        );

        if (direction === directions.UP) {
            // front -> up -> back -> down -> front
            affectedTiles.forEach(tile => {
                switch (tile.face) {
                    case faces.F_FACE: {
                        this.updateFaces({
                            removeFromFace: faces.F_FACE,
                            addToFace: faces.U_FACE,
                            tileId: tile.id
                        });
                        tile.face = faces.U_FACE;
                        break;
                    }
                    case faces.U_FACE: {
                        this.updateFaces({
                            removeFromFace: faces.U_FACE,
                            addToFace: faces.B_FACE,
                            tileId: tile.id
                        });
                        tile.face = faces.B_FACE;
                        if (xCoord !== 0) tile.position.xCoord = -xCoord; // again, note mirror effect
                        break;
                    }
                    case faces.B_FACE: {
                        this.updateFaces({
                            removeFromFace: faces.B_FACE,
                            addToFace: faces.D_FACE,
                            tileId: tile.id
                        });
                        tile.face = faces.D_FACE;
                        tile.position.xCoord = xCoord;
                        break;
                    }
                    case faces.D_FACE: {
                        this.updateFaces({
                            removeFromFace: faces.D_FACE,
                            addToFace: faces.F_FACE,
                            tileId: tile.id
                        });
                        tile.face = faces.F_FACE;
                        break;
                    }
                    default:
                        throw new Error("Invalid Argument: Unrecognized face type.");
                }
            });
        } else if (direction === directions.DOWN) {
            // front <- up <- back <- down <- front
            affectedTiles.forEach(tile => {
                switch (tile.face) {
                    case faces.F_FACE: {
                        this.updateFaces({
                            removeFromFace: faces.F_FACE,
                            addToFace: faces.D_FACE,
                            tileId: tile.id
                        });
                        tile.face = faces.D_FACE;
                        break;
                    }
                    case faces.D_FACE: {
                        this.updateFaces({
                            removeFromFace: faces.D_FACE,
                            addToFace: faces.B_FACE,
                            tileId: tile.id
                        });
                        tile.face = faces.B_FACE;
                        if (xCoord !== 0) tile.position.xCoord = -xCoord; // again, note mirror effect
                        break;
                    }
                    case faces.B_FACE: {
                        this.updateFaces({
                            removeFromFace: faces.B_FACE,
                            addToFace: faces.U_FACE,
                            tileId: tile.id
                        });
                        tile.face = faces.U_FACE;
                        tile.position.xCoord = xCoord;
                        break;
                    }
                    case faces.U_FACE: {
                        this.updateFaces({
                            removeFromFace: faces.U_FACE,
                            addToFace: faces.F_FACE,
                            tileId: tile.id
                        });
                        tile.face = faces.F_FACE;
                        break;
                    }
                    default:
                        throw new Error("Invalid Argument: Unrecognized face type.");
                }
            });
        } else {
            throw new Error("Invalid Argument: Unrecognized rotation direction.");
        }

        // determine if an orthogonal face itself needs to be rotated
        switch (column) {
            case columns.LEFT: {
                if (direction === directions.UP) {
                    this.rotateFace(this.tilesFaceL, 90);
                } else if (direction === directions.DOWN) {
                    this.rotateFace(this.tilesFaceL, -90);
                }
                break;
            }
            case columns.CENTER: {
                // no-op
                break;
            }
            case columns.RIGHT: {
                if (direction === directions.UP) {
                    this.rotateFace(this.tilesFaceR, -90);
                } else if (direction === directions.DOWN) {
                    this.rotateFace(this.tilesFaceR, 90);
                }
                break;
            }
            default:
                throw new Error("Invalid Argument: Unrecognized column type.");
        }
    };

    @action.bound
    reset = () => {
        this.allTiles = initCubeConfig.tiles.byId;
        this.allFaces = initCubeConfig.faces.byId;
    };

    //=====================
    // Helper Functions
    //=====================
    @action
    rotateFace = function rotateFace(faceTiles, degrees) {
        /* For a point located at (x, y), if you want to rotate that point around the origin, the coordinate
         * of the new point (x', y') follows the following formula:
         * x' = x cos(theta) - y sin(theta)
         * y' = y cos(theta) + x sin(theta)
         * where theta is the angle of rotation. */

        // DEV ONLY debugging
        window._tilesPreRotation = faceTiles;

        faceTiles.forEach(tile => {
            const xCoord = tile.position.xCoord;
            const yCoord = tile.position.yCoord;
            let newX = (
                xCoord * Math.cos((degrees * Math.PI) / 180) -
                yCoord * Math.sin((degrees * Math.PI) / 180)
            ).toFixed();
            let newY = (
                yCoord * Math.cos((degrees * Math.PI) / 180) +
                xCoord * Math.sin((degrees * Math.PI) / 180)
            ).toFixed();
            // get rid of -0 (loose comparisons intended)
            if (newX == 0) newX = 0;
            if (newY == 0) newY = 0;
            // cast back to numeric
            tile.position.xCoord = +newX;
            tile.position.yCoord = +newY;
        });

        // DEV ONLY debugging
        window._tilesPostRotation = faceTiles;
    };

    // rotate row helpers
    rotateTopRight = () => {
        this.rotateRow({ direction: directions.RIGHT, row: rows.TOP });
    };

    rotateTopLeft = () => {
        this.rotateRow({ direction: directions.LEFT, row: rows.TOP });
    };

    rotateMiddleRight = () => {
        this.rotateRow({ direction: directions.RIGHT, row: rows.MIDDLE });
    };

    rotateMiddleLeft = () => {
        this.rotateRow({ direction: directions.LEFT, row: rows.MIDDLE });
    };

    rotateBottomRight = () => {
        this.rotateRow({ direction: directions.RIGHT, row: rows.BOTTOM });
    };

    rotateBottomLeft = () => {
        this.rotateRow({ direction: directions.LEFT, row: rows.BOTTOM });
    };

    // rotate column helpers
    rotateRightUp = () => {
        this.rotateColumn({ direction: directions.UP, column: columns.RIGHT });
    };

    rotateRightDown = () => {
        this.rotateColumn({ direction: directions.DOWN, column: columns.RIGHT });
    };

    rotateCenterUp = () => {
        this.rotateColumn({ direction: directions.UP, column: columns.CENTER });
    };

    rotateCenterDown = () => {
        this.rotateColumn({ direction: directions.DOWN, column: columns.CENTER });
    };

    rotateLeftUp = () => {
        this.rotateColumn({ direction: directions.UP, column: columns.LEFT });
    };

    rotateLeftDown = () => {
        this.rotateColumn({ direction: directions.DOWN, column: columns.LEFT });
    };
}
