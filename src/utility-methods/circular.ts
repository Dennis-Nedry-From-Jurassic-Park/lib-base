export const CircularJSON = require("circular-json");

export const stringify = (obj: any) => CircularJSON.stringify(obj);