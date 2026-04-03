declare const _default: () => {
    jwt: {
        secret: string | undefined;
        signOptions: {
            expiresIn: string | undefined;
        };
    };
    refreshToken: {
        expiresIn: string | undefined;
    };
};
export default _default;
