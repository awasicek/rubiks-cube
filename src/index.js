import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import {configure, observable, action} from 'mobx';
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

    constructor(props) {
        super(props);
        this.FACE_A_TILES = INIT_CONFIG.filter(tile => tile.face === FACES.FACE_A); // blue
        this.FACE_B_TILES = INIT_CONFIG.filter(tile => tile.face === FACES.FACE_B); // red
        this.FACE_C_TILES = INIT_CONFIG.filter(tile => tile.face === FACES.FACE_C); // green
        this.FACE_D_TILES = INIT_CONFIG.filter(tile => tile.face === FACES.FACE_D); // orange
        this.FACE_E_TILES = INIT_CONFIG.filter(tile => tile.face === FACES.FACE_E); // yellow
        this.FACE_F_TILES = INIT_CONFIG.filter(tile => tile.face === FACES.FACE_F); // white
        window.faceA = this.FACE_A_TILES;
    }

    @action.bound
    handleClick = () => {
        if(this.title === "Rubik's Cube") {
            this.title = "Andrew's Cube";
        } else {
            this.title = "Rubik's Cube";
        }
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
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app_root"));