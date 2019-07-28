import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";

const StyledButton = styled.div`
    cursor: pointer;
    border: 1px solid #ccc;
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

/**
 * @describe Renders a single button.
 */
const Button = ({ clickHandler, text, tooltip }) => (
    <StyledButton onClick={clickHandler} title={tooltip}>
        {text}
    </StyledButton>
);

Button.propTypes = {
    /** handle the button's action when clicked */
    clickHandler: PropTypes.func,
    /** tooltip text */
    tooltip: PropTypes.string,
    /** name that appears on the button */
    text: PropTypes.string
};

export default Button;
