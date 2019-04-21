import COLORS from "@constants/colors";
import FACES from "@constants/faces";
/**
 * @fileoverview Array of tile objects that represent the initial configuration of the Rubik's cube.
 */

// TODO -- consider another data structure arrangement such as sorting by faces for better access times

const INIT_CONFIG = [
    //======================================
    // FACE A (initially the front face)
    //======================================

    //--------------------------------------
    // bottom row, left to right
    //--------------------------------------
    // tile 1
    {
        face: FACES.FACE_A,
        "x-coordinate": 0,
        "y-coordinate": 0,
        color: COLORS.BLUE
    },
    // tile 2
    {
        face: FACES.FACE_A,
        "x-coordinate": 1,
        "y-coordinate": 0,
        color: COLORS.BLUE
    },
    // tile 3
    {
        face: FACES.FACE_A,
        "x-coordinate": 2,
        "y-coordinate": 0,
        color: COLORS.BLUE
    },
    //--------------------------------------
    // middle row, left to right
    //--------------------------------------
    // tile 4
    {
        face: FACES.FACE_A,
        "x-coordinate": 0,
        "y-coordinate": 1,
        color: COLORS.BLUE
    },
    // tile 5
    {
        face: FACES.FACE_A,
        "x-coordinate": 1,
        "y-coordinate": 1,
        color: COLORS.BLUE
    },
    // tile 6
    {
        face: FACES.FACE_A,
        "x-coordinate": 2,
        "y-coordinate": 1,
        color: COLORS.BLUE
    },
    //--------------------------------------
    // top row, left to right
    //--------------------------------------
    // tile 7
    {
        face: FACES.FACE_A,
        "x-coordinate": 0,
        "y-coordinate": 2,
        color: COLORS.BLUE
    },
    // tile 8
    {
        face: FACES.FACE_A,
        "x-coordinate": 1,
        "y-coordinate": 2,
        color: COLORS.BLUE
    },
    // tile 9
    {
        face: FACES.FACE_A,
        "x-coordinate": 2,
        "y-coordinate": 2,
        color: COLORS.BLUE
    },

    //======================================
    // FACE B (initially the back face)
    //======================================

    //--------------------------------------
    // bottom row, left to right
    //--------------------------------------
    // tile 1
    {
        face: FACES.FACE_B,
        "x-coordinate": 0,
        "y-coordinate": 0,
        color: COLORS.RED
    },
    // tile 2
    {
        face: FACES.FACE_B,
        "x-coordinate": 1,
        "y-coordinate": 0,
        color: COLORS.RED
    },
    // tile 3
    {
        face: FACES.FACE_B,
        "x-coordinate": 2,
        "y-coordinate": 0,
        color: COLORS.RED
    },
    //--------------------------------------
    // middle row, left to right
    //--------------------------------------
    // tile 4
    {
        face: FACES.FACE_B,
        "x-coordinate": 0,
        "y-coordinate": 1,
        color: COLORS.RED
    },
    // tile 5
    {
        face: FACES.FACE_B,
        "x-coordinate": 1,
        "y-coordinate": 1,
        color: COLORS.RED
    },
    // tile 6
    {
        face: FACES.FACE_B,
        "x-coordinate": 2,
        "y-coordinate": 1,
        color: COLORS.RED
    },
    //--------------------------------------
    // top row, left to right
    //--------------------------------------
    // tile 7
    {
        face: FACES.FACE_B,
        "x-coordinate": 0,
        "y-coordinate": 2,
        color: COLORS.RED
    },
    // tile 8
    {
        face: FACES.FACE_B,
        "x-coordinate": 1,
        "y-coordinate": 2,
        color: COLORS.RED
    },
    // tile 9
    {
        face: FACES.FACE_B,
        "x-coordinate": 2,
        "y-coordinate": 2,
        color: COLORS.RED
    },

    //======================================
    // FACE C (initially the top face)
    //======================================

    //--------------------------------------
    // bottom row, left to right
    //--------------------------------------
    // tile 1
    {
        face: FACES.FACE_C,
        "x-coordinate": 0,
        "y-coordinate": 0,
        color: COLORS.GREEN
    },
    // tile 2
    {
        face: FACES.FACE_C,
        "x-coordinate": 1,
        "y-coordinate": 0,
        color: COLORS.GREEN
    },
    // tile 3
    {
        face: FACES.FACE_C,
        "x-coordinate": 2,
        "y-coordinate": 0,
        color: COLORS.GREEN
    },
    //--------------------------------------
    // middle row, left to right
    //--------------------------------------
    // tile 4
    {
        face: FACES.FACE_C,
        "x-coordinate": 0,
        "y-coordinate": 1,
        color: COLORS.GREEN
    },
    // tile 5
    {
        face: FACES.FACE_C,
        "x-coordinate": 1,
        "y-coordinate": 1,
        color: COLORS.GREEN
    },
    // tile 6
    {
        face: FACES.FACE_C,
        "x-coordinate": 2,
        "y-coordinate": 1,
        color: COLORS.GREEN
    },
    //--------------------------------------
    // top row, left to right
    //--------------------------------------
    // tile 7
    {
        face: FACES.FACE_C,
        "x-coordinate": 0,
        "y-coordinate": 2,
        color: COLORS.GREEN
    },
    // tile 8
    {
        face: FACES.FACE_C,
        "x-coordinate": 1,
        "y-coordinate": 2,
        color: COLORS.GREEN
    },
    // tile 9
    {
        face: FACES.FACE_C,
        "x-coordinate": 2,
        "y-coordinate": 2,
        color: COLORS.GREEN
    },

    //======================================
    // FACE D (initially the bottom face)
    //======================================

    //--------------------------------------
    // bottom row, left to right
    //--------------------------------------
    // tile 1
    {
        face: FACES.FACE_D,
        "x-coordinate": 0,
        "y-coordinate": 0,
        color: COLORS.ORANGE
    },
    // tile 2
    {
        face: FACES.FACE_D,
        "x-coordinate": 1,
        "y-coordinate": 0,
        color: COLORS.ORANGE
    },
    // tile 3
    {
        face: FACES.FACE_D,
        "x-coordinate": 2,
        "y-coordinate": 0,
        color: COLORS.ORANGE
    },
    //--------------------------------------
    // middle row, left to right
    //--------------------------------------
    // tile 4
    {
        face: FACES.FACE_D,
        "x-coordinate": 0,
        "y-coordinate": 1,
        color: COLORS.ORANGE
    },
    // tile 5
    {
        face: FACES.FACE_D,
        "x-coordinate": 1,
        "y-coordinate": 1,
        color: COLORS.ORANGE
    },
    // tile 6
    {
        face: FACES.FACE_D,
        "x-coordinate": 2,
        "y-coordinate": 1,
        color: COLORS.ORANGE
    },
    //--------------------------------------
    // top row, left to right
    //--------------------------------------
    // tile 7
    {
        face: FACES.FACE_D,
        "x-coordinate": 0,
        "y-coordinate": 2,
        color: COLORS.ORANGE
    },
    // tile 8
    {
        face: FACES.FACE_D,
        "x-coordinate": 1,
        "y-coordinate": 2,
        color: COLORS.ORANGE
    },
    // tile 9
    {
        face: FACES.FACE_D,
        "x-coordinate": 2,
        "y-coordinate": 2,
        color: COLORS.ORANGE
    },

    //======================================
    // FACE E (initially the right face)
    //======================================

    //--------------------------------------
    // bottom row, left to right
    //--------------------------------------
    // tile 1
    {
        face: FACES.FACE_E,
        "x-coordinate": 0,
        "y-coordinate": 0,
        color: COLORS.YELLOW
    },
    // tile 2
    {
        face: FACES.FACE_E,
        "x-coordinate": 1,
        "y-coordinate": 0,
        color: COLORS.YELLOW
    },
    // tile 3
    {
        face: FACES.FACE_E,
        "x-coordinate": 2,
        "y-coordinate": 0,
        color: COLORS.YELLOW
    },
    //--------------------------------------
    // middle row, left to right
    //--------------------------------------
    // tile 4
    {
        face: FACES.FACE_E,
        "x-coordinate": 0,
        "y-coordinate": 1,
        color: COLORS.YELLOW
    },
    // tile 5
    {
        face: FACES.FACE_E,
        "x-coordinate": 1,
        "y-coordinate": 1,
        color: COLORS.YELLOW
    },
    // tile 6
    {
        face: FACES.FACE_E,
        "x-coordinate": 2,
        "y-coordinate": 1,
        color: COLORS.YELLOW
    },
    //--------------------------------------
    // top row, left to right
    //--------------------------------------
    // tile 7
    {
        face: FACES.FACE_E,
        "x-coordinate": 0,
        "y-coordinate": 2,
        color: COLORS.YELLOW
    },
    // tile 8
    {
        face: FACES.FACE_E,
        "x-coordinate": 1,
        "y-coordinate": 2,
        color: COLORS.YELLOW
    },
    // tile 9
    {
        face: FACES.FACE_E,
        "x-coordinate": 2,
        "y-coordinate": 2,
        color: COLORS.YELLOW
    },

    //======================================
    // FACE F (initially the left face)
    //======================================

    //--------------------------------------
    // bottom row, left to right
    //--------------------------------------
    // tile 1
    {
        face: FACES.FACE_F,
        "x-coordinate": 0,
        "y-coordinate": 0,
        color: COLORS.WHITE
    },
    // tile 2
    {
        face: FACES.FACE_F,
        "x-coordinate": 1,
        "y-coordinate": 0,
        color: COLORS.WHITE
    },
    // tile 3
    {
        face: FACES.FACE_F,
        "x-coordinate": 2,
        "y-coordinate": 0,
        color: COLORS.WHITE
    },
    //--------------------------------------
    // middle row, left to right
    //--------------------------------------
    // tile 4
    {
        face: FACES.FACE_F,
        "x-coordinate": 0,
        "y-coordinate": 1,
        color: COLORS.WHITE
    },
    // tile 5
    {
        face: FACES.FACE_F,
        "x-coordinate": 1,
        "y-coordinate": 1,
        color: COLORS.WHITE
    },
    // tile 6
    {
        face: FACES.FACE_F,
        "x-coordinate": 2,
        "y-coordinate": 1,
        color: COLORS.WHITE
    },
    //--------------------------------------
    // top row, left to right
    //--------------------------------------
    // tile 7
    {
        face: FACES.FACE_F,
        "x-coordinate": 0,
        "y-coordinate": 2,
        color: COLORS.WHITE
    },
    // tile 8
    {
        face: FACES.FACE_F,
        "x-coordinate": 1,
        "y-coordinate": 2,
        color: COLORS.WHITE
    },
    // tile 9
    {
        face: FACES.FACE_F,
        "x-coordinate": 2,
        "y-coordinate": 2,
        color: COLORS.WHITE
    },
];

export default INIT_CONFIG;