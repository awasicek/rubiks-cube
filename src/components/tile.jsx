import styled from "styled-components";
import React from "react";
/**
 * @fileoverview Component that displays a single tile of a Rubik's cube. Each face displays 9 tiles, and the Rubik's
 * cube has a total of 54 tiles. Tiles can be one of six colors: green, red, white, yellow, blue, or orange.
 */

const StyledTile = styled.div`
    border: 1px solid black;
    height: 100px;
    width: 100px;
    background: ${props => props.tileColor};
`;

const Tile = props => {
    return(
        <StyledTile tileColor={props.tileColor} />
    );
};

Tile.defaultProps = {
    tileColor: "red"
};

export default Tile;