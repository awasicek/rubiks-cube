import React from "react";
import styled from "styled-components";
import Face from "@components/cube/face";
import RotateButton from "@components/controls/rotate_button";
import Button from "@components/controls/button";
import { observer } from "mobx-react-lite";

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: [first-col] 310px [second-col] 310px [third-col] 310px [fourth-col] 310px;
    grid-template-rows: [top-row] 310px [middle-row] 310px [bottom-row] 310px;
`;

/* For the western color scheme, the letters correspond to the following colors:
    L: orange, F: green, R: red, B: blue, D: yellow, U: white
 */
const StyledLFace = styled(Face)`
    // L = Left
    grid-column-start: first-col;
    grid-row-start: middle-row;
`;

const StyledFFace = styled(Face)`
    // F = Front
    grid-column-start: second-col;
    grid-row-start: middle-row;
`;

const StyledRFace = styled(Face)`
    // R = Right
    grid-column-start: third-col;
    grid-row-start: middle-row;
`;

const StyledBFace = styled(Face)`
    // B = Back
    grid-column-start: fourth-col;
    grid-row-start: middle-row;
`;

const StyledDFace = styled(Face)`
    // D = Down
    grid-column-start: second-col;
    grid-row-start: bottom-row;
`;

const StyledUFace = styled(Face)`
    // U = Up
    grid-column-start: second-col;
    grid-row-start: top-row;
`;

const UnfoldedCube = observer(({ cubeStore }) => (
    <React.Fragment>
        <StyledGrid>
            <StyledFFace tiles={cubeStore.FACE_F_TILES} />
            <StyledBFace tiles={cubeStore.FACE_B_TILES} />
            <StyledUFace tiles={cubeStore.FACE_U_TILES} />
            <StyledDFace tiles={cubeStore.FACE_D_TILES} />
            <StyledRFace tiles={cubeStore.FACE_R_TILES} />
            <StyledLFace tiles={cubeStore.FACE_L_TILES} />
        </StyledGrid>
        <br />
        <button onClick={cubeStore.rotateTopRight90}>Rotate Top =&gt;</button>
        <button onClick={cubeStore.rotateMiddleRight90}>
            Rotate Middle =&gt;
        </button>
        <button onClick={cubeStore.rotateBottomRight90}>
            Rotate Bottom =&gt;
        </button>
        <button onClick={cubeStore.rotateLeftUp90}>Rotate Left ^</button>
        <button onClick={cubeStore.rotateMiddleUp90}>Rotate Middle ^</button>
        <button onClick={cubeStore.rotateRightUp90}>Rotate Right ^</button>
        <Button clickHandler={cubeStore.reset} text={"Reset"} />
        <RotateButton
            arrowDirection={"right"}
            clickHandler={cubeStore.rotateMiddleRight90}
        />
    </React.Fragment>
));

export default UnfoldedCube;
