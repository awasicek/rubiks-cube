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
    const topTiles = tiles.filter(tile => tile["y-coordinate"] === 1);
    const topRightTile = topTiles.find(tile => tile["x-coordinate"] === 1);
    const topMiddleTile = topTiles.find(tile => tile["x-coordinate"] === 0);
    const topLeftTile = topTiles.find(tile => tile["x-coordinate"] === -1);

    const centerTiles = tiles.filter(tile => tile["y-coordinate"] === 0);
    const centerRightTile = centerTiles.find(
        tile => tile["x-coordinate"] === 1
    );
    const centerMiddleTile = centerTiles.find(
        tile => tile["x-coordinate"] === 0
    );
    const centerLeftTile = centerTiles.find(
        tile => tile["x-coordinate"] === -1
    );

    const bottomTiles = tiles.filter(tile => tile["y-coordinate"] === -1);
    const bottomRightTile = bottomTiles.find(
        tile => tile["x-coordinate"] === 1
    );
    const bottomMiddleTile = bottomTiles.find(
        tile => tile["x-coordinate"] === 0
    );
    const bottomLeftTile = bottomTiles.find(
        tile => tile["x-coordinate"] === -1
    );

    window.tiles = tiles;

    return (
        <StyledFaceContainer className={className}>
            {/*top row*/}
            <StyledFaceRow>
                <Tile
                    initX={-1}
                    initY={1}
                    uid={topLeftTile.uid}
                    tileColor={topLeftTile.color}
                />{" "}
                {/*left*/}
                <Tile
                    initX={0}
                    initY={1}
                    uid={topMiddleTile.uid}
                    tileColor={topMiddleTile.color}
                />{" "}
                {/*middle*/}
                <Tile
                    initX={1}
                    initY={1}
                    uid={topRightTile.uid}
                    tileColor={topRightTile.color}
                />{" "}
                {/*right*/}
            </StyledFaceRow>
            {/*center row*/}
            <StyledFaceRow>
                <Tile
                    initX={-1}
                    initY={0}
                    uid={centerLeftTile.uid}
                    tileColor={centerLeftTile.color}
                />{" "}
                {/*left*/}
                <Tile
                    initX={0}
                    initY={0}
                    uid={centerMiddleTile.uid}
                    tileColor={centerMiddleTile.color}
                />{" "}
                {/*middle*/}
                <Tile
                    initX={1}
                    initY={0}
                    uid={centerRightTile.uid}
                    tileColor={centerRightTile.color}
                />{" "}
                {/*right*/}
            </StyledFaceRow>
            {/*bottom row*/}
            <StyledFaceRow>
                <Tile
                    initX={-1}
                    initY={-1}
                    uid={bottomLeftTile.uid}
                    tileColor={bottomLeftTile.color}
                />{" "}
                {/*left*/}
                <Tile
                    initX={0}
                    initY={-1}
                    uid={bottomMiddleTile.uid}
                    tileColor={bottomMiddleTile.color}
                />{" "}
                {/*middle*/}
                <Tile
                    initX={1}
                    initY={-1}
                    uid={bottomRightTile.uid}
                    tileColor={bottomRightTile.color}
                />{" "}
                {/*right*/}
            </StyledFaceRow>
        </StyledFaceContainer>
    );
};

Face.propTypes = {
    tiles: PropTypes.arrayOf(
        PropTypes.shape({
            face: PropTypes.number,
            "x-coordinate": PropTypes.number,
            "y-coordinate": PropTypes.number,
            color: PropTypes.string,
            uid: PropTypes.number
        })
    ),
    className: PropTypes.string
};

export default Face;
