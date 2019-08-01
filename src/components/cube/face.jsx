import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Tile from "@components/cube/tile";

/**
 * @fileoverview Component that displays a face of the Rubik's cube. 3x3 grid of tiles. There are six total faces
 * on a Rubik's cube.
 */

const StyledFaceContainer = styled.div``;

const StyledFaceRow = styled.div`
    display: flex;
`;

const Face = ({ tiles, className }) => {
    const topTiles = tiles.filter(tile => tile.position.yCoord === 1);
    const topRightTile = topTiles.find(tile => tile.position.xCoord === 1);
    const topMiddleTile = topTiles.find(tile => tile.position.xCoord === 0);
    const topLeftTile = topTiles.find(tile => tile.position.xCoord === -1);

    const centerTiles = tiles.filter(tile => tile.position.yCoord === 0);
    const centerRightTile = centerTiles.find(tile => tile.position.xCoord === 1);
    const centerMiddleTile = centerTiles.find(tile => tile.position.xCoord === 0);
    const centerLeftTile = centerTiles.find(tile => tile.position.xCoord === -1);

    const bottomTiles = tiles.filter(tile => tile.position.yCoord === -1);
    const bottomRightTile = bottomTiles.find(tile => tile.position.xCoord === 1);
    const bottomMiddleTile = bottomTiles.find(tile => tile.position.xCoord === 0);
    const bottomLeftTile = bottomTiles.find(tile => tile.position.xCoord === -1);

    // DEV ONLY debugging
    window._tiles = tiles;

    return (
        <StyledFaceContainer className={className}>
            {/*top row*/}
            <StyledFaceRow>
                <Tile initX={-1} initY={1} id={topLeftTile.id} tileColor={topLeftTile.color} /> {/*left*/}
                <Tile initX={0} initY={1} id={topMiddleTile.id} tileColor={topMiddleTile.color} /> {/*middle*/}
                <Tile initX={1} initY={1} id={topRightTile.id} tileColor={topRightTile.color} /> {/*right*/}
            </StyledFaceRow>
            {/*center row*/}
            <StyledFaceRow>
                <Tile initX={-1} initY={0} id={centerLeftTile.id} tileColor={centerLeftTile.color} /> {/*left*/}
                <Tile initX={0} initY={0} id={centerMiddleTile.id} tileColor={centerMiddleTile.color} /> {/*middle*/}
                <Tile initX={1} initY={0} id={centerRightTile.id} tileColor={centerRightTile.color} /> {/*right*/}
            </StyledFaceRow>
            {/*bottom row*/}
            <StyledFaceRow>
                <Tile initX={-1} initY={-1} id={bottomLeftTile.id} tileColor={bottomLeftTile.color} /> {/*left*/}
                <Tile initX={0} initY={-1} id={bottomMiddleTile.id} tileColor={bottomMiddleTile.color} /> {/*middle*/}
                <Tile initX={1} initY={-1} id={bottomRightTile.id} tileColor={bottomRightTile.color} /> {/*right*/}
            </StyledFaceRow>
        </StyledFaceContainer>
    );
};

Face.propTypes = {
    tiles: PropTypes.arrayOf(
        PropTypes.shape({
            face: PropTypes.string,
            position: PropTypes.shape({
                id: PropTypes.string,
                xCoord: PropTypes.number,
                yCoord: PropTypes.number
            }),
            color: PropTypes.string,
            id: PropTypes.string
        })
    ),
    className: PropTypes.string
};

export default Face;
