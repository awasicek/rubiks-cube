import CubeStore from "@stores/cube_store";
import initCubeConfig from "@data/initial_configuration";

describe("Exercises the Cube's public API", function() {
    it("Verifies that all the tiles are accessible from the Cube", () => {
        const cube = new CubeStore();

        expect(cube.allTiles).toStrictEqual(initCubeConfig.tiles.byId);
    });

    it("Verifies that the front face tiles can be retrieved", () => {
        const cube = new CubeStore();
        const numTiles = cube.tilesFaceF.length;
        const numFaceFTiles = cube.tilesFaceF.filter(tile => tile.face === "faceF").length;

        expect(numFaceFTiles).toBe(numTiles);
        expect(numFaceFTiles).toBe(9);
    });

    it("Verifies that the back face tiles can be retrieved", () => {
        const cube = new CubeStore();
        const numTiles = cube.tilesFaceB.length;
        const numFaceBTiles = cube.tilesFaceB.filter(tile => tile.face === "faceB").length;

        expect(numFaceBTiles).toBe(numTiles);
        expect(numFaceBTiles).toBe(9);
    });

    it("Verifies that the up face tiles can be retrieved", () => {
        const cube = new CubeStore();
        const numTiles = cube.tilesFaceU.length;
        const numFaceUTiles = cube.tilesFaceU.filter(tile => tile.face === "faceU").length;

        expect(numFaceUTiles).toBe(numTiles);
        expect(numFaceUTiles).toBe(9);
    });

    it("Verifies that the down face tiles can be retrieved", () => {
        const cube = new CubeStore();
        const numTiles = cube.tilesFaceU.length;
        const numFaceDTiles = cube.tilesFaceD.filter(tile => tile.face === "faceD").length;

        expect(numFaceDTiles).toBe(numTiles);
        expect(numFaceDTiles).toBe(9);
    });

    it("Verifies that the left face tiles can be retrieved", () => {
        const cube = new CubeStore();
        const numTiles = cube.tilesFaceU.length;
        const numFaceLTiles = cube.tilesFaceL.filter(tile => tile.face === "faceL").length;

        expect(numFaceLTiles).toBe(numTiles);
        expect(numFaceLTiles).toBe(9);
    });

    it("Verifies that the right face tiles can be retrieved", () => {
        const cube = new CubeStore();
        const numTiles = cube.tilesFaceU.length;
        const numFaceRTiles = cube.tilesFaceR.filter(tile => tile.face === "faceR").length;

        expect(numFaceRTiles).toBe(numTiles);
        expect(numFaceRTiles).toBe(9);
    });

    it("Checks that rotating the top row to the right behaves correctly", () => {
        const cube = new CubeStore();
        cube.rotateTopRight();

        expect(cube.allFaces).toMatchSnapshot();
        expect(cube.allTiles).toMatchSnapshot();
    });

    it("Checks that rotating the top row to the right 360 degrees returns the cube to its initial state", () => {
        const cube = new CubeStore();
        cube.rotateTopRight();
        cube.rotateTopRight();
        cube.rotateTopRight();
        cube.rotateTopRight();
        Object.values(cube.allFaces).forEach(face => (face.tiles = face.tiles.slice().sort()));

        expect(cube.allTiles).toStrictEqual(initCubeConfig.tiles.byId);
        expect(cube.allFaces).toStrictEqual(initCubeConfig.faces.byId);
    });

    it("Checks that rotating the top row to the left behaves correctly", () => {
        const cube = new CubeStore();
        cube.rotateTopLeft();

        expect(cube.allFaces).toMatchSnapshot();
        expect(cube.allTiles).toMatchSnapshot();
    });

    it("Checks that rotating the top row to the left 360 degrees returns the cube to its initial state", () => {
        const cube = new CubeStore();
        cube.rotateTopLeft();
        cube.rotateTopLeft();
        cube.rotateTopLeft();
        cube.rotateTopLeft();
        Object.values(cube.allFaces).forEach(face => (face.tiles = face.tiles.slice().sort()));

        expect(cube.allTiles).toStrictEqual(initCubeConfig.tiles.byId);
        expect(cube.allFaces).toStrictEqual(initCubeConfig.faces.byId);
    });

    it("Checks that rotating the middle row to the right behaves correctly", () => {
        const cube = new CubeStore();
        cube.rotateMiddleRight();

        expect(cube.allFaces).toMatchSnapshot();
        expect(cube.allTiles).toMatchSnapshot();
    });

    it("Checks that rotating the middle row to the right 360 degrees returns the cube to its initial state", () => {
        const cube = new CubeStore();
        cube.rotateMiddleRight();
        cube.rotateMiddleRight();
        cube.rotateMiddleRight();
        cube.rotateMiddleRight();
        Object.values(cube.allFaces).forEach(face => (face.tiles = face.tiles.slice().sort()));

        expect(cube.allTiles).toStrictEqual(initCubeConfig.tiles.byId);
        expect(cube.allFaces).toStrictEqual(initCubeConfig.faces.byId);
    });

    it("Checks that rotating the middle row to the left behaves correctly", () => {
        const cube = new CubeStore();
        cube.rotateMiddleLeft();

        expect(cube.allFaces).toMatchSnapshot();
        expect(cube.allTiles).toMatchSnapshot();
    });

    it("Checks that rotating the middle row to the left 360 degrees returns the cube to its initial state", () => {
        const cube = new CubeStore();
        cube.rotateMiddleLeft();
        cube.rotateMiddleLeft();
        cube.rotateMiddleLeft();
        cube.rotateMiddleLeft();
        Object.values(cube.allFaces).forEach(face => (face.tiles = face.tiles.slice().sort()));

        expect(cube.allTiles).toStrictEqual(initCubeConfig.tiles.byId);
        expect(cube.allFaces).toStrictEqual(initCubeConfig.faces.byId);
    });

    it("Checks that rotating the bottom row to the right behaves correctly", () => {
        const cube = new CubeStore();
        cube.rotateBottomRight();

        expect(cube.allFaces).toMatchSnapshot();
        expect(cube.allTiles).toMatchSnapshot();
    });

    it("Checks that rotating the bottom row to the right 360 degrees returns the cube to its initial state", () => {
        const cube = new CubeStore();
        cube.rotateBottomRight();
        cube.rotateBottomRight();
        cube.rotateBottomRight();
        cube.rotateBottomRight();
        Object.values(cube.allFaces).forEach(face => (face.tiles = face.tiles.slice().sort()));

        expect(cube.allTiles).toStrictEqual(initCubeConfig.tiles.byId);
        expect(cube.allFaces).toStrictEqual(initCubeConfig.faces.byId);
    });

    it("Checks that rotating the bottom row to the left behaves correctly", () => {
        const cube = new CubeStore();
        cube.rotateBottomLeft();

        expect(cube.allFaces).toMatchSnapshot();
        expect(cube.allTiles).toMatchSnapshot();
    });

    it("Checks that rotating the bottom row to the left 360 degrees returns the cube to its initial state", () => {
        const cube = new CubeStore();
        cube.rotateBottomLeft();
        cube.rotateBottomLeft();
        cube.rotateBottomLeft();
        cube.rotateBottomLeft();
        Object.values(cube.allFaces).forEach(face => (face.tiles = face.tiles.slice().sort()));

        expect(cube.allTiles).toStrictEqual(initCubeConfig.tiles.byId);
        expect(cube.allFaces).toStrictEqual(initCubeConfig.faces.byId);
    });

    it("Checks that rotating the right column upward behaves correctly", () => {
        const cube = new CubeStore();
        cube.rotateRightUp();

        expect(cube.allFaces).toMatchSnapshot();
        expect(cube.allTiles).toMatchSnapshot();
    });

    it("Checks that rotating the right column upward 360 degrees returns the cube to its initial state", () => {
        const cube = new CubeStore();
        cube.rotateRightUp();
        cube.rotateRightUp();
        cube.rotateRightUp();
        cube.rotateRightUp();
        Object.values(cube.allFaces).forEach(face => (face.tiles = face.tiles.slice().sort()));

        expect(cube.allTiles).toStrictEqual(initCubeConfig.tiles.byId);
        expect(cube.allFaces).toStrictEqual(initCubeConfig.faces.byId);
    });

    it("Checks that rotating the right column downward behaves correctly", () => {
        const cube = new CubeStore();
        cube.rotateRightDown();

        expect(cube.allFaces).toMatchSnapshot();
        expect(cube.allTiles).toMatchSnapshot();
    });

    it("Checks that rotating the right column downward 360 degrees returns the cube to its initial state", () => {
        const cube = new CubeStore();
        cube.rotateRightDown();
        cube.rotateRightDown();
        cube.rotateRightDown();
        cube.rotateRightDown();
        Object.values(cube.allFaces).forEach(face => (face.tiles = face.tiles.slice().sort()));

        expect(cube.allTiles).toStrictEqual(initCubeConfig.tiles.byId);
        expect(cube.allFaces).toStrictEqual(initCubeConfig.faces.byId);
    });

    it("Checks that rotating the center column upward behaves correctly", () => {
        const cube = new CubeStore();
        cube.rotateCenterUp();

        expect(cube.allFaces).toMatchSnapshot();
        expect(cube.allTiles).toMatchSnapshot();
    });

    it("Checks that rotating the center column upward 360 degrees returns the cube to its initial state", () => {
        const cube = new CubeStore();
        cube.rotateCenterUp();
        cube.rotateCenterUp();
        cube.rotateCenterUp();
        cube.rotateCenterUp();
        Object.values(cube.allFaces).forEach(face => (face.tiles = face.tiles.slice().sort()));

        expect(cube.allTiles).toStrictEqual(initCubeConfig.tiles.byId);
        expect(cube.allFaces).toStrictEqual(initCubeConfig.faces.byId);
    });

    it("Checks that rotating the center column downward behaves correctly", () => {
        const cube = new CubeStore();
        cube.rotateCenterDown();

        expect(cube.allFaces).toMatchSnapshot();
        expect(cube.allTiles).toMatchSnapshot();
    });

    it("Checks that rotating the center column downward 360 degrees returns the cube to its initial state", () => {
        const cube = new CubeStore();
        cube.rotateCenterDown();
        cube.rotateCenterDown();
        cube.rotateCenterDown();
        cube.rotateCenterDown();
        Object.values(cube.allFaces).forEach(face => (face.tiles = face.tiles.slice().sort()));

        expect(cube.allTiles).toStrictEqual(initCubeConfig.tiles.byId);
        expect(cube.allFaces).toStrictEqual(initCubeConfig.faces.byId);
    });

    it("Checks that rotating the left column upward behaves correctly", () => {
        const cube = new CubeStore();
        cube.rotateLeftUp();

        expect(cube.allFaces).toMatchSnapshot();
        expect(cube.allTiles).toMatchSnapshot();
    });

    it("Checks that rotating the left column upward 360 degrees returns the cube to its initial state", () => {
        const cube = new CubeStore();
        cube.rotateLeftUp();
        cube.rotateLeftUp();
        cube.rotateLeftUp();
        cube.rotateLeftUp();
        Object.values(cube.allFaces).forEach(face => (face.tiles = face.tiles.slice().sort()));

        expect(cube.allTiles).toStrictEqual(initCubeConfig.tiles.byId);
        expect(cube.allFaces).toStrictEqual(initCubeConfig.faces.byId);
    });

    it("Checks that rotating the left column downward behaves correctly", () => {
        const cube = new CubeStore();
        cube.rotateLeftDown();

        expect(cube.allFaces).toMatchSnapshot();
        expect(cube.allTiles).toMatchSnapshot();
    });

    it("Checks that rotating the left column downward 360 degrees returns the cube to its initial state", () => {
        const cube = new CubeStore();
        cube.rotateLeftDown();
        cube.rotateLeftDown();
        cube.rotateLeftDown();
        cube.rotateLeftDown();
        Object.values(cube.allFaces).forEach(face => (face.tiles = face.tiles.slice().sort()));

        expect(cube.allTiles).toStrictEqual(initCubeConfig.tiles.byId);
        expect(cube.allFaces).toStrictEqual(initCubeConfig.faces.byId);
    });

    it("Verifies that a combination of row and column rotations behaves correctly", () => {
        const cube = new CubeStore();
        cube.rotateLeftUp();
        cube.rotateTopRight();
        cube.rotateBottomRight();
        cube.rotateCenterUp();
        cube.rotateCenterUp();
        cube.rotateLeftDown();
        cube.rotateMiddleRight();
        cube.rotateLeftDown();
        cube.rotateRightUp();

        expect(cube.allFaces).toMatchSnapshot();
        expect(cube.allTiles).toMatchSnapshot();
    });

    it("Verifies that the cube can be reset to the initial configuration", () => {
        const cube = new CubeStore();
        cube.rotateLeftUp();
        cube.rotateTopRight();
        cube.rotateBottomRight();
        cube.rotateCenterUp();
        cube.rotateLeftDown();
        cube.rotateMiddleRight();
        cube.rotateLeftDown();
        cube.rotateRightUp();
        cube.reset();

        expect(cube.allTiles).toStrictEqual(initCubeConfig.tiles.byId);
        expect(cube.allFaces).toStrictEqual(initCubeConfig.faces.byId);
    });
});
