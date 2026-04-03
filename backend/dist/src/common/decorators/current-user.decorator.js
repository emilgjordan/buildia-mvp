"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUser = exports.getCurrentUserByContext = void 0;
const common_1 = require("@nestjs/common");
const getCurrentUserByContext = (context) => {
    if (context.getType() === 'http') {
        return context.switchToHttp().getRequest().user;
    }
    else if (context.getType() === 'ws') {
        return context.switchToWs().getClient().handshake.user;
    }
    else {
        throw new Error('Unsupported context type');
    }
};
exports.getCurrentUserByContext = getCurrentUserByContext;
exports.CurrentUser = (0, common_1.createParamDecorator)((_data, context) => (0, exports.getCurrentUserByContext)(context));
//# sourceMappingURL=current-user.decorator.js.map