import { observable, action, computed } from "mobx";
import FACES from "@constants/faces";
import INIT_CONFIG from "@data/initial_configuration";

export default class CubeStore {
    @observable ALL_TILES = INIT_CONFIG;

    @computed get FACE_F_TILES() {
        return this.ALL_TILES.filter(tile => tile.face === FACES.F_FACE);
    } // green
    @computed get FACE_B_TILES() {
        return this.ALL_TILES.filter(tile => tile.face === FACES.B_FACE);
    } // blue
    @computed get FACE_U_TILES() {
        return this.ALL_TILES.filter(tile => tile.face === FACES.U_FACE);
    } // white
    @computed get FACE_D_TILES() {
        return this.ALL_TILES.filter(tile => tile.face === FACES.D_FACE);
    } // yellow
    @computed get FACE_R_TILES() {
        return this.ALL_TILES.filter(tile => tile.face === FACES.R_FACE);
    } // red
    @computed get FACE_L_TILES() {
        return this.ALL_TILES.filter(tile => tile.face === FACES.L_FACE);
    } // orange

    @action.bound
    rotateTopRight90 = () => {
        // front -> right -> back -> left -> front
        // down/bottom stays the same
        // top rotates counter-clockwise
        let affectedRowTiles = this.ALL_TILES.filter(
            tile =>
                tile["y-coordinate"] === 1 &&
                tile.face !== FACES.U_FACE &&
                tile.face !== FACES.D_FACE
        );

        affectedRowTiles.forEach(tile => {
            switch (tile.face) {
                case FACES.F_FACE:
                    tile.face = FACES.R_FACE;
                    break;
                case FACES.R_FACE:
                    tile.face = FACES.B_FACE;
                    break;
                case FACES.B_FACE:
                    tile.face = FACES.L_FACE;
                    break;
                case FACES.L_FACE:
                    tile.face = FACES.F_FACE;
                    break;
                default:
                    throw new Error("oops mistake made");
            }
        });

        // rotate the top
        let upFaceTiles = this.ALL_TILES.filter(
            tile => tile.face === FACES.U_FACE
        );
        this.rotateFace(upFaceTiles, 90);
    };

    @action.bound
    rotateMiddleRight90 = () => {
        // up/top and down/bottom stay same
        // front -> right -> back -> left -> front
        // middle tiles have y-coordinate = 0
        let affectedTiles = this.ALL_TILES.filter(
            tile =>
                tile["y-coordinate"] === 0 &&
                tile.face !== FACES.U_FACE &&
                tile.face !== FACES.D_FACE
        );
        window.affectedMiddleRightTiles = affectedTiles;
        affectedTiles.forEach(tile => {
            switch (tile.face) {
                case FACES.F_FACE:
                    tile.face = FACES.R_FACE;
                    break;
                case FACES.R_FACE:
                    tile.face = FACES.B_FACE;
                    break;
                case FACES.B_FACE:
                    tile.face = FACES.L_FACE;
                    break;
                case FACES.L_FACE:
                    tile.face = FACES.F_FACE;
                    break;
                default:
                    throw new Error("oops mistake made");
            }
        });
    };

    @action.bound
    rotateBottomRight90 = () => {
        // front -> right -> back -> left -> front
        // up/top stays the same
        // down/bottom rotates clockwise
        let affectedRowTiles = this.ALL_TILES.filter(
            tile =>
                tile["y-coordinate"] === -1 &&
                tile.face !== FACES.U_FACE &&
                tile.face !== FACES.D_FACE
        );

        affectedRowTiles.forEach(tile => {
            switch (tile.face) {
                case FACES.F_FACE:
                    tile.face = FACES.R_FACE;
                    break;
                case FACES.R_FACE:
                    tile.face = FACES.B_FACE;
                    break;
                case FACES.B_FACE:
                    tile.face = FACES.L_FACE;
                    break;
                case FACES.L_FACE:
                    tile.face = FACES.F_FACE;
                    break;
                default:
                    throw new Error("oops mistake made");
            }
        });

        // rotate the top
        let downFaceTiles = this.ALL_TILES.filter(
            tile => tile.face === FACES.D_FACE
        );
        this.rotateFace(downFaceTiles, -90);
    };

