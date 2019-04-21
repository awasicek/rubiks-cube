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
    // ["1", {
    {
        face: FACES.F_FACE,
        "x-coordinate": 0,
        "y-coordinate": 0,
        color: COLORS.GREEN,
        uid: 1
    },
    // }],
    // tile 2
    // ["2", {
    {
        face: FACES.F_FACE,
        "x-coordinate": 1,
        "y-coordinate": 0,
        color: COLORS.GREEN,
        uid: 2
    },
    // }],
    // tile 3
    // ["3", {
    {
        face: FACES.F_FACE,
        "x-coordinate": 2,
        "y-coordinate": 0,
        color: COLORS.GREEN,
        uid: 3
    },
    // }],
    //--------------------------------------
    // middle row, left to right
    //--------------------------------------
    // tile 4
    // ["4", {
    {
        face: FACES.F_FACE,
        "x-coordinate": 0,
        "y-coordinate": 1,
        color: COLORS.GREEN,
        uid: 4
    },
    // }],
    // tile 5
    // ["5", {
    {
        face: FACES.F_FACE,
        "x-coordinate": 1,
        "y-coordinate": 1,
        color: COLORS.GREEN,
        uid: 5
    },
    // }],
    // tile 6
    // ["6", {
    {
        face: FACES.F_FACE,
        "x-coordinate": 2,
        "y-coordinate": 1,
        color: COLORS.GREEN,
        uid: 6
    },
    // }],
    //--------------------------------------
    // top row, left to right
    //--------------------------------------
    // tile 7
    // ["7", {
    {
        face: FACES.F_FACE,
        "x-coordinate": 0,
        "y-coordinate": 2,
        color: COLORS.GREEN,
        uid: 7
    },
    // }],
    // tile 8
    // ["8", {
    {
        face: FACES.F_FACE,
        "x-coordinate": 1,
        "y-coordinate": 2,
        color: COLORS.GREEN,
        uid: 8
    },
    // }],
    // tile 9
    // ["9", {
    {
        face: FACES.F_FACE,
        "x-coordinate": 2,
        "y-coordinate": 2,
        color: COLORS.GREEN,
        uid: 9
    },
    // }],

    //======================================
    // FACE B (initially the back face)
    //======================================

    //--------------------------------------
    // bottom row, left to right
    //--------------------------------------
    // tile 1
    // ["10", {
    {
        face: FACES.B_FACE,
        "x-coordinate": 0,
        "y-coordinate": 0,
        color: COLORS.BLUE,
        uid: 10
    },
    // }],
    // tile 2
    // ["11", {
    {
        face: FACES.B_FACE,
        "x-coordinate": 1,
        "y-coordinate": 0,
        color: COLORS.BLUE,
        uid: 11
    },
    // }],
    // tile 3
    // ["12", {
    {
        face: FACES.B_FACE,
        "x-coordinate": 2,
        "y-coordinate": 0,
        color: COLORS.BLUE,
        uid: 12
    },
    // }],
    //--------------------------------------
    // middle row, left to right
    //--------------------------------------
    // tile 4
    // ["13", {
    {
        face: FACES.B_FACE,
        "x-coordinate": 0,
        "y-coordinate": 1,
        color: COLORS.BLUE,
        uid: 13
    },
    // }],
    // tile 5
    // ["14", {
    {
        face: FACES.B_FACE,
        "x-coordinate": 1,
        "y-coordinate": 1,
        color: COLORS.BLUE,
        uid: 14
    },
    // }],
    // tile 6
    // ["15", {
    {
        face: FACES.B_FACE,
        "x-coordinate": 2,
        "y-coordinate": 1,
        color: COLORS.BLUE,
        uid: 15
    },
    // }],
    //--------------------------------------
    // top row, left to right
    //--------------------------------------
    // tile 7
    // ["16", {
    {
        face: FACES.B_FACE,
        "x-coordinate": 0,
        "y-coordinate": 2,
        color: COLORS.BLUE,
        uid: 16
    },
    // }],
    // tile 8
    // ["17", {
    {
        face: FACES.B_FACE,
        "x-coordinate": 1,
        "y-coordinate": 2,
        color: COLORS.BLUE,
        uid: 17
    },
    // }],
    // tile 9
    // ["18", {
    {
        face: FACES.B_FACE,
        "x-coordinate": 2,
        "y-coordinate": 2,
        color: COLORS.BLUE,
        uid: 18
    },
    // }],

    //======================================
    // FACE U (initially the up/top face)
    //======================================

    //--------------------------------------
    // bottom row, left to right
    //--------------------------------------
    // tile 1
    // ["19", {
    {
        face: FACES.U_FACE,
        "x-coordinate": 0,
        "y-coordinate": 0,
        color: COLORS.WHITE,
        uid: 19
    },
    // }],
    // tile 2
    // ["20", {
    {
        face: FACES.U_FACE,
        "x-coordinate": 1,
        "y-coordinate": 0,
        color: COLORS.WHITE,
        uid: 20
    },
    // }],
    // tile 3
    // ["21", {
    {
        face: FACES.U_FACE,
        "x-coordinate": 2,
        "y-coordinate": 0,
        color: COLORS.WHITE,
        uid: 21
    },
    // }],
    //--------------------------------------
    // middle row, left to right
    //--------------------------------------
    // tile 4
    // ["22", {
    {
        face: FACES.U_FACE,
        "x-coordinate": 0,
        "y-coordinate": 1,
        color: COLORS.WHITE,
        uid: 22
    },
    // }],
    // tile 5
    // ["23", {
    {
        face: FACES.U_FACE,
        "x-coordinate": 1,
        "y-coordinate": 1,
        color: COLORS.WHITE,
        uid: 23
    },
    // }],
    // tile 6
    // ["24", {
    {
        face: FACES.U_FACE,
        "x-coordinate": 2,
        "y-coordinate": 1,
        color: COLORS.WHITE,
        uid: 24
    },
    // }],
    //--------------------------------------
    // top row, left to right
    //--------------------------------------
    // tile 7
    // ["25", {
    {
        face: FACES.U_FACE,
        "x-coordinate": 0,
        "y-coordinate": 2,
        color: COLORS.WHITE,
        uid: 25
    },
    // }],
    // tile 8
    // ["26", {
    {
        face: FACES.U_FACE,
        "x-coordinate": 1,
        "y-coordinate": 2,
        color: COLORS.WHITE,
        uid: 26
    },
    // }],
    // tile 9
    // ["27", {
    {
        face: FACES.U_FACE,
        "x-coordinate": 2,
        "y-coordinate": 2,
        color: COLORS.WHITE,
        uid: 27
    },
    // }],

    //======================================
    // FACE D (initially the down/bottom face)
    //======================================

    //--------------------------------------
    // bottom row, left to right
    //--------------------------------------
    // tile 1
    // ["28", {
    {
        face: FACES.D_FACE,
        "x-coordinate": 0,
        "y-coordinate": 0,
        color: COLORS.YELLOW,
        uid: 28
    },
    // }],
    // tile 2
    // ["29", {
    {
        face: FACES.D_FACE,
        "x-coordinate": 1,
        "y-coordinate": 0,
        color: COLORS.YELLOW,
        uid: 29
    },
    // }],
    // tile 3
    // ["30", {
    {
        face: FACES.D_FACE,
        "x-coordinate": 2,
        "y-coordinate": 0,
        color: COLORS.YELLOW,
        uid: 30
    },
    // }],
    //--------------------------------------
    // middle row, left to right
    //--------------------------------------
    // tile 4
    // ["31", {
    {
        face: FACES.D_FACE,
        "x-coordinate": 0,
        "y-coordinate": 1,
        color: COLORS.YELLOW,
        uid: 31
    },
    // }],
    // tile 5
    // ["32", {
    {
        face: FACES.D_FACE,
        "x-coordinate": 1,
        "y-coordinate": 1,
        color: COLORS.YELLOW,
        uid: 32
    },
    // }],
    // tile 6
    // ["33", {
    {
        face: FACES.D_FACE,
        "x-coordinate": 2,
        "y-coordinate": 1,
        color: COLORS.YELLOW,
        uid: 33
    },
    // }],
    //--------------------------------------
    // top row, left to right
    //--------------------------------------
    // tile 7
    // ["34", {
    {
        face: FACES.D_FACE,
        "x-coordinate": 0,
        "y-coordinate": 2,
        color: COLORS.YELLOW,
        uid: 34
    },
    // }],
    // tile 8
    // ["35", {
    {
        face: FACES.D_FACE,
        "x-coordinate": 1,
        "y-coordinate": 2,
        color: COLORS.YELLOW,
        uid: 35
    },
    // }],
    // tile 9
    // ["36", {
    {
        face: FACES.D_FACE,
        "x-coordinate": 2,
        "y-coordinate": 2,
        color: COLORS.YELLOW,
        uid: 36
    },
    // }],

    //======================================
    // FACE R (initially the right face)
    //======================================

    //--------------------------------------
    // bottom row, left to right
    //--------------------------------------
    // tile 1
    // ["37", {
    {
        face: FACES.R_FACE,
        "x-coordinate": 0,
        "y-coordinate": 0,
        color: COLORS.RED,
        uid: 37
    },
    // }],
    // tile 2
    // ["38", {
    {
        face: FACES.R_FACE,
        "x-coordinate": 1,
        "y-coordinate": 0,
        color: COLORS.RED,
        uid: 38
    },
    // }],
    // tile 3
    // ["39", {
    {
        face: FACES.R_FACE,
        "x-coordinate": 2,
        "y-coordinate": 0,
        color: COLORS.RED,
        uid: 39
    },
    // }],
    //--------------------------------------
    // middle row, left to right
    //--------------------------------------
    // tile 4
    // ["40", {
    {
        face: FACES.R_FACE,
        "x-coordinate": 0,
        "y-coordinate": 1,
        color: COLORS.RED,
        uid: 40
    },
    // }],
    // tile 5
    // ["41", {
    {
        face: FACES.R_FACE,
        "x-coordinate": 1,
        "y-coordinate": 1,
        color: COLORS.RED,
        uid: 41
    },
    // }],
    // tile 6
    // ["42", {
    {
        face: FACES.R_FACE,
        "x-coordinate": 2,
        "y-coordinate": 1,
        color: COLORS.RED,
        uid: 42
    },
    // }],
    //--------------------------------------
    // top row, left to right
    //--------------------------------------
    // tile 7
    // ["43", {
    {
        face: FACES.R_FACE,
        "x-coordinate": 0,
        "y-coordinate": 2,
        color: COLORS.RED,
        uid: 43
    },
    // }],
    // tile 8
    // ["44", {
    {
        face: FACES.R_FACE,
        "x-coordinate": 1,
        "y-coordinate": 2,
        color: COLORS.RED,
        uid: 44
    },
    // }],
    // tile 9
    // ["45", {
    {
        face: FACES.R_FACE,
        "x-coordinate": 2,
        "y-coordinate": 2,
        color: COLORS.RED,
        uid: 45
    },
    // }],

    //======================================
    // FACE L (initially the left face)
    //======================================

    //--------------------------------------
    // bottom row, left to right
    //--------------------------------------
    // tile 1
    // ["46", {
    {
        face: FACES.L_FACE,
        "x-coordinate": 0,
        "y-coordinate": 0,
        color: COLORS.ORANGE,
        uid: 46
    },
    // }],
    // tile 2
    // ["47", {
    {
        face: FACES.L_FACE,
        "x-coordinate": 1,
        "y-coordinate": 0,
        color: COLORS.ORANGE,
        uid: 47
    },
    // }],
    // tile 3
    // ["48", {
    {
        face: FACES.L_FACE,
        "x-coordinate": 2,
        "y-coordinate": 0,
        color: COLORS.ORANGE,
        uid: 48
    },
    // }],
    //--------------------------------------
    // middle row, left to right
    //--------------------------------------
    // tile 4
    // ["49", {
    {
        face: FACES.L_FACE,
        "x-coordinate": 0,
        "y-coordinate": 1,
        color: COLORS.ORANGE,
        uid: 49
    },
    // }],
    // tile 5
    // ["50", {
    {
        face: FACES.L_FACE,
        "x-coordinate": 1,
        "y-coordinate": 1,
        color: COLORS.ORANGE,
        uid: 50
    },
    // }],
    // tile 6
    // ["51", {
    {
        face: FACES.L_FACE,
        "x-coordinate": 2,
        "y-coordinate": 1,
        color: COLORS.ORANGE,
        uid: 51
    },
    // }],
    //--------------------------------------
    // top row, left to right
    //--------------------------------------
    // tile 7
    // ["52", {
    {
        face: FACES.L_FACE,
        "x-coordinate": 0,
        "y-coordinate": 2,
        color: COLORS.ORANGE,
        uid: 52
    },
    // }],
    // tile 8
    // ["53", {
    {
        face: FACES.L_FACE,
        "x-coordinate": 1,
        "y-coordinate": 2,
        color: COLORS.ORANGE,
        uid: 53
    },
    // }],
    // tile 9
    // ["54", {
    {
        face: FACES.L_FACE,
        "x-coordinate": 2,
        "y-coordinate": 2,
        color: COLORS.ORANGE,
        uid: 54
    },
    // }],
];

export default INIT_CONFIG;