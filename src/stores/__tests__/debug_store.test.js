import DebugStore from "@stores/debug_store";

describe("Checks that debug mode works", function() {
    it("Verifies that debug mode is disabled by default", () => {
        const debug = new DebugStore();
        expect(debug.isDebugModeEnabled).toBe(false);
        debug.enableDebugMode();

        expect(debug.isDebugModeEnabled).toBe(true);
    });

    it("Verifies that debug mode can be toggled on", () => {
        const debug = new DebugStore();
        debug.enableDebugMode();

        expect(debug.isDebugModeEnabled).toBe(true);
    });

    it("Verifies that debug mode can be toggled off", () => {
        const debug = new DebugStore();
        debug.enableDebugMode();
        expect(debug.isDebugModeEnabled).toBe(true);

        debug.disableDebugMode();
        expect(debug.isDebugModeEnabled).toBe(false);
    });
});
