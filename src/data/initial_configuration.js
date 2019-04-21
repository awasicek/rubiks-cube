import COLORS from "@constants/colors";
import FACES from "@constants/faces";
/**
 * @fileoverview Array of tile objects seed data for a map that represent the initial configuration of the Rubik's cube.
 */

// TODO -- consider another data structure arrangement such as sorting by faces for better access times

const INIT_CONFIG = [
    //======================================
    // FACE F (initially the front face)
    //======================================

    //--------------------------------------
    // bottom row, left to right
    //--------------------------------------
    // tile 1
    {
        face: FACES.F_FACE,
        "x-coordinate": -1,
        "y-coordinate": -1,
        color: COLORS.GREEN,
        uid: 1
    },
    // tile 2
    {
        face: FACES.F_FACE,
        "x-coordinate": 0,
        "y-coordinate": -1,
        color: COLORS.GREEN,
        uid: 2
    },
    // tile 3
    {
        face: FACES.F_FACE,
        "x-coordinate": 1,
        "y-coordinate": -1,
        color: COLORS.GREEN,
        uid: 3
    },
    //--------------------------------------
    // middle row, left to right
    //--------------------------------------
    // tile 4
    {
        face: FACES.F_FACE,
        "x-coordinate": -1,
        "y-coordinate": 0,
        color: COLORS.GREEN,
        uid: 4
    },
    // tile 5
    {
        face: FACES.F_FACE,
        "x-coordinate": 0,
        "y-coordinate": 0,
        color: COLORS.GREEN,
        uid: 5
    },
    // tile 6
    {
        face: FACES.F_FACE,
        "x-coordinate": 1,
        "y-coordinate": 0,
        color: COLORS.GREEN,
        uid: 6
    },
    //--------------------------------------
    // top row, left to right
    //--------------------------------------
    // tile 7
    {
        face: FACES.F_FACE,
        "x-coordinate": -1,
        "y-coordinate": 1,
        color: COLORS.GREEN,
        uid: 7
    },
    // tile 8
    {
        face: FACES.F_FACE,
        "x-coordinate": 0,
        "y-coordinate": 1,
        color: COLORS.GREEN,
        uid: 8
    },
    // tile 9
    {
        face: FACES.F_FACE,
        "x-coordinate": 1,
        "y-coordinate": 1,
        color: COLORS.GREEN,
        uid: 9
    },

    //======================================
    // FACE B (initially the back face)
    //======================================

    //--------------------------------------
    // bottom row, left to right
    //--------------------------------------
    // tile 1
    {
        face: FACES.B_FACE,
        "x-coordinate": -1,
        "y-coordinate": -1,
        color: COLORS.BLUE,
        uid: 10
    },
    // tile 2
    {
        face: FACES.B_FACE,
        "x-coordinate": 0,
        "y-coordinate": -1,
        color: COLORS.BLUE,
        uid: 11
    },
    // tile 3
    {
        face: FACES.B_FACE,
        "x-coordinate": 1,
        "y-coordinate": -1,
        color: COLORS.BLUE,
        uid: 12
    },
    //--------------------------------------
    // middle row, left to right
    //--------------------------------------
    // tile 4
    {
        face: FACES.B_FACE,
        "x-coordinate": -1,
        "y-coordinate": 0,
        color: COLORS.BLUE,
        uid: 13
    },
    // tile 5
    {
        face: FACES.B_FACE,
        "x-coordinate": 0,
        "y-coordinate": 0,
        color: COLORS.BLUE,
        uid: 14
    },
    // tile 6
    {
        face: FACES.B_FACE,
        "x-coordinate": 1,
        "y-coordinate": 0,
        color: COLORS.BLUE,
        uid: 15
    },
    //--------------------------------------
    // top row, left to right
    //--------------------------------------
    // tile 7
    {
        face: FACES.B_FACE,
        "x-coordinate": -1,
        "y-coordinate": 1,
        color: COLORS.BLUE,
        uid: 16
    },
    // tile 8
    {
        face: FACES.B_FACE,
        "x-coordinate": 0,
        "y-coordinate": 1,
        color: COLORS.BLUE,
        uid: 17
    },
    // tile 9
    {
        face: FACES.B_FACE,
        "x-coordinate": 1,
        "y-coordinate": 1,
        color: COLORS.BLUE,
        uid: 18
    },

    //======================================
    // FACE U (initially the up/top face)
    //======================================

    //--------------------------------------
    // bottom row, left to right
    //--------------------------------------
    // tile 1
    {
        face: FACES.U_FACE,
        "x-coordinate": -1,
        "y-coordinate": -1,
        color: COLORS.WHITE,
        uid: 19
    },
    // tile 2
    {
        face: FACES.U_FACE,
        "x-coordinate": 0,
        "y-coordinate": -1,
        color: COLORS.WHITE,
        uid: 20
    },
    // tile 3
    {
        face: FACES.U_FACE,
        "x-coordinate": 1,
        "y-coordinate": -1,
        color: COLORS.WHITE,
        uid: 21
    },
    //--------------------------------------
    // middle row, left to right
    //--------------------------------------
    // tile 4
    {
        face: FACES.U_FACE,
        "x-coordinate": -1,
        "y-coordinate": 0,
        color: COLORS.WHITE,
        uid: 22
    },
    // tile 5
    {
        face: FACES.U_FACE,
        "x-coordinate": 0,
        "y-coordinate": 0,
        color: COLORS.WHITE,
        uid: 23
    },
    // tile 6
    {
        face: FACES.U_FACE,
        "x-coordinate": 1,
        "y-coordinate": 0,
        color: COLORS.WHITE,
        uid: 24
    },
    //--------------------------------------
    // top row, left to right
    //--------------------------------------
    // tile 7
    {
        face: FACES.U_FACE,
        "x-coordinate": -1,
        "y-coordinate": 1,
        color: COLORS.WHITE,
        uid: 25
    },
    // tile 8
    {
        face: FACES.U_FACE,
        "x-coordinate": 0,
        "y-coordinate": 1,
        color: COLORS.WHITE,
        uid: 26
    },
    // tile 9
    {
        face: FACES.U_FACE,
        "x-coordinate": 1,
        "y-coordinate": 1,
        color: COLORS.WHITE,
        uid: 27
    },

    //======================================
    // FACE D (initially the down/bottom face)
    //======================================

    //--------------------------------------
    // bottom row, left to right
    //--------------------------------------
    // tile 1
    {
        face: FACES.D_FACE,
        "x-coordinate": -1,
        "y-coordinate": -1,
        color: COLORS.YELLOW,
        uid: 28
    },
    // tile 2
    {
        face: FACES.D_FACE,
        "x-coordinate": 0,
        "y-coordinate": -1,
        color: COLORS.YELLOW,
        uid: 29
    },
    // tile 3
    {
        face: FACES.D_FACE,
        "x-coordinate": 1,
        "y-coordinate": -1,
        color: COLORS.YELLOW,
        uid: 30
    },
    //--------------------------------------
    // middle row, left to right
    //--------------------------------------
    // tile 4
    {
        face: FACES.D_FACE,
        "x-coordinate": -1,
        "y-coordinate": 0,
        color: COLORS.YELLOW,
        uid: 31
    },
    // tile 5
    {
        face: FACES.D_FACE,
        "x-coordinate": 0,
        "y-coordinate": 0,
        color: COLORS.YELLOW,
        uid: 32
    },
    // tile 6
    {
        face: FACES.D_FACE,
        "x-coordinate": 1,
        "y-coordinate": 0,
        color: COLORS.YELLOW,
        uid: 33
    },
    //--------------------------------------
    // top row, left to right
    //--------------------------------------
    // tile 7
    {
        face: FACES.D_FACE,
        "x-coordinate": -1,
        "y-coordinate": 1,
        color: COLORS.YELLOW,
        uid: 34
    },
    // tile 8
    {
        face: FACES.D_FACE,
        "x-coordinate": 0,
        "y-coordinate": 1,
        color: COLORS.YELLOW,
        uid: 35
    },
    // tile 9
    {
        face: FACES.D_FACE,
        "x-coordinate": 1,
        "y-coordinate": 1,
        color: COLORS.YELLOW,
        uid: 36
    },

    //======================================
    // FACE R (initially the right face)
    //======================================

    //--------------------------------------
    // bottom row, left to right
    //--------------------------------------
    // tile 1
    {
        face: FACES.R_FACE,
        "x-coordinate": -1,
        "y-coordinate": -1,
        color: COLORS.RED,
        uid: 37
    },
    // tile 2
    {
        face: FACES.R_FACE,
        "x-coordinate": 0,
        "y-coordinate": -1,
        color: COLORS.RED,
        uid: 38
    },
    // tile 3
    {
        face: FACES.R_FACE,
        "x-coordinate": 1,
        "y-coordinate": -1,
        color: COLORS.RED,
        uid: 39
    },
    //--------------------------------------
    // middle row, left to right
    //--------------------------------------
    // tile 4
    {
        face: FACES.R_FACE,
        "x-coordinate": -1,
        "y-coordinate": 0,
        color: COLORS.RED,
        uid: 40
    },
    // tile 5
    {
        face: FACES.R_FACE,
        "x-coordinate": 0,
        "y-coordinate": 0,
        color: COLORS.RED,
        uid: 41
    },
    // tile 6
    {
        face: FACES.R_FACE,
        "x-coordinate": 1,
        "y-coordinate": 0,
        color: COLORS.RED,
        uid: 42
    },
    //--------------------------------------
    // top row, left to right
    //--------------------------------------
    // tile 7
    {
        face: FACES.R_FACE,
        "x-coordinate": -1,
        "y-coordinate": 1,
        color: COLORS.RED,
        uid: 43
    },
    // tile 8
    {
        face: FACES.R_FACE,
        "x-coordinate": 0,
        "y-coordinate": 1,
        color: COLORS.RED,
        uid: 44
    },
    // tile 9
    {
        face: FACES.R_FACE,
        "x-coordinate": 1,
        "y-coordinate": 1,
        color: COLORS.RED,
        uid: 45
    },

    //======================================
    // FACE L (initially the left face)
    //======================================

    //--------------------------------------
    // bottom row, left to right
    //--------------------------------------
    // tile 1
    {
        face: FACES.L_FACE,
        "x-coordinate": -1,
        "y-coordinate": -1,
        color: COLORS.ORANGE,
        uid: 46
    },
    // tile 2
    {
        face: FACES.L_FACE,
        "x-coordinate": 0,
        "y-coordinate": -1,
        color: COLORS.ORANGE,
        uid: 47
    },
    // tile 3
    {
        face: FACES.L_FACE,
        "x-coordinate": 1,
        "y-coordinate": -1,
        color: COLORS.ORANGE,
        uid: 48
    },
    //--------------------------------------
    // middle row, left to right
    //--------------------------------------
    // tile 4
    {
        face: FACES.L_FACE,
        "x-coordinate": -1,
        "y-coordinate": 0,
        color: COLORS.ORANGE,
        uid: 49
    },
    // tile 5
    {
        face: FACES.L_FACE,
        "x-coordinate": 0,
        "y-coordinate": 0,
        color: COLORS.ORANGE,
        uid: 50
    },
    // tile 6
    {
        face: FACES.L_FACE,
        "x-coordinate": 1,
        "y-coordinate": 0,
        color: COLORS.ORANGE,
        uid: 51
    },
    //--------------------------------------
    // top row, left to right
    //--------------------------------------
    // tile 7
    {
        face: FACES.L_FACE,
        "x-coordinate": -1,
        "y-coordinate": 1,
        color: COLORS.ORANGE,
        uid: 52
    },
    // tile 8
    {
        face: FACES.L_FACE,
        "x-coordinate": 0,
        "y-coordinate": 1,
        color: COLORS.ORANGE,
        uid: 53
    },
    // tile 9
    {
        face: FACES.L_FACE,
        "x-coordinate": 1,
        "y-coordinate": 1,
        color: COLORS.ORANGE,
        uid: 54
    },
];

export default INIT_CONFIG;