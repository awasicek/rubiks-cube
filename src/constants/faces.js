// import { createEnum } from "@utils/utils";

/**
 * @fileoverview Enumerate the six face names of the Rubik's cube.
 */

// const faceNames = [
//     "F_FACE", // front face
//     "B_FACE", // back face
//     "U_FACE", // up face
//     "D_FACE", // down face
//     "R_FACE", // right face
//     "L_FACE" // left face
// ];
//
// /**
//  * @description Face name enumeration
//  * @type {Object<String, Symbol>}
//  */
// const faces = createEnum(...faceNames);

const faces = {
    F_FACE: "faceF",
    B_FACE: "faceB",
    U_FACE: "faceU",
    D_FACE: "faceD",
    R_FACE: "faceR",
    L_FACE: "faceL"
};

export default faces;
