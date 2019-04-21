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
const StyledLFace = styled(Face)`
    grid-column-start: first-col;
    grid-row-start: middle-row;
`;

const StyledFFace = styled(Face)`
    grid-column-start: second-col;
    grid-row-start: middle-row;
`;

const StyledRFace = styled(Face)`
    grid-column-start: third-col;
    grid-row-start: middle-row;
`;

const StyledBFace = styled(Face)`
    grid-column-start: fourth-col;
    grid-row-start: middle-row;
`;

const StyledDFace = styled(Face)`
    grid-column-start: second-col;
    grid-row-start: bottom-row;
`;

const StyledUFace = styled(Face)`
    grid-column-start: second-col;
    grid-row-start: top-row;
`;

@observer
class Cube extends React.Component {
    @observable title = "Rubik's Cube";
    @observable ALL_TILES = INIT_CONFIG;
    // @observable ALL_TILES = new Map(INIT_CONFIG);
    @computed get FACE_A_TILES() { return this.ALL_TILES.filter(tile => tile.face === FACES.FACE_A); } // blue
    @computed get FACE_B_TILES() { return this.ALL_TILES.filter(tile => tile.face === FACES.FACE_B); } // red
    @computed get FACE_C_TILES() { return this.ALL_TILES.filter(tile => tile.face === FACES.FACE_C); } // green
    @computed get FACE_D_TILES() { return this.ALL_TILES.filter(tile => tile.face === FACES.FACE_D); } // orange
    @computed get FACE_E_TILES() { return this.ALL_TILES.filter(tile => tile.face === FACES.FACE_E); } // yellow
    @computed get FACE_F_TILES() { return this.ALL_TILES.filter(tile => tile.face === FACES.FACE_F); } // white

    constructor(props) {
        super(props);
        // this.FACE_A_TILES = INIT_CONFIG.filter(tile => tile.face === FACES.FACE_A); // blue
        // this.FACE_B_TILES = INIT_CONFIG.filter(tile => tile.face === FACES.FACE_B); // red
        // this.FACE_C_TILES = INIT_CONFIG.filter(tile => tile.face === FACES.FACE_C); // green
        // this.FACE_D_TILES = INIT_CONFIG.filter(tile => tile.face === FACES.FACE_D); // orange
        // this.FACE_E_TILES = INIT_CONFIG.filter(tile => tile.face === FACES.FACE_E); // yellow
        // this.FACE_F_TILES = INIT_CONFIG.filter(tile => tile.face === FACES.FACE_F); // white
        // window.INIT_CONFIG = INIT_CONFIG;
        // window.faceA = this.FACE_A_TILES;
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
    rotateMiddleRight90 = () => {
        // top (C) and bottom (D) stay same
        // front (A) -> right (E) -> back (B) -> left (F) -> front (A)
        // middle tiles have y-coordinate = 1
        let affectedTiles = this.ALL_TILES.filter(tile => tile["y-coordinate"] === 1 && tile.face !== FACES.FACE_C && tile.face !== FACES.FACE_D);
        window.affectedTiles = affectedTiles;
        affectedTiles.forEach(tile => {
            switch(tile.face) {
                case FACES.FACE_A:
                    tile.face = FACES.FACE_E;
                    break;
                case FACES.FACE_E:
                    tile.face = FACES.FACE_B;
                    break;
                case FACES.FACE_B:
                    tile.face = FACES.FACE_F;
                    break;
                case FACES.FACE_F:
                    tile.face = FACES.FACE_A;
                    break;
                default:
                    throw new Error("oops mistake made");
            }
        });
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
                    <StyledBFace tiles={this.FACE_A_TILES} />
                    <StyledRFace tiles={this.FACE_B_TILES} />
                    <StyledFFace tiles={this.FACE_C_TILES} />
                    <StyledLFace tiles={this.FACE_D_TILES} />
                    <StyledDFace tiles={this.FACE_E_TILES} />
                    <StyledUFace tiles={this.FACE_F_TILES} />
                </StyledGrid>
                <br />
                <button
                    onClick={this.rotateMiddleRight90}
                >
                    Rotate Middle =>
                </button>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app_root"));