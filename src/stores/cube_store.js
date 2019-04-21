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
    reset = () => {
        this.ALL_TILES = INIT_CONFIG
    };
}