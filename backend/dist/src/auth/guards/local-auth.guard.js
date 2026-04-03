"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
class LocalAuthGuard extends (0, passport_1.AuthGuard)('local') {
    handleRequest(err, user, info) {
        if (err) {
            throw new common_1.UnauthorizedException(err.message);
        }
        if (!user) {
            if (info && info.message === 'User not found') {
                throw new common_1.UnauthorizedException('User not found');
            }
            else if (info && info.message === 'Invalid password') {
                throw new common_1.UnauthorizedException('Invalid credentials');
            }
            else {
                throw new common_1.UnauthorizedException('Unauthorized');
            }
        }
        return user;
    }
}
exports.LocalAuthGuard = LocalAuthGuard;
//# sourceMappingURL=local-auth.guard.js.map