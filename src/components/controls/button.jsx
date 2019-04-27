import styled from "styled-components";
import React from "react";

const StyledButton = styled.div`
    cursor: pointer;
    border: 1px solid #CCC;
    padding: 10px 25px;
    width: 100px;
    text-align: center;
    border-radius: 8px;
    background: #ddd;
    user-select: none;
    
    &:hover {
        background: #eee;
    }
    
    &:active {
        background: #ddd;
    }
`;

const Button = props => {
    const {
        clickHandler,
        text,
        tooltip
    } = props;

    return(
        <StyledButton
            onClick={clickHandler}
            title={tooltip}
        >
            {text}
        </StyledButton>
    );
};

export default Button;