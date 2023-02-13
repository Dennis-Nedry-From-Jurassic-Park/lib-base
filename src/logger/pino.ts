import pino from "pino";

export const logger = pino({
    level: "info",
    base: { pid: process.pid },
}, pino.destination("logs/pino.log"));