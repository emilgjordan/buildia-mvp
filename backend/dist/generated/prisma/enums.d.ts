export declare const ProjectRole: {
    readonly MEMBER: "MEMBER";
    readonly OWNER: "OWNER";
};
export type ProjectRole = (typeof ProjectRole)[keyof typeof ProjectRole];
export declare const UserRole: {
    readonly USER: "USER";
    readonly ADMIN: "ADMIN";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const JoinRequestStatus: {
    readonly PENDING: "PENDING";
    readonly ACCEPTED: "ACCEPTED";
    readonly REJECTED: "REJECTED";
    readonly CANCELLED: "CANCELLED";
};
export type JoinRequestStatus = (typeof JoinRequestStatus)[keyof typeof JoinRequestStatus];
