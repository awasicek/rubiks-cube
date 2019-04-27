import styled from "styled-components";
import React from "react";
import { RightArrow } from "styled-icons/boxicons-regular/RightArrow";
import { LeftArrow } from "styled-icons/boxicons-regular/LeftArrow";
import { DownArrow } from "styled-icons/boxicons-regular/DownArrow";
import { UpArrow } from "styled-icons/boxicons-regular/UpArrow";

const StyledRightArrow = styled(RightArrow)`
    color: #222;
    cursor: pointer;
    
    &:hover {
        color: #444;
    }
    
    &:active {
        color: #222;
    }
`;

const StyledLeftArrow = styled(LeftArrow)`
    color: #222;
    cursor: pointer;
    
    &:hover {
        color: #444;
    }
    
    &:active {
        color: #222;
    }
`;

const StyledUpArrow = styled(UpArrow)`
    color: #222;
    cursor: pointer;
    
    &:hover {
        color: #444;
    }
    
    &:active {
        color: #222;
    }
`;

const StyledDownArrow = styled(DownArrow)`
    color: #222;
    cursor: pointer;
    
    &:hover {
        color: #444;
    }
        
    &:active {
        color: #222;
    }
`;

const RotateButton = props => {
    const {
        arrowDirection,
        clickHandler,
        size,
        tooltip
    } = props;

    switch(arrowDirection) {
        case "up": {
            return(
                <StyledUpArrow
                    onClick={clickHandler}
                    size={size}
                    title={tooltip ? tooltip : "Rotate Up"}
                />
            );
        }

        case "down": {
            return(
                <StyledDownArrow
                    onClick={clickHandler}
                    size={size}
                    title={tooltip ? tooltip : "Rotate Down"}
                />
            );
        }

        case "right": {
            return(
                <StyledRightArrow
                    onClick={clickHandler}
                    size={size}
                    title={tooltip ? tooltip : "Rotate Right"}
                />
            );
        }

        case "left": {
            return(
                <StyledLeftArrow
                    onClick={clickHandler}
                    size={size}
                    title={tooltip ? tooltip : "Rotate Left"}
                />
            );
        }

        default:
            throw new Error("oops, no arrow with that direction");
    }
};

RotateButton.defaultProps = {
    size: 60
};

export default RotateButton;