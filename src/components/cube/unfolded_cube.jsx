import React from "react";
import styled from "styled-components";
import Face from "@components/cube/face";
import { observer } from "mobx-react";
import CubeStore from "@stores/cube_store";

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
export default class UnfoldedCube extends React.Component {
    constructor(props) {
        super(props);
        this.cubeStore = new CubeStore();
        window.cubeStore = this.cubeStore;
    }

    render() {
        return(
            <React.Fragment>
                <StyledGrid>
                    <StyledFFace tiles={this.cubeStore.FACE_F_TILES} />
                    <StyledBFace tiles={this.cubeStore.FACE_B_TILES} />
                    <StyledUFace tiles={this.cubeStore.FACE_U_TILES} />
                    <StyledDFace tiles={this.cubeStore.FACE_D_TILES} />
                    <StyledRFace tiles={this.cubeStore.FACE_R_TILES} />
                    <StyledLFace tiles={this.cubeStore.FACE_L_TILES} />
                </StyledGrid>
                <br />
                <button
                    onClick={this.cubeStore.rotateTopRight90}
                >
                    Rotate Top =>
                </button>
                <button
                    onClick={this.cubeStore.rotateMiddleRight90}
                >
                    Rotate Middle =>
                </button>
                <button
                    onClick={this.cubeStore.rotateLeftUp90}
                >
                    Rotate Left ^
                </button>
                <button
                    onClick={this.cubeStore.rotateMiddleUp90}
                >
                    Rotate Middle ^
                </button>
                <button
                    onClick={this.cubeStore.rotateRightUp90}
                >
                    Rotate Right ^
                </button>
                <button
                    onClick={this.cubeStore.reset}
                >
                    Reset
                </button>
            </React.Fragment>
        );
    }
}