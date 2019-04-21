import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import {configure, observable, action, computed} from 'mobx';
import {observer} from "mobx-react";
import Face from "@components/face";
import FACES from "@constants/faces";
import INIT_CONFIG from "@data/initial_configuration";

// don't allow state modifications outside actions
configure({enforceActions: "always"});

const StyledAppContainer = styled.div`
    background-color: lightgoldenrodyellow;
    color: white;
    text-shadow: 0px 0px 4px #333;
    font-size: 2rem;
    height: 100%;
    width: 100%;
    padding: 100px;
`;

const App = () => {
    return(
        <StyledAppContainer>
            <Cube />
        </StyledAppContainer>
    );
};

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: [first-col] 310px [second-col] 310px [third-col] 310px [fourth-col] 310px;
    grid-template-rows: [top-row] 310px [middle-row] 310px [bottom-row] 310px;
`;

/* For the western color scheme, the letters correspond to the following colors:
    L: orange, F: green, R: red, B: blue, D: yellow, U: white
 */
const StyledLFace = styled(Face)` // L = Left
    grid-column-start: first-col;
    grid-row-start: middle-row;
`;

const StyledFFace = styled(Face)` // F = Front
    grid-column-start: second-col;
    grid-row-start: middle-row;
`;

const StyledRFace = styled(Face)` // R = Right
    grid-column-start: third-col;
    grid-row-start: middle-row;
`;

const StyledBFace = styled(Face)` // B = Back
    grid-column-start: fourth-col;
    grid-row-start: middle-row;
`;

const StyledDFace = styled(Face)` // D = Down
    grid-column-start: second-col;
    grid-row-start: bottom-row;
`;

const StyledUFace = styled(Face)` // U = Up
    grid-column-start: second-col;
    grid-row-start: top-row;
`;

@observer
class Cube extends React.Component {
    @observable title = "Rubik's Cube";
    @observable ALL_TILES = INIT_CONFIG;
    // @observable ALL_TILES = new Map(INIT_CONFIG);
    @computed get FACE_F_TILES() { return this.ALL_TILES.filter(tile => tile.face === FACES.F_FACE); } // blue
    @computed get FACE_B_TILES() { return this.ALL_TILES.filter(tile => tile.face === FACES.B_FACE); } // red
    @computed get FACE_U_TILES() { return this.ALL_TILES.filter(tile => tile.face === FACES.U_FACE); } // green
    @computed get FACE_D_TILES() { return this.ALL_TILES.filter(tile => tile.face === FACES.D_FACE); } // orange
    @computed get FACE_R_TILES() { return this.ALL_TILES.filter(tile => tile.face === FACES.R_FACE); } // yellow
    @computed get FACE_L_TILES() { return this.ALL_TILES.filter(tile => tile.face === FACES.L_FACE); } // white

    constructor(props) {
        super(props);
        // this.FACE_F_TILES = INIT_CONFIG.filter(tile => tile.face === FACES.F_FACE); // blue
        // this.FACE_B_TILES = INIT_CONFIG.filter(tile => tile.face === FACES.B_FACE); // red
        // this.FACE_U_TILES = INIT_CONFIG.filter(tile => tile.face === FACES.U_FACE); // green
        // this.FACE_D_TILES = INIT_CONFIG.filter(tile => tile.face === FACES.D_FACE); // orange
        // this.FACE_R_TILES = INIT_CONFIG.filter(tile => tile.face === FACES.R_FACE); // yellow
        // this.FACE_L_TILES = INIT_CONFIG.filter(tile => tile.face === FACES.L_FACE); // white
        // window.INIT_CONFIG = INIT_CONFIG;
        // window.faceA = this.FACE_F_TILES;
        window.ALL_TILES = this.ALL_TILES;
    }

    @action.bound
    handleClick = () => {
        if(this.title === "Rubik's Cube") {
            this.title = "Andrew's Cube";
        } else {
            this.title = "Rubik's Cube";
        }
    };

    @action.bound
    rotateMiddleRight90 = function rotateMiddleRight90() {
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
    rotateMiddleUp90 = function rotateMiddleUp90() {
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
    reset = function reset() {
        this.ALL_TILES = INIT_CONFIG
    };

    render() {
        return(
            <React.Fragment>
                <div>
                    <div>{this.title}</div>
                    <button
                        onClick={this.handleClick}
                    >
                        Toggle Title
                    </button>
                </div>
                <br />
                <StyledGrid>
                    <StyledFFace tiles={this.FACE_F_TILES} />
                    <StyledBFace tiles={this.FACE_B_TILES} />
                    <StyledUFace tiles={this.FACE_U_TILES} />
                    <StyledDFace tiles={this.FACE_D_TILES} />
                    <StyledRFace tiles={this.FACE_R_TILES} />
                    <StyledLFace tiles={this.FACE_L_TILES} />
                </StyledGrid>
                <br />
                <button
                    onClick={this.rotateMiddleRight90}
                >
                    Rotate Middle =>
                </button>
                <button
                    onClick={this.rotateMiddleUp90}
                >
                    Rotate Middle ^
                </button>
                <button
                    onClick={this.reset}
                >
                    Reset
                </button>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app_root"));