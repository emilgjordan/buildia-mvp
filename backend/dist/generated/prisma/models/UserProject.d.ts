import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserProjectModel = runtime.Types.Result.DefaultSelection<Prisma.$UserProjectPayload>;
export type AggregateUserProject = {
    _count: UserProjectCountAggregateOutputType | null;
    _avg: UserProjectAvgAggregateOutputType | null;
    _sum: UserProjectSumAggregateOutputType | null;
    _min: UserProjectMinAggregateOutputType | null;
    _max: UserProjectMaxAggregateOutputType | null;
};
export type UserProjectAvgAggregateOutputType = {
    userId: number | null;
    projectId: number | null;
};
export type UserProjectSumAggregateOutputType = {
    userId: number | null;
    projectId: number | null;
};
export type UserProjectMinAggregateOutputType = {
    userId: number | null;
    projectId: number | null;
    role: $Enums.ProjectRole | null;
    joinedAt: Date | null;
};
export type UserProjectMaxAggregateOutputType = {
    userId: number | null;
    projectId: number | null;
    role: $Enums.ProjectRole | null;
    joinedAt: Date | null;
};
export type UserProjectCountAggregateOutputType = {
    userId: number;
    projectId: number;
    role: number;
    joinedAt: number;
    _all: number;
};
export type UserProjectAvgAggregateInputType = {
    userId?: true;
    projectId?: true;
};
export type UserProjectSumAggregateInputType = {
    userId?: true;
    projectId?: true;
};
export type UserProjectMinAggregateInputType = {
    userId?: true;
    projectId?: true;
    role?: true;
    joinedAt?: true;
};
export type UserProjectMaxAggregateInputType = {
    userId?: true;
    projectId?: true;
    role?: true;
    joinedAt?: true;
};
export type UserProjectCountAggregateInputType = {
    userId?: true;
    projectId?: true;
    role?: true;
    joinedAt?: true;
    _all?: true;
};
export type UserProjectAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserProjectWhereInput;
    orderBy?: Prisma.UserProjectOrderByWithRelationInput | Prisma.UserProjectOrderByWithRelationInput[];
    cursor?: Prisma.UserProjectWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserProjectCountAggregateInputType;
    _avg?: UserProjectAvgAggregateInputType;
    _sum?: UserProjectSumAggregateInputType;
    _min?: UserProjectMinAggregateInputType;
    _max?: UserProjectMaxAggregateInputType;
};
export type GetUserProjectAggregateType<T extends UserProjectAggregateArgs> = {
    [P in keyof T & keyof AggregateUserProject]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUserProject[P]> : Prisma.GetScalarType<T[P], AggregateUserProject[P]>;
};
export type UserProjectGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserProjectWhereInput;
    orderBy?: Prisma.UserProjectOrderByWithAggregationInput | Prisma.UserProjectOrderByWithAggregationInput[];
    by: Prisma.UserProjectScalarFieldEnum[] | Prisma.UserProjectScalarFieldEnum;
    having?: Prisma.UserProjectScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserProjectCountAggregateInputType | true;
    _avg?: UserProjectAvgAggregateInputType;
    _sum?: UserProjectSumAggregateInputType;
    _min?: UserProjectMinAggregateInputType;
    _max?: UserProjectMaxAggregateInputType;
};
export type UserProjectGroupByOutputType = {
    userId: number;
    projectId: number;
    role: $Enums.ProjectRole;
    joinedAt: Date;
    _count: UserProjectCountAggregateOutputType | null;
    _avg: UserProjectAvgAggregateOutputType | null;
    _sum: UserProjectSumAggregateOutputType | null;
    _min: UserProjectMinAggregateOutputType | null;
    _max: UserProjectMaxAggregateOutputType | null;
};
export type GetUserProjectGroupByPayload<T extends UserProjectGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserProjectGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserProjectGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserProjectGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserProjectGroupByOutputType[P]>;
}>>;
export type UserProjectWhereInput = {
    AND?: Prisma.UserProjectWhereInput | Prisma.UserProjectWhereInput[];
    OR?: Prisma.UserProjectWhereInput[];
    NOT?: Prisma.UserProjectWhereInput | Prisma.UserProjectWhereInput[];
    userId?: Prisma.IntFilter<"UserProject"> | number;
    projectId?: Prisma.IntFilter<"UserProject"> | number;
    role?: Prisma.EnumProjectRoleFilter<"UserProject"> | $Enums.ProjectRole;
    joinedAt?: Prisma.DateTimeFilter<"UserProject"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
};
export type UserProjectOrderByWithRelationInput = {
    userId?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    project?: Prisma.ProjectOrderByWithRelationInput;
};
export type UserProjectWhereUniqueInput = Prisma.AtLeast<{
    userId_projectId?: Prisma.UserProjectUserIdProjectIdCompoundUniqueInput;
    AND?: Prisma.UserProjectWhereInput | Prisma.UserProjectWhereInput[];
    OR?: Prisma.UserProjectWhereInput[];
    NOT?: Prisma.UserProjectWhereInput | Prisma.UserProjectWhereInput[];
    userId?: Prisma.IntFilter<"UserProject"> | number;
    projectId?: Prisma.IntFilter<"UserProject"> | number;
    role?: Prisma.EnumProjectRoleFilter<"UserProject"> | $Enums.ProjectRole;
    joinedAt?: Prisma.DateTimeFilter<"UserProject"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
}, "userId_projectId">;
export type UserProjectOrderByWithAggregationInput = {
    userId?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
    _count?: Prisma.UserProjectCountOrderByAggregateInput;
    _avg?: Prisma.UserProjectAvgOrderByAggregateInput;
    _max?: Prisma.UserProjectMaxOrderByAggregateInput;
    _min?: Prisma.UserProjectMinOrderByAggregateInput;
    _sum?: Prisma.UserProjectSumOrderByAggregateInput;
};
export type UserProjectScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserProjectScalarWhereWithAggregatesInput | Prisma.UserProjectScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserProjectScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserProjectScalarWhereWithAggregatesInput | Prisma.UserProjectScalarWhereWithAggregatesInput[];
    userId?: Prisma.IntWithAggregatesFilter<"UserProject"> | number;
    projectId?: Prisma.IntWithAggregatesFilter<"UserProject"> | number;
    role?: Prisma.EnumProjectRoleWithAggregatesFilter<"UserProject"> | $Enums.ProjectRole;
    joinedAt?: Prisma.DateTimeWithAggregatesFilter<"UserProject"> | Date | string;
};
export type UserProjectCreateInput = {
    role?: $Enums.ProjectRole;
    joinedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutProjectsInput;
    project: Prisma.ProjectCreateNestedOneWithoutMembersInput;
};
export type UserProjectUncheckedCreateInput = {
    userId: number;
    projectId: number;
    role?: $Enums.ProjectRole;
    joinedAt?: Date | string;
};
export type UserProjectUpdateInput = {
    role?: Prisma.EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutProjectsNestedInput;
    project?: Prisma.ProjectUpdateOneRequiredWithoutMembersNestedInput;
};
export type UserProjectUncheckedUpdateInput = {
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    projectId?: Prisma.IntFieldUpdateOperationsInput | number;
    role?: Prisma.EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserProjectCreateManyInput = {
    userId: number;
    projectId: number;
    role?: $Enums.ProjectRole;
    joinedAt?: Date | string;
};
export type UserProjectUpdateManyMutationInput = {
    role?: Prisma.EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserProjectUncheckedUpdateManyInput = {
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    projectId?: Prisma.IntFieldUpdateOperationsInput | number;
    role?: Prisma.EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserProjectListRelationFilter = {
    every?: Prisma.UserProjectWhereInput;
    some?: Prisma.UserProjectWhereInput;
    none?: Prisma.UserProjectWhereInput;
};
export type UserProjectOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UserProjectUserIdProjectIdCompoundUniqueInput = {
    userId: number;
    projectId: number;
};
export type UserProjectCountOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
};
export type UserProjectAvgOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
};
export type UserProjectMaxOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
};
export type UserProjectMinOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
};
export type UserProjectSumOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
};
export type UserProjectCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserProjectCreateWithoutUserInput, Prisma.UserProjectUncheckedCreateWithoutUserInput> | Prisma.UserProjectCreateWithoutUserInput[] | Prisma.UserProjectUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserProjectCreateOrConnectWithoutUserInput | Prisma.UserProjectCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserProjectCreateManyUserInputEnvelope;
    connect?: Prisma.UserProjectWhereUniqueInput | Prisma.UserProjectWhereUniqueInput[];
};
export type UserProjectUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserProjectCreateWithoutUserInput, Prisma.UserProjectUncheckedCreateWithoutUserInput> | Prisma.UserProjectCreateWithoutUserInput[] | Prisma.UserProjectUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserProjectCreateOrConnectWithoutUserInput | Prisma.UserProjectCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserProjectCreateManyUserInputEnvelope;
    connect?: Prisma.UserProjectWhereUniqueInput | Prisma.UserProjectWhereUniqueInput[];
};
export type UserProjectUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserProjectCreateWithoutUserInput, Prisma.UserProjectUncheckedCreateWithoutUserInput> | Prisma.UserProjectCreateWithoutUserInput[] | Prisma.UserProjectUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserProjectCreateOrConnectWithoutUserInput | Prisma.UserProjectCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserProjectUpsertWithWhereUniqueWithoutUserInput | Prisma.UserProjectUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserProjectCreateManyUserInputEnvelope;
    set?: Prisma.UserProjectWhereUniqueInput | Prisma.UserProjectWhereUniqueInput[];
    disconnect?: Prisma.UserProjectWhereUniqueInput | Prisma.UserProjectWhereUniqueInput[];
    delete?: Prisma.UserProjectWhereUniqueInput | Prisma.UserProjectWhereUniqueInput[];
    connect?: Prisma.UserProjectWhereUniqueInput | Prisma.UserProjectWhereUniqueInput[];
    update?: Prisma.UserProjectUpdateWithWhereUniqueWithoutUserInput | Prisma.UserProjectUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserProjectUpdateManyWithWhereWithoutUserInput | Prisma.UserProjectUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserProjectScalarWhereInput | Prisma.UserProjectScalarWhereInput[];
};
export type UserProjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserProjectCreateWithoutUserInput, Prisma.UserProjectUncheckedCreateWithoutUserInput> | Prisma.UserProjectCreateWithoutUserInput[] | Prisma.UserProjectUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserProjectCreateOrConnectWithoutUserInput | Prisma.UserProjectCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserProjectUpsertWithWhereUniqueWithoutUserInput | Prisma.UserProjectUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserProjectCreateManyUserInputEnvelope;
    set?: Prisma.UserProjectWhereUniqueInput | Prisma.UserProjectWhereUniqueInput[];
    disconnect?: Prisma.UserProjectWhereUniqueInput | Prisma.UserProjectWhereUniqueInput[];
    delete?: Prisma.UserProjectWhereUniqueInput | Prisma.UserProjectWhereUniqueInput[];
    connect?: Prisma.UserProjectWhereUniqueInput | Prisma.UserProjectWhereUniqueInput[];
    update?: Prisma.UserProjectUpdateWithWhereUniqueWithoutUserInput | Prisma.UserProjectUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserProjectUpdateManyWithWhereWithoutUserInput | Prisma.UserProjectUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserProjectScalarWhereInput | Prisma.UserProjectScalarWhereInput[];
};
export type UserProjectCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.UserProjectCreateWithoutProjectInput, Prisma.UserProjectUncheckedCreateWithoutProjectInput> | Prisma.UserProjectCreateWithoutProjectInput[] | Prisma.UserProjectUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.UserProjectCreateOrConnectWithoutProjectInput | Prisma.UserProjectCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.UserProjectCreateManyProjectInputEnvelope;
    connect?: Prisma.UserProjectWhereUniqueInput | Prisma.UserProjectWhereUniqueInput[];
};
export type UserProjectUncheckedCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.UserProjectCreateWithoutProjectInput, Prisma.UserProjectUncheckedCreateWithoutProjectInput> | Prisma.UserProjectCreateWithoutProjectInput[] | Prisma.UserProjectUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.UserProjectCreateOrConnectWithoutProjectInput | Prisma.UserProjectCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.UserProjectCreateManyProjectInputEnvelope;
    connect?: Prisma.UserProjectWhereUniqueInput | Prisma.UserProjectWhereUniqueInput[];
};
export type UserProjectUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.UserProjectCreateWithoutProjectInput, Prisma.UserProjectUncheckedCreateWithoutProjectInput> | Prisma.UserProjectCreateWithoutProjectInput[] | Prisma.UserProjectUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.UserProjectCreateOrConnectWithoutProjectInput | Prisma.UserProjectCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.UserProjectUpsertWithWhereUniqueWithoutProjectInput | Prisma.UserProjectUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.UserProjectCreateManyProjectInputEnvelope;
    set?: Prisma.UserProjectWhereUniqueInput | Prisma.UserProjectWhereUniqueInput[];
    disconnect?: Prisma.UserProjectWhereUniqueInput | Prisma.UserProjectWhereUniqueInput[];
    delete?: Prisma.UserProjectWhereUniqueInput | Prisma.UserProjectWhereUniqueInput[];
    connect?: Prisma.UserProjectWhereUniqueInput | Prisma.UserProjectWhereUniqueInput[];
    update?: Prisma.UserProjectUpdateWithWhereUniqueWithoutProjectInput | Prisma.UserProjectUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.UserProjectUpdateManyWithWhereWithoutProjectInput | Prisma.UserProjectUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.UserProjectScalarWhereInput | Prisma.UserProjectScalarWhereInput[];
};
export type UserProjectUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.UserProjectCreateWithoutProjectInput, Prisma.UserProjectUncheckedCreateWithoutProjectInput> | Prisma.UserProjectCreateWithoutProjectInput[] | Prisma.UserProjectUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.UserProjectCreateOrConnectWithoutProjectInput | Prisma.UserProjectCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.UserProjectUpsertWithWhereUniqueWithoutProjectInput | Prisma.UserProjectUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.UserProjectCreateManyProjectInputEnvelope;
    set?: Prisma.UserProjectWhereUniqueInput | Prisma.UserProjectWhereUniqueInput[];
    disconnect?: Prisma.UserProjectWhereUniqueInput | Prisma.UserProjectWhereUniqueInput[];
    delete?: Prisma.UserProjectWhereUniqueInput | Prisma.UserProjectWhereUniqueInput[];
    connect?: Prisma.UserProjectWhereUniqueInput | Prisma.UserProjectWhereUniqueInput[];
    update?: Prisma.UserProjectUpdateWithWhereUniqueWithoutProjectInput | Prisma.UserProjectUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.UserProjectUpdateManyWithWhereWithoutProjectInput | Prisma.UserProjectUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.UserProjectScalarWhereInput | Prisma.UserProjectScalarWhereInput[];
};
export type EnumProjectRoleFieldUpdateOperationsInput = {
    set?: $Enums.ProjectRole;
};
export type UserProjectCreateWithoutUserInput = {
    role?: $Enums.ProjectRole;
    joinedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutMembersInput;
};
export type UserProjectUncheckedCreateWithoutUserInput = {
    projectId: number;
    role?: $Enums.ProjectRole;
    joinedAt?: Date | string;
};
export type UserProjectCreateOrConnectWithoutUserInput = {
    where: Prisma.UserProjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserProjectCreateWithoutUserInput, Prisma.UserProjectUncheckedCreateWithoutUserInput>;
};
export type UserProjectCreateManyUserInputEnvelope = {
    data: Prisma.UserProjectCreateManyUserInput | Prisma.UserProjectCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type UserProjectUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserProjectWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserProjectUpdateWithoutUserInput, Prisma.UserProjectUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.UserProjectCreateWithoutUserInput, Prisma.UserProjectUncheckedCreateWithoutUserInput>;
};
export type UserProjectUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserProjectWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserProjectUpdateWithoutUserInput, Prisma.UserProjectUncheckedUpdateWithoutUserInput>;
};
export type UserProjectUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.UserProjectScalarWhereInput;
    data: Prisma.XOR<Prisma.UserProjectUpdateManyMutationInput, Prisma.UserProjectUncheckedUpdateManyWithoutUserInput>;
};
export type UserProjectScalarWhereInput = {
    AND?: Prisma.UserProjectScalarWhereInput | Prisma.UserProjectScalarWhereInput[];
    OR?: Prisma.UserProjectScalarWhereInput[];
    NOT?: Prisma.UserProjectScalarWhereInput | Prisma.UserProjectScalarWhereInput[];
    userId?: Prisma.IntFilter<"UserProject"> | number;
    projectId?: Prisma.IntFilter<"UserProject"> | number;
    role?: Prisma.EnumProjectRoleFilter<"UserProject"> | $Enums.ProjectRole;
    joinedAt?: Prisma.DateTimeFilter<"UserProject"> | Date | string;
};
export type UserProjectCreateWithoutProjectInput = {
    role?: $Enums.ProjectRole;
    joinedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutProjectsInput;
};
export type UserProjectUncheckedCreateWithoutProjectInput = {
    userId: number;
    role?: $Enums.ProjectRole;
    joinedAt?: Date | string;
};
export type UserProjectCreateOrConnectWithoutProjectInput = {
    where: Prisma.UserProjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserProjectCreateWithoutProjectInput, Prisma.UserProjectUncheckedCreateWithoutProjectInput>;
};
export type UserProjectCreateManyProjectInputEnvelope = {
    data: Prisma.UserProjectCreateManyProjectInput | Prisma.UserProjectCreateManyProjectInput[];
    skipDuplicates?: boolean;
};
export type UserProjectUpsertWithWhereUniqueWithoutProjectInput = {
    where: Prisma.UserProjectWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserProjectUpdateWithoutProjectInput, Prisma.UserProjectUncheckedUpdateWithoutProjectInput>;
    create: Prisma.XOR<Prisma.UserProjectCreateWithoutProjectInput, Prisma.UserProjectUncheckedCreateWithoutProjectInput>;
};
export type UserProjectUpdateWithWhereUniqueWithoutProjectInput = {
    where: Prisma.UserProjectWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserProjectUpdateWithoutProjectInput, Prisma.UserProjectUncheckedUpdateWithoutProjectInput>;
};
export type UserProjectUpdateManyWithWhereWithoutProjectInput = {
    where: Prisma.UserProjectScalarWhereInput;
    data: Prisma.XOR<Prisma.UserProjectUpdateManyMutationInput, Prisma.UserProjectUncheckedUpdateManyWithoutProjectInput>;
};
export type UserProjectCreateManyUserInput = {
    projectId: number;
    role?: $Enums.ProjectRole;
    joinedAt?: Date | string;
};
export type UserProjectUpdateWithoutUserInput = {
    role?: Prisma.EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutMembersNestedInput;
};
export type UserProjectUncheckedUpdateWithoutUserInput = {
    projectId?: Prisma.IntFieldUpdateOperationsInput | number;
    role?: Prisma.EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserProjectUncheckedUpdateManyWithoutUserInput = {
    projectId?: Prisma.IntFieldUpdateOperationsInput | number;
    role?: Prisma.EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserProjectCreateManyProjectInput = {
    userId: number;
    role?: $Enums.ProjectRole;
    joinedAt?: Date | string;
};
export type UserProjectUpdateWithoutProjectInput = {
    role?: Prisma.EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutProjectsNestedInput;
};
export type UserProjectUncheckedUpdateWithoutProjectInput = {
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    role?: Prisma.EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserProjectUncheckedUpdateManyWithoutProjectInput = {
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    role?: Prisma.EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserProjectSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    projectId?: boolean;
    role?: boolean;
    joinedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userProject"]>;
export type UserProjectSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    projectId?: boolean;
    role?: boolean;
    joinedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userProject"]>;
export type UserProjectSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    projectId?: boolean;
    role?: boolean;
    joinedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userProject"]>;
export type UserProjectSelectScalar = {
    userId?: boolean;
    projectId?: boolean;
    role?: boolean;
    joinedAt?: boolean;
};
export type UserProjectOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"userId" | "projectId" | "role" | "joinedAt", ExtArgs["result"]["userProject"]>;
export type UserProjectInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
};
export type UserProjectIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
};
export type UserProjectIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
};
export type $UserProjectPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "UserProject";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        project: Prisma.$ProjectPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        userId: number;
        projectId: number;
        role: $Enums.ProjectRole;
        joinedAt: Date;
    }, ExtArgs["result"]["userProject"]>;
    composites: {};
};
export type UserProjectGetPayload<S extends boolean | null | undefined | UserProjectDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserProjectPayload, S>;
export type UserProjectCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserProjectCountAggregateInputType | true;
};
export interface UserProjectDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['UserProject'];
        meta: {
            name: 'UserProject';
        };
    };
    findUnique<T extends UserProjectFindUniqueArgs>(args: Prisma.SelectSubset<T, UserProjectFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserProjectClient<runtime.Types.Result.GetResult<Prisma.$UserProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserProjectFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserProjectClient<runtime.Types.Result.GetResult<Prisma.$UserProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserProjectFindFirstArgs>(args?: Prisma.SelectSubset<T, UserProjectFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserProjectClient<runtime.Types.Result.GetResult<Prisma.$UserProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserProjectFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserProjectClient<runtime.Types.Result.GetResult<Prisma.$UserProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserProjectFindManyArgs>(args?: Prisma.SelectSubset<T, UserProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserProjectCreateArgs>(args: Prisma.SelectSubset<T, UserProjectCreateArgs<ExtArgs>>): Prisma.Prisma__UserProjectClient<runtime.Types.Result.GetResult<Prisma.$UserProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserProjectCreateManyArgs>(args?: Prisma.SelectSubset<T, UserProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserProjectCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserProjectDeleteArgs>(args: Prisma.SelectSubset<T, UserProjectDeleteArgs<ExtArgs>>): Prisma.Prisma__UserProjectClient<runtime.Types.Result.GetResult<Prisma.$UserProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserProjectUpdateArgs>(args: Prisma.SelectSubset<T, UserProjectUpdateArgs<ExtArgs>>): Prisma.Prisma__UserProjectClient<runtime.Types.Result.GetResult<Prisma.$UserProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserProjectDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserProjectUpdateManyArgs>(args: Prisma.SelectSubset<T, UserProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserProjectUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserProjectUpsertArgs>(args: Prisma.SelectSubset<T, UserProjectUpsertArgs<ExtArgs>>): Prisma.Prisma__UserProjectClient<runtime.Types.Result.GetResult<Prisma.$UserProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserProjectCountArgs>(args?: Prisma.Subset<T, UserProjectCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserProjectCountAggregateOutputType> : number>;
    aggregate<T extends UserProjectAggregateArgs>(args: Prisma.Subset<T, UserProjectAggregateArgs>): Prisma.PrismaPromise<GetUserProjectAggregateType<T>>;
    groupBy<T extends UserProjectGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserProjectGroupByArgs['orderBy'];
    } : {
        orderBy?: UserProjectGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserProjectFieldRefs;
}
export interface Prisma__UserProjectClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    project<T extends Prisma.ProjectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProjectDefaultArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserProjectFieldRefs {
    readonly userId: Prisma.FieldRef<"UserProject", 'Int'>;
    readonly projectId: Prisma.FieldRef<"UserProject", 'Int'>;
    readonly role: Prisma.FieldRef<"UserProject", 'ProjectRole'>;
    readonly joinedAt: Prisma.FieldRef<"UserProject", 'DateTime'>;
}
export type UserProjectFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserProjectSelect<ExtArgs> | null;
    omit?: Prisma.UserProjectOmit<ExtArgs> | null;
    include?: Prisma.UserProjectInclude<ExtArgs> | null;
    where: Prisma.UserProjectWhereUniqueInput;
};
export type UserProjectFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserProjectSelect<ExtArgs> | null;
    omit?: Prisma.UserProjectOmit<ExtArgs> | null;
    include?: Prisma.UserProjectInclude<ExtArgs> | null;
    where: Prisma.UserProjectWhereUniqueInput;
};
export type UserProjectFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserProjectSelect<ExtArgs> | null;
    omit?: Prisma.UserProjectOmit<ExtArgs> | null;
    include?: Prisma.UserProjectInclude<ExtArgs> | null;
    where?: Prisma.UserProjectWhereInput;
    orderBy?: Prisma.UserProjectOrderByWithRelationInput | Prisma.UserProjectOrderByWithRelationInput[];
    cursor?: Prisma.UserProjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserProjectScalarFieldEnum | Prisma.UserProjectScalarFieldEnum[];
};
export type UserProjectFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserProjectSelect<ExtArgs> | null;
    omit?: Prisma.UserProjectOmit<ExtArgs> | null;
    include?: Prisma.UserProjectInclude<ExtArgs> | null;
    where?: Prisma.UserProjectWhereInput;
    orderBy?: Prisma.UserProjectOrderByWithRelationInput | Prisma.UserProjectOrderByWithRelationInput[];
    cursor?: Prisma.UserProjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserProjectScalarFieldEnum | Prisma.UserProjectScalarFieldEnum[];
};
export type UserProjectFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserProjectSelect<ExtArgs> | null;
    omit?: Prisma.UserProjectOmit<ExtArgs> | null;
    include?: Prisma.UserProjectInclude<ExtArgs> | null;
    where?: Prisma.UserProjectWhereInput;
    orderBy?: Prisma.UserProjectOrderByWithRelationInput | Prisma.UserProjectOrderByWithRelationInput[];
    cursor?: Prisma.UserProjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserProjectScalarFieldEnum | Prisma.UserProjectScalarFieldEnum[];
};
export type UserProjectCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserProjectSelect<ExtArgs> | null;
    omit?: Prisma.UserProjectOmit<ExtArgs> | null;
    include?: Prisma.UserProjectInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserProjectCreateInput, Prisma.UserProjectUncheckedCreateInput>;
};
export type UserProjectCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserProjectCreateManyInput | Prisma.UserProjectCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserProjectCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserProjectSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserProjectOmit<ExtArgs> | null;
    data: Prisma.UserProjectCreateManyInput | Prisma.UserProjectCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.UserProjectIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type UserProjectUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserProjectSelect<ExtArgs> | null;
    omit?: Prisma.UserProjectOmit<ExtArgs> | null;
    include?: Prisma.UserProjectInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserProjectUpdateInput, Prisma.UserProjectUncheckedUpdateInput>;
    where: Prisma.UserProjectWhereUniqueInput;
};
export type UserProjectUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserProjectUpdateManyMutationInput, Prisma.UserProjectUncheckedUpdateManyInput>;
    where?: Prisma.UserProjectWhereInput;
    limit?: number;
};
export type UserProjectUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserProjectSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserProjectOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserProjectUpdateManyMutationInput, Prisma.UserProjectUncheckedUpdateManyInput>;
    where?: Prisma.UserProjectWhereInput;
    limit?: number;
    include?: Prisma.UserProjectIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type UserProjectUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserProjectSelect<ExtArgs> | null;
    omit?: Prisma.UserProjectOmit<ExtArgs> | null;
    include?: Prisma.UserProjectInclude<ExtArgs> | null;
    where: Prisma.UserProjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserProjectCreateInput, Prisma.UserProjectUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserProjectUpdateInput, Prisma.UserProjectUncheckedUpdateInput>;
};
export type UserProjectDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserProjectSelect<ExtArgs> | null;
    omit?: Prisma.UserProjectOmit<ExtArgs> | null;
    include?: Prisma.UserProjectInclude<ExtArgs> | null;
    where: Prisma.UserProjectWhereUniqueInput;
};
export type UserProjectDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserProjectWhereInput;
    limit?: number;
};
export type UserProjectDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserProjectSelect<ExtArgs> | null;
    omit?: Prisma.UserProjectOmit<ExtArgs> | null;
    include?: Prisma.UserProjectInclude<ExtArgs> | null;
};
