/**
 * @description Creates an object of enumerations based on the names provided.
 * The enumerated values cannot be deleted, mutated, etc. and are only equal
 * to themselves.
 * @param {...String} args - Names for each enumerated value.
 * @return {Object.<String, Symbol>}
 * @example
 * createEnum("RED", "BLUE", "GREEN");
 * // { "RED": Symbol("RED"), "BLUE": Symbol("BLUE), "GREEN": Symbol("GREEN") }
 */
const createEnum = function createEnum(...args) {
    const enums = {};
    args.forEach(arg => {
        enums[arg] = Symbol(arg);
    });
    Object.freeze(enums);
    return enums;
};

export { createEnum };
