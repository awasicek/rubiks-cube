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
    <>
        <StyledGrid>
            <StyledFFace tiles={cubeStore.tilesFaceF} />
            <StyledBFace tiles={cubeStore.tilesFaceB} />
            <StyledUFace tiles={cubeStore.tilesFaceU} />
            <StyledDFace tiles={cubeStore.tilesFaceD} />
            <StyledRFace tiles={cubeStore.tilesFaceR} />
            <StyledLFace tiles={cubeStore.tilesFaceL} />
        </StyledGrid>
        <br />
        <button onClick={cubeStore.rotateTopRight}>Rotate Top =&gt;</button>
        <button onClick={cubeStore.rotateTopLeft}>&lt;= Rotate Top</button>
        <button onClick={cubeStore.rotateMiddleRight}>Rotate Middle =&gt;</button>
        <button onClick={cubeStore.rotateMiddleLeft}>&lt;= Rotate Middle</button>
        <button onClick={cubeStore.rotateBottomRight}>Rotate Bottom =&gt;</button>
        <button onClick={cubeStore.rotateBottomLeft}>&lt;= Rotate Bottom</button>
        <button onClick={cubeStore.rotateLeftUp}>Rotate Left ^</button>
        <button onClick={cubeStore.rotateLeftDown}>Rotate Left v</button>
        <button onClick={cubeStore.rotateCenterUp}>Rotate Center ^</button>
        <button onClick={cubeStore.rotateCenterDown}>Rotate Center v</button>
        <button onClick={cubeStore.rotateRightUp}>Rotate Right ^</button>
        <button onClick={cubeStore.rotateRightDown}>Rotate Right v</button>
        <Button clickHandler={cubeStore.reset} text={"Reset"} />
        <RotateButton arrowDirection={"right"} clickHandler={cubeStore.rotateMiddleRight} />
    </>
));

export default UnfoldedCube;