    @action.bound
    rotateMiddleUp90 = () => {
        // right and left stay same
        // front -> up/top -> back -> down/bottom -> front
        // middle tiles have x-coordinate = 0
        let affectedTiles = this.ALL_TILES.filter(
            tile =>
                tile["x-coordinate"] === 0 &&
                tile.face !== FACES.R_FACE &&
                tile.face !== FACES.L_FACE
        );
        window.affectedMiddleUpTiles = affectedTiles;
        affectedTiles.forEach(tile => {
            switch (tile.face) {
                case FACES.F_FACE:
                    tile.face = FACES.U_FACE;
                    break;
                case FACES.U_FACE:
                    tile.face = FACES.B_FACE;
                    break;
                case FACES.B_FACE:
                    tile.face = FACES.D_FACE;
                    break;
                case FACES.D_FACE:
                    tile.face = FACES.F_FACE;
                    break;
                default:
                    throw new Error("oops mistake made");
            }
        });
    };

    @action.bound
    rotateRightUp90 = () => {
        // left stays the same
        // columns change faces for front -> up -> back -> down -> front
        // 90 degree clockwise rotation occurs for right

        // rotate the columns
        let affectedColTiles = this.ALL_TILES.filter(tile => {
            const isFrontCol =
                tile["x-coordinate"] === 1 && tile.face === FACES.F_FACE;
            const isUpCol =
                tile["x-coordinate"] === 1 && tile.face === FACES.U_FACE;
            const isBackCol =
                tile["x-coordinate"] === -1 && tile.face === FACES.B_FACE; // note the x-coord
            const isDownCol =
                tile["x-coordinate"] === 1 && tile.face === FACES.D_FACE;
            return isFrontCol || isUpCol || isBackCol || isDownCol;
        });
        affectedColTiles.forEach(tile => {
            switch (tile.face) {
                case FACES.F_FACE:
                    tile.face = FACES.U_FACE;
                    break;
                case FACES.U_FACE:
                    tile.face = FACES.B_FACE;
                    tile["x-coordinate"] = -1;
                    break;
                case FACES.B_FACE:
                    tile.face = FACES.D_FACE;
                    tile["x-coordinate"] = 1;
                    break;
                case FACES.D_FACE:
                    tile.face = FACES.F_FACE;
                    break;
                default:
                    throw new Error("oops mistake made");
            }
        });

        // rotate the side
        let rightFaceTiles = this.ALL_TILES.filter(
            tile => tile.face === FACES.R_FACE
        );
        this.rotateFace(rightFaceTiles, -90);
    };

    @action.bound
    rotateLeftUp90 = () => {
        // right stays the same
        // columns change faces for front -> up -> back -> down -> front
        // 90 degree counter-clockwise rotation occurs for left

        // rotate the columns
        let affectedColTiles = this.ALL_TILES.filter(tile => {
            const isFrontCol =
                tile["x-coordinate"] === -1 && tile.face === FACES.F_FACE;
            const isUpCol =
                tile["x-coordinate"] === -1 && tile.face === FACES.U_FACE;
            const isBackCol =
                tile["x-coordinate"] === 1 && tile.face === FACES.B_FACE; // note the x-coord
            const isDownCol =
                tile["x-coordinate"] === -1 && tile.face === FACES.D_FACE;
            return isFrontCol || isUpCol || isBackCol || isDownCol;
        });
        affectedColTiles.forEach(tile => {
            switch (tile.face) {
                case FACES.F_FACE:
                    tile.face = FACES.U_FACE;
                    break;
                case FACES.U_FACE:
                    tile.face = FACES.B_FACE;
                    tile["x-coordinate"] = 1;
                    break;
                case FACES.B_FACE:
                    tile.face = FACES.D_FACE;
                    tile["x-coordinate"] = -1;
                    break;
                case FACES.D_FACE:
                    tile.face = FACES.F_FACE;
                    break;
                default:
                    throw new Error("oops mistake made");
            }
        });

        // rotate the side
        let leftFaceTiles = this.ALL_TILES.filter(
            tile => tile.face === FACES.L_FACE
        );
        this.rotateFace(leftFaceTiles, 90);
    };

    @action.bound
    reset = () => {
        this.ALL_TILES = INIT_CONFIG;
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

        window.tilesPreRotation = faceTiles;

        faceTiles.forEach(tile => {
            const xCoord = tile["x-coordinate"];
            const yCoord = tile["y-coordinate"];
            let newX = (
                xCoord * Math.cos((degrees * Math.PI) / 180) -
                yCoord * Math.sin((degrees * Math.PI) / 180)
            ).toFixed();
            let newY = (
                yCoord * Math.cos((degrees * Math.PI) / 180) +
                xCoord * Math.sin((degrees * Math.PI) / 180)
            ).toFixed();
            // get rid of -0
            if (newX == 0) newX = 0;
            if (newY == 0) newY = 0;
            // cast back to numeric
            tile["x-coordinate"] = +newX;
            tile["y-coordinate"] = +newY;
        });

        window.tilesPostRotation = faceTiles;
    };
}
