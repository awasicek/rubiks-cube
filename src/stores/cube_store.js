import { observable, action, computed } from 'mobx';
import FACES from "@constants/faces";
import INIT_CONFIG from "@data/initial_configuration";

export default class CubeStore {
    @observable ALL_TILES = INIT_CONFIG;

    @computed get FACE_F_TILES() { return this.ALL_TILES.filter(tile => tile.face === FACES.F_FACE); } // green
    @computed get FACE_B_TILES() { return this.ALL_TILES.filter(tile => tile.face === FACES.B_FACE); } // blue
    @computed get FACE_U_TILES() { return this.ALL_TILES.filter(tile => tile.face === FACES.U_FACE); } // white
    @computed get FACE_D_TILES() { return this.ALL_TILES.filter(tile => tile.face === FACES.D_FACE); } // yellow
    @computed get FACE_R_TILES() { return this.ALL_TILES.filter(tile => tile.face === FACES.R_FACE); } // red
    @computed get FACE_L_TILES() { return this.ALL_TILES.filter(tile => tile.face === FACES.L_FACE); } // orange

    @action.bound
    rotateMiddleRight90 = () => {
        // up/top and down/bottom stay same
        // front -> right -> back -> left -> front
        // middle tiles have y-coordinate = 1
        let affectedTiles = this.ALL_TILES.filter(tile => tile["y-coordinate"] === 1 && tile.face !== FACES.U_FACE && tile.face !== FACES.D_FACE);
        window.affectedMiddleRightTiles = affectedTiles;
        affectedTiles.forEach(tile => {
            switch(tile.face) {
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
    rotateMiddleUp90 = () => {
        // right and left stay same
        // front -> up/top -> back -> down/bottom -> front
        // middle tiles have x-coordinate = 1
        let affectedTiles = this.ALL_TILES.filter(tile => tile["x-coordinate"] === 1 && tile.face !== FACES.R_FACE && tile.face !== FACES.L_FACE);
        window.affectedMiddleUpTiles = affectedTiles;
        affectedTiles.forEach(tile => {
            switch(tile.face) {
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
            const isFrontCol = tile["x-coordinate"] === 2 && tile.face === FACES.F_FACE;
            const isUpCol = tile["x-coordinate"] === 2 && tile.face === FACES.U_FACE;
            const isBackCol = tile["x-coordinate"] === 0 && tile.face === FACES.B_FACE; // note the x-coord
            const isDownCol = tile["x-coordinate"] === 2 && tile.face === FACES.D_FACE;
            return isFrontCol || isUpCol || isBackCol || isDownCol;
        });
        affectedColTiles.forEach(tile => {
            switch(tile.face) {
                case FACES.F_FACE:
                    tile.face = FACES.U_FACE;
                    break;
                case FACES.U_FACE:
                    tile.face = FACES.B_FACE;
                    tile["x-coordinate"] = 0;
                    break;
                case FACES.B_FACE:
                    tile.face = FACES.D_FACE;
                    tile["x-coordinate"] = 2;
                    break;
                case FACES.D_FACE:
                    tile.face = FACES.F_FACE;
                    break;
                default:
                    throw new Error("oops mistake made");
            }
        });

        // rotate the side
        let rightFaceTiles = this.ALL_TILES.filter(tile => tile.face === FACES.R_FACE);
        rightFaceTiles.forEach(tile => {
            switch(`${tile["x-coordinate"]}, ${tile["y-coordinate"]}`) {
                case ("0, 0"):
                    tile["x-coordinate"] = 0;
                    tile["y-coordinate"] = 2;
                    break;
                case ("0, 1"):
                    tile["x-coordinate"] = 1;
                    tile["y-coordinate"] = 2;
                    break;
                case ("0, 2"):
                    tile["x-coordinate"] = 2;
                    tile["y-coordinate"] = 2;
                    break;
                case ("1, 0"):
                    tile["x-coordinate"] = 0;
                    tile["y-coordinate"] = 1;
                    break;
                case ("1, 1"):
                    // stay the same
                    break;
                case ("1, 2"):
                    tile["x-coordinate"] = 2;
                    tile["y-coordinate"] = 1;
                    break;
                case ("2, 0"):
                    tile["x-coordinate"] = 0;
                    tile["y-coordinate"] = 0;
                    break;
                case ("2, 1"):
                    tile["x-coordinate"] = 1;
                    tile["y-coordinate"] = 0;
                    break;
                case ("2, 2"):
                    tile["x-coordinate"] = 2;
                    tile["y-coordinate"] = 0;
                    break;
                default:
                    throw new Error("oops mistake made");
            }
        });
    };

    @action.bound
    rotateLeftUp90 = () => {
        // right stays the same
        // columns change faces for front -> up -> back -> down -> front
        // 90 degree counter-clockwise rotation occurs for left

        // rotate the columns
        let affectedColTiles = this.ALL_TILES.filter(tile => {
            const isFrontCol = tile["x-coordinate"] === 0 && tile.face === FACES.F_FACE;
            const isUpCol = tile["x-coordinate"] === 0 && tile.face === FACES.U_FACE;
            const isBackCol = tile["x-coordinate"] === 2 && tile.face === FACES.B_FACE; // note the x-coord
            const isDownCol = tile["x-coordinate"] === 0 && tile.face === FACES.D_FACE;
            return isFrontCol || isUpCol || isBackCol || isDownCol;
        });
        affectedColTiles.forEach(tile => {
            switch(tile.face) {
                case FACES.F_FACE:
                    tile.face = FACES.U_FACE;
                    break;
                case FACES.U_FACE:
                    tile.face = FACES.B_FACE;
                    tile["x-coordinate"] = 2;
                    break;
                case FACES.B_FACE:
                    tile.face = FACES.D_FACE;
                    tile["x-coordinate"] = 0;
                    break;
                case FACES.D_FACE:
                    tile.face = FACES.F_FACE;
                    break;
                default:
                    throw new Error("oops mistake made");
            }
        });

        // rotate the side
        let leftFaceTiles = this.ALL_TILES.filter(tile => tile.face === FACES.L_FACE);
        leftFaceTiles.forEach(tile => {
            switch(`${tile["x-coordinate"]}, ${tile["y-coordinate"]}`) {
                case ("0, 0"):
                    tile["x-coordinate"] = 2;
                    tile["y-coordinate"] = 0;
                    break;
                case ("0, 1"):
                    tile["x-coordinate"] = 1;
                    tile["y-coordinate"] = 0;
                    break;
                case ("0, 2"):
                    tile["x-coordinate"] = 0;
                    tile["y-coordinate"] = 0;
                    break;
                case ("1, 0"):
                    tile["x-coordinate"] = 2;
                    tile["y-coordinate"] = 1;
                    break;
                case ("1, 1"):
                    // stay the same
                    break;
                case ("1, 2"):
                    tile["x-coordinate"] = 0;
                    tile["y-coordinate"] = 1;
                    break;
                case ("2, 0"):
                    tile["x-coordinate"] = 2;
                    tile["y-coordinate"] = 2;
                    break;
                case ("2, 1"):
                    tile["x-coordinate"] = 1;
                    tile["y-coordinate"] = 2;
                    break;
                case ("2, 2"):
                    tile["x-coordinate"] = 0;
                    tile["y-coordinate"] = 2;
                    break;
                default:
                    throw new Error("oops mistake made");
            }
        });
    };

    @action.bound
    reset = () => {
        this.ALL_TILES = INIT_CONFIG
    };
}