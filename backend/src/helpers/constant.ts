import * as process from "process";

export const jwtConstants = {
    secret: process.env.JWT_PRIVATE_KEY,
};