import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { configure } from 'mobx';
import UnfoldedCube from "@components/cube/unfolded_cube";

// don't allow state modifications outside actions
configure({enforceActions: "always"});

const StyledAppContainer = styled.div`
    background-color: lightgoldenrodyellow;
    color: white;
    text-shadow: 0px 0px 4px #333;
    font-size: 2rem;
    height: 100%;
    width: 100%;
    padding: 100px;
`;

const App = () => {
    return(
        <StyledAppContainer>
            <UnfoldedCube />
        </StyledAppContainer>
    );
};

ReactDOM.render(<App />, document.getElementById("app_root"));