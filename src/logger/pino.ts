import pino from "pino";

export const logger = pino({
    level: "info",
    enabled: true,
    base: { pid: process.pid }
}, pino.destination("./logs/pino.log"));