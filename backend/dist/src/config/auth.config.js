"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    jwt: {
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: process.env.JWT_TOKEN_EXPIRATION_TIME },
    },
    refreshToken: {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRATION_TIME,
    },
});
//# sourceMappingURL=auth.config.js.map