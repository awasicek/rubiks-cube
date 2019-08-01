import styled from "styled-components";
import React from "react";
import { debugStore } from "@stores/globals";
import { observer } from "mobx-react-lite";
/**
 * @fileoverview Component that displays a single tile of a Rubik's cube. Each face displays 9 tiles, and the Rubik's
 * cube has a total of 54 tiles. Tiles can be one of six colors: green, red, white, yellow, blue, or orange.
 */

const StyledTile = styled.div.attrs(props => ({
    "data-static-coords": `${props.initX}, ${props.initY}`,
    "data-tile-id": props.id
}))`
    border: 1px solid black;
    height: 100px;
    width: 100px;
    background: ${props => props.tileColor};
`;

const Tile = observer(props => {
    return (
        <StyledTile tileColor={props.tileColor} initX={props.initX} initY={props.initY} id={props.id}>
            {debugStore.isDebugModeEnabled ? props.id : ""}
        </StyledTile>
    );
});

Tile.defaultProps = {
    tileColor: "grey",
    initX: "errorX",
    initY: "errorY",
    id: "errorID"
};

export default Tile;
