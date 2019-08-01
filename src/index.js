import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { configure } from "mobx";
import UnfoldedCube from "@components/cube/unfolded_cube";
import CubeStore from "@stores/cube_store";
import { debugStore } from "@stores/globals";

// don't allow state modifications outside actions
configure({ enforceActions: "always" });

window._debugStore = debugStore;

const StyledAppContainer = styled.div`
    background-color: #fcf8f2;
    color: white;
    text-shadow: 0px 0px 4px #333;
    font-size: 2rem;
    height: 100vh;
    width: 100vw;
    overflow: scroll;
    padding: 200px 0;
    font-family: Tahoma, Geneva, sans-serif;
`;

const StyledLayoutWrapper = styled.div`
    margin: 0 auto;
    width: max-content;
    height: max-content;
`;

const cubeStore = new CubeStore(); // TODO share via context hook

// DEV ONLY debugging
window._cubeStore = cubeStore;

const App = ({ cubeStore }) => {
    return (
        <StyledAppContainer>
            <StyledLayoutWrapper>
                <UnfoldedCube cubeStore={cubeStore} />
            </StyledLayoutWrapper>
        </StyledAppContainer>
    );
};

ReactDOM.render(<App cubeStore={cubeStore} />, document.getElementById("app_root"));
