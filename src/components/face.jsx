import Tile from "@components/tile";
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
    return(
          <StyledFaceContainer>
              <StyledFaceRow>
                  <Tile />
                  <Tile />
                  <Tile />
              </StyledFaceRow>
              <StyledFaceRow>
                  <Tile />
                  <Tile />
                  <Tile />
              </StyledFaceRow>
              <StyledFaceRow>
                  <Tile />
                  <Tile />
                  <Tile />
              </StyledFaceRow>
          </StyledFaceContainer>
    );
};

export default Face;