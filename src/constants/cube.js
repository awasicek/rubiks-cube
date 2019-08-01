import { createEnum } from "@utils/utils";

/**
 * @fileoverview Constants relating to the Rubik's cube's characteristics and behavior.
 */

/**
 * @description Rubik's cube colors
 * @type {{RED: string, GREEN: string, WHITE: string, YELLOW: string, BLUE: string, ORANGE: string}}
 */
export const colors = {
    RED: "red",
    GREEN: "green",
    WHITE: "white",
    YELLOW: "yellow",
    BLUE: "blue",
    ORANGE: "orange"
};

/**
 * @description Direction enumeration
 * @type {{ LEFT: <Symbol>, RIGHT: <Symbol>, UP: <Symbol>, DOWN: <Symbol> }}
 */
export const directions = createEnum("LEFT", "RIGHT", "UP", "DOWN");

/**
 * @description Row enumeration
 * @type {{ TOP: <Symbol>, MIDDLE: <Symbol>, BOTTOM: <Symbol> }}
 */
export const rows = createEnum("TOP", "MIDDLE", "BOTTOM");

/**
 * @description Column enumeration
 * @type {{ LEFT: <Symbol>, CENTER: <Symbol>, RIGHT: <Symbol> }}
 */
export const columns = createEnum("LEFT", "CENTER", "RIGHT");
