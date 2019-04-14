import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const StyledAppContainer = styled.div`
    background-color: green;
    color: white;
    font-size: 2rem;
`;

const App = () => {
    return <StyledAppContainer>Rubik's Cube</StyledAppContainer>;
};

ReactDOM.render(<App />, document.getElementById("app_root"));