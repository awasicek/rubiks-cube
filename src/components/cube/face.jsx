import Tile from "@components/cube/tile";
import React from "react";
import styled from "styled-components";
/**
 * @fileoverview Component that displays a face of the Rubik's cube. 3x3 grid of tiles. There are six total faces
 * on a Rubik's cube.
 */

const StyledFaceContainer = styled.div`

`;

const StyledFaceRow = styled.div`
    display: flex;
`;

const Face = props => {
    const { tiles } = props;
    const topTiles = tiles.filter(tile => tile["y-coordinate"] === 2);
    const topRightTile = topTiles.find(tile => tile["x-coordinate"] === 2);
    const topMiddleTile = topTiles.find(tile => tile["x-coordinate"] === 1);
    const topLeftTile = topTiles.find(tile => tile["x-coordinate"] === 0);

    const centerTiles = tiles.filter(tile => tile["y-coordinate"] === 1);
    const centerRightTile = centerTiles.find(tile => tile["x-coordinate"] === 2);
    const centerMiddleTile = centerTiles.find(tile => tile["x-coordinate"] === 1);
    const centerLeftTile = centerTiles.find(tile => tile["x-coordinate"] === 0);

    const bottomTiles = tiles.filter(tile => tile["y-coordinate"] === 0);
    const bottomRightTile = bottomTiles.find(tile => tile["x-coordinate"] === 2);
    const bottomMiddleTile = bottomTiles.find(tile => tile["x-coordinate"] === 1);
    const bottomLeftTile = bottomTiles.find(tile => tile["x-coordinate"] === 0);

    window.tiles = tiles;
    window.bottomLeftTile = bottomLeftTile;

    return(
          <StyledFaceContainer className={props.className}>
              {/*top row*/}
              <StyledFaceRow>
                  <Tile
                      initX={0}
                      initY={2}
                      uid={topLeftTile.uid}
                      tileColor={topLeftTile.color}
                  /> {/*left*/}
                  <Tile
                      initX={1}
                      initY={2}
                      uid={topMiddleTile.uid}
                      tileColor={topMiddleTile.color}
                  /> {/*middle*/}
                  <Tile
                      initX={2}
                      initY={2}
                      uid={topRightTile.uid}
                      tileColor={topRightTile.color}
                  /> {/*right*/}
              </StyledFaceRow>
              {/*center row*/}
              <StyledFaceRow>
                  <Tile
                      initX={0}
                      initY={1}
                      uid={centerLeftTile.uid}
                      tileColor={centerLeftTile.color}
                  /> {/*left*/}
                  <Tile
                      initX={1}
                      initY={1}
                      uid={centerMiddleTile.uid}
                      tileColor={centerMiddleTile.color}
                  /> {/*middle*/}
                  <Tile
                      initX={2}
                      initY={1}
                      uid={centerRightTile.uid}
                      tileColor={centerRightTile.color}
                  /> {/*right*/}
              </StyledFaceRow>
              {/*bottom row*/}
              <StyledFaceRow>
                  <Tile
                      initX={0}
                      initY={0}
                      uid={bottomLeftTile.uid}
                      tileColor={bottomLeftTile.color}
                  /> {/*left*/}
                  <Tile
                      initX={1}
                      initY={0}
                      uid={bottomMiddleTile.uid}
                      tileColor={bottomMiddleTile.color}
                  /> {/*middle*/}
                  <Tile
                      initX={2}
                      initY={0}
                      uid={bottomRightTile.uid}
                      tileColor={bottomRightTile.color}
                  /> {/*right*/}
              </StyledFaceRow>
          </StyledFaceContainer>
    );
};

export default Face;