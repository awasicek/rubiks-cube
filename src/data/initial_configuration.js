import { colors } from "@constants/cube";
import faces from "@constants/faces";
/**
 * @fileoverview Seed data that represents the initial configuration of the Rubik's cube.
 */

/*
 * RUBIK'S CUBE LEGEND:
 *
 *          Left | Ctr | Right (columns)
 *         ___________________
 *     Top |-1,1 | 0,1 | 1,1 |
 *         |_____|_____|_____|
 *  Middle |-1,0 | 0,0 | 1,0 |
 *         |_____|_____|_____|
 *  Bottom |-1,-1| 0,-1| 1,-1|
 *         |_____|_____|_____|
 *  (rows)                       (x,y)
 */

const initCubeConfig = {
    faces: {
        byId: {
            faceF: {
                id: faces.F_FACE,
                tiles: ["tile1", "tile2", "tile3", "tile4", "tile5", "tile6", "tile7", "tile8", "tile9"]
            },
            faceB: {
                id: faces.B_FACE,
                tiles: ["tile10", "tile11", "tile12", "tile13", "tile14", "tile15", "tile16", "tile17", "tile18"]
            },
            faceU: {
                id: faces.U_FACE,
                tiles: ["tile19", "tile20", "tile21", "tile22", "tile23", "tile24", "tile25", "tile26", "tile27"]
            },
            faceD: {
                id: faces.D_FACE,
                tiles: ["tile28", "tile29", "tile30", "tile31", "tile32", "tile33", "tile34", "tile35", "tile36"]
            },
            faceR: {
                id: faces.R_FACE,
                tiles: ["tile37", "tile38", "tile39", "tile40", "tile41", "tile42", "tile43", "tile44", "tile45"]
            },
            faceL: {
                id: faces.L_FACE,
                tiles: ["tile46", "tile47", "tile48", "tile49", "tile50", "tile51", "tile52", "tile53", "tile54"]
            }
        },
        allIds: [faces.F_FACE, faces.B_FACE, faces.U_FACE, faces.D_FACE, faces.R_FACE, faces.L_FACE]
    },
    tiles: {
        byId: {
            tile1: {
                id: "tile1",
                color: colors.GREEN,
                face: faces.F_FACE,
                position: {
                    // initially bottom left
                    xCoord: -1,
                    yCoord: -1
                }
            },
            tile2: {
                id: "tile2",
                color: colors.GREEN,
                face: faces.F_FACE,
                position: {
                    // initially bottom center
                    xCoord: 0,
                    yCoord: -1
                }
            },
            tile3: {
                id: "tile3",
                color: colors.GREEN,
                face: faces.F_FACE,
                position: {
                    // initially bottom right
                    xCoord: 1,
                    yCoord: -1
                }
            },
            tile4: {
                id: "tile4",
                color: colors.GREEN,
                face: faces.F_FACE,
                position: {
                    // initially middle left
                    xCoord: -1,
                    yCoord: 0
                }
            },
            tile5: {
                id: "tile5",
                color: colors.GREEN,
                face: faces.F_FACE,
                position: {
                    // initially middle center
                    xCoord: 0,
                    yCoord: 0
                }
            },
            tile6: {
                id: "tile6",
                color: colors.GREEN,
                face: faces.F_FACE,
                position: {
                    // initially middle right
                    xCoord: 1,
                    yCoord: 0
                }
            },
            tile7: {
                id: "tile7",
                color: colors.GREEN,
                face: faces.F_FACE,
                position: {
                    // initially top left
                    xCoord: -1,
                    yCoord: 1
                }
            },
            tile8: {
                id: "tile8",
                color: colors.GREEN,
                face: faces.F_FACE,
                position: {
                    // initially top center
                    xCoord: 0,
                    yCoord: 1
                }
            },
            tile9: {
                id: "tile9",
                color: colors.GREEN,
                face: faces.F_FACE,
                position: {
                    // initially top right
                    xCoord: 1,
                    yCoord: 1
                }
            },
            tile10: {
                id: "tile10",
                color: colors.BLUE,
                face: faces.B_FACE,
                position: {
                    // initially bottom left
                    xCoord: -1,
                    yCoord: -1
                }
            },
            tile11: {
                id: "tile11",
                color: colors.BLUE,
                face: faces.B_FACE,
                position: {
                    // initially bottom center
                    xCoord: 0,
                    yCoord: -1
                }
            },
            tile12: {
                id: "tile12",
                color: colors.BLUE,
                face: faces.B_FACE,
                position: {
                    // initially bottom right
                    xCoord: 1,
                    yCoord: -1
                }
            },
            tile13: {
                id: "tile13",
                color: colors.BLUE,
                face: faces.B_FACE,
                position: {
                    // initially middle left
                    xCoord: -1,
                    yCoord: 0
                }
            },
            tile14: {
                id: "tile14",
                color: colors.BLUE,
                face: faces.B_FACE,
                position: {
                    // initially middle center
                    xCoord: 0,
                    yCoord: 0
                }
            },
            tile15: {
                id: "tile15",
                color: colors.BLUE,
                face: faces.B_FACE,
                position: {
                    // initially middle right
                    xCoord: 1,
                    yCoord: 0
                }
            },
            tile16: {
                id: "tile16",
                color: colors.BLUE,
                face: faces.B_FACE,
                position: {
                    // initially top left
                    xCoord: -1,
                    yCoord: 1
                }
            },
            tile17: {
                id: "tile17",
                color: colors.BLUE,
                face: faces.B_FACE,
                position: {
                    // initially top center
                    xCoord: 0,
                    yCoord: 1
                }
            },
            tile18: {
                id: "tile18",
                color: colors.BLUE,
                face: faces.B_FACE,
                position: {
                    // initially top right
                    xCoord: 1,
                    yCoord: 1
                }
            },
            tile19: {
                id: "tile19",
                color: colors.WHITE,
                face: faces.U_FACE,
                position: {
                    // initially bottom left
                    xCoord: -1,
                    yCoord: -1
                }
            },
            tile20: {
                id: "tile20",
                color: colors.WHITE,
                face: faces.U_FACE,
                position: {
                    // initially bottom center
                    xCoord: 0,
                    yCoord: -1
                }
            },
            tile21: {
                id: "tile21",
                color: colors.WHITE,
                face: faces.U_FACE,
                position: {
                    // initially bottom right
                    xCoord: 1,
                    yCoord: -1
                }
            },
            tile22: {
                id: "tile22",
                color: colors.WHITE,
                face: faces.U_FACE,
                position: {
                    // initially middle left
                    xCoord: -1,
                    yCoord: 0
                }
            },
            tile23: {
                id: "tile23",
                color: colors.WHITE,
                face: faces.U_FACE,
                position: {
                    // initially middle center
                    xCoord: 0,
                    yCoord: 0
                }
            },
            tile24: {
                id: "tile24",
                color: colors.WHITE,
                face: faces.U_FACE,
                position: {
                    // initially middle right
                    xCoord: 1,
                    yCoord: 0
                }
            },
            tile25: {
                id: "tile25",
                color: colors.WHITE,
                face: faces.U_FACE,
                position: {
                    // initially top left
                    xCoord: -1,
                    yCoord: 1
                }
            },
            tile26: {
                id: "tile26",
                color: colors.WHITE,
                face: faces.U_FACE,
                position: {
                    // initially top center
                    xCoord: 0,
                    yCoord: 1
                }
            },
            tile27: {
                id: "tile27",
                color: colors.WHITE,
                face: faces.U_FACE,
                position: {
                    // initially top right
                    xCoord: 1,
                    yCoord: 1
                }
            },
            tile28: {
                id: "tile28",
                color: colors.YELLOW,
                face: faces.D_FACE,
                position: {
                    // initially bottom left
                    xCoord: -1,
                    yCoord: -1
                }
            },
            tile29: {
                id: "tile29",
                color: colors.YELLOW,
                face: faces.D_FACE,
                position: {
                    // initially bottom center
                    xCoord: 0,
                    yCoord: -1
                }
            },
            tile30: {
                id: "tile30",
                color: colors.YELLOW,
                face: faces.D_FACE,
                position: {
                    // initially bottom right
                    xCoord: 1,
                    yCoord: -1
                }
            },
            tile31: {
                id: "tile31",
                color: colors.YELLOW,
                face: faces.D_FACE,
                position: {
                    // initially middle left
                    xCoord: -1,
                    yCoord: 0
                }
            },
            tile32: {
                id: "tile32",
                color: colors.YELLOW,
                face: faces.D_FACE,
                position: {
                    // initially middle center
                    xCoord: 0,
                    yCoord: 0
                }
            },
            tile33: {
                id: "tile33",
                color: colors.YELLOW,
                face: faces.D_FACE,
                position: {
                    // initially middle right
                    xCoord: 1,
                    yCoord: 0
                }
            },
            tile34: {
                id: "tile34",
                color: colors.YELLOW,
                face: faces.D_FACE,
                position: {
                    // initially top left
                    xCoord: -1,
                    yCoord: 1
                }
            },
            tile35: {
                id: "tile35",
                color: colors.YELLOW,
                face: faces.D_FACE,
                position: {
                    // initially top center
                    xCoord: 0,
                    yCoord: 1
                }
            },
            tile36: {
                id: "tile36",
                color: colors.YELLOW,
                face: faces.D_FACE,
                position: {
                    // initially top right
                    xCoord: 1,
                    yCoord: 1
                }
            },
            tile37: {
                id: "tile37",
                color: colors.RED,
                face: faces.R_FACE,
                position: {
                    // initially bottom left
                    xCoord: -1,
                    yCoord: -1
                }
            },
            tile38: {
                id: "tile38",
                color: colors.RED,
                face: faces.R_FACE,
                position: {
                    // initially bottom center
                    xCoord: 0,
                    yCoord: -1
                }
            },
            tile39: {
                id: "tile39",
                color: colors.RED,
                face: faces.R_FACE,
                position: {
                    // initially bottom right
                    xCoord: 1,
                    yCoord: -1
                }
            },
            tile40: {
                id: "tile40",
                color: colors.RED,
                face: faces.R_FACE,
                position: {
                    // initially middle left
                    xCoord: -1,
                    yCoord: 0
                }
            },
            tile41: {
                id: "tile41",
                color: colors.RED,
                face: faces.R_FACE,
                position: {
                    // initially middle center
                    xCoord: 0,
                    yCoord: 0
                }
            },
            tile42: {
                id: "tile42",
                color: colors.RED,
                face: faces.R_FACE,
                position: {
                    // initially middle right
                    xCoord: 1,
                    yCoord: 0
                }
            },
            tile43: {
                id: "tile43",
                color: colors.RED,
                face: faces.R_FACE,
                position: {
                    // initially top left
                    xCoord: -1,
                    yCoord: 1
                }
            },
            tile44: {
                id: "tile44",
                color: colors.RED,
                face: faces.R_FACE,
                position: {
                    // initially top center
                    xCoord: 0,
                    yCoord: 1
                }
            },
            tile45: {
                id: "tile45",
                color: colors.RED,
                face: faces.R_FACE,
                position: {
                    // initially top right
                    xCoord: 1,
                    yCoord: 1
                }
            },
            tile46: {
                id: "tile46",
                color: colors.ORANGE,
                face: faces.L_FACE,
                position: {
                    // initially bottom left
                    xCoord: -1,
                    yCoord: -1
                }
            },
            tile47: {
                id: "tile47",
                color: colors.ORANGE,
                face: faces.L_FACE,
                position: {
                    // initially bottom center
                    xCoord: 0,
                    yCoord: -1
                }
            },
            tile48: {
                id: "tile48",
                color: colors.ORANGE,
                face: faces.L_FACE,
                position: {
                    // initially bottom right
                    xCoord: 1,
                    yCoord: -1
                }
            },
            tile49: {
                id: "tile49",
                color: colors.ORANGE,
                face: faces.L_FACE,
                position: {
                    // initially middle left
                    xCoord: -1,
                    yCoord: 0
                }
            },
            tile50: {
                id: "tile50",
                color: colors.ORANGE,
                face: faces.L_FACE,
                position: {
                    // initially middle center
                    xCoord: 0,
                    yCoord: 0
                }
            },
            tile51: {
                id: "tile51",
                color: colors.ORANGE,
                face: faces.L_FACE,
                position: {
                    // initially middle right
                    xCoord: 1,
                    yCoord: 0
                }
            },
            tile52: {
                id: "tile52",
                color: colors.ORANGE,
                face: faces.L_FACE,
                position: {
                    // initially top left
                    xCoord: -1,
                    yCoord: 1
                }
            },
            tile53: {
                id: "tile53",
                color: colors.ORANGE,
                face: faces.L_FACE,
                position: {
                    // initially top center
                    xCoord: 0,
                    yCoord: 1
                }
            },
            tile54: {
                id: "tile54",
                color: colors.ORANGE,
                face: faces.L_FACE,
                position: {
                    // initially top right
                    xCoord: 1,
                    yCoord: 1
                }
            }
        },
        allIds: [
            "tile1",
            "tile2",
            "tile3",
            "tile4",
            "tile5",
            "tile6",
            "tile7",
            "tile8",
            "tile9",
            "tile10",
            "tile11",
            "tile12",
            "tile13",
            "tile14",
            "tile15",
            "tile16",
            "tile17",
            "tile18",
            "tile19",
            "tile20",
            "tile21",
            "tile22",
            "tile23",
            "tile24",
            "tile25",
            "tile26",
            "tile27",
            "tile28",
            "tile29",
            "tile30",
            "tile31",
            "tile32",
            "tile33",
            "tile34",
            "tile35",
            "tile36",
            "tile37",
            "tile38",
            "tile39",
            "tile40",
            "tile41",
            "tile42",
            "tile43",
            "tile44",
            "tile45",
            "tile46",
            "tile47",
            "tile48",
            "tile49",
            "tile50",
            "tile51",
            "tile52",
            "tile53",
            "tile54"
        ]
    }
};

export default initCubeConfig;
