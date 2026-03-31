import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserProjectsModel = runtime.Types.Result.DefaultSelection<Prisma.$UserProjectsPayload>;
export type AggregateUserProjects = {
    _count: UserProjectsCountAggregateOutputType | null;
    _avg: UserProjectsAvgAggregateOutputType | null;
    _sum: UserProjectsSumAggregateOutputType | null;
    _min: UserProjectsMinAggregateOutputType | null;
    _max: UserProjectsMaxAggregateOutputType | null;
};
export type UserProjectsAvgAggregateOutputType = {
    userId: number | null;
    projectId: number | null;
};
export type UserProjectsSumAggregateOutputType = {
    userId: number | null;
    projectId: number | null;
};
export type UserProjectsMinAggregateOutputType = {
    userId: number | null;
    projectId: number | null;
    joinedAt: Date | null;
};
export type UserProjectsMaxAggregateOutputType = {
    userId: number | null;
    projectId: number | null;
    joinedAt: Date | null;
};
export type UserProjectsCountAggregateOutputType = {
    userId: number;
    projectId: number;
    joinedAt: number;
    _all: number;
};
export type UserProjectsAvgAggregateInputType = {
    userId?: true;
    projectId?: true;
};
export type UserProjectsSumAggregateInputType = {
    userId?: true;
    projectId?: true;
};
export type UserProjectsMinAggregateInputType = {
    userId?: true;
    projectId?: true;
    joinedAt?: true;
};
export type UserProjectsMaxAggregateInputType = {
    userId?: true;
    projectId?: true;
    joinedAt?: true;
};
export type UserProjectsCountAggregateInputType = {
    userId?: true;
    projectId?: true;
    joinedAt?: true;
    _all?: true;
};
export type UserProjectsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserProjectsWhereInput;
    orderBy?: Prisma.UserProjectsOrderByWithRelationInput | Prisma.UserProjectsOrderByWithRelationInput[];
    cursor?: Prisma.UserProjectsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserProjectsCountAggregateInputType;
    _avg?: UserProjectsAvgAggregateInputType;
    _sum?: UserProjectsSumAggregateInputType;
    _min?: UserProjectsMinAggregateInputType;
    _max?: UserProjectsMaxAggregateInputType;
};
export type GetUserProjectsAggregateType<T extends UserProjectsAggregateArgs> = {
    [P in keyof T & keyof AggregateUserProjects]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUserProjects[P]> : Prisma.GetScalarType<T[P], AggregateUserProjects[P]>;
};
export type UserProjectsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserProjectsWhereInput;
    orderBy?: Prisma.UserProjectsOrderByWithAggregationInput | Prisma.UserProjectsOrderByWithAggregationInput[];
    by: Prisma.UserProjectsScalarFieldEnum[] | Prisma.UserProjectsScalarFieldEnum;
    having?: Prisma.UserProjectsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserProjectsCountAggregateInputType | true;
    _avg?: UserProjectsAvgAggregateInputType;
    _sum?: UserProjectsSumAggregateInputType;
    _min?: UserProjectsMinAggregateInputType;
    _max?: UserProjectsMaxAggregateInputType;
};
export type UserProjectsGroupByOutputType = {
    userId: number;
    projectId: number;
    joinedAt: Date;
    _count: UserProjectsCountAggregateOutputType | null;
    _avg: UserProjectsAvgAggregateOutputType | null;
    _sum: UserProjectsSumAggregateOutputType | null;
    _min: UserProjectsMinAggregateOutputType | null;
    _max: UserProjectsMaxAggregateOutputType | null;
};
type GetUserProjectsGroupByPayload<T extends UserProjectsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserProjectsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserProjectsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserProjectsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserProjectsGroupByOutputType[P]>;
}>>;
export type UserProjectsWhereInput = {
    AND?: Prisma.UserProjectsWhereInput | Prisma.UserProjectsWhereInput[];
    OR?: Prisma.UserProjectsWhereInput[];
    NOT?: Prisma.UserProjectsWhereInput | Prisma.UserProjectsWhereInput[];
    userId?: Prisma.IntFilter<"UserProjects"> | number;
    projectId?: Prisma.IntFilter<"UserProjects"> | number;
    joinedAt?: Prisma.DateTimeFilter<"UserProjects"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
};
export type UserProjectsOrderByWithRelationInput = {
    userId?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    project?: Prisma.ProjectOrderByWithRelationInput;
};
export type UserProjectsWhereUniqueInput = Prisma.AtLeast<{
    userId_projectId?: Prisma.UserProjectsUserIdProjectIdCompoundUniqueInput;
    AND?: Prisma.UserProjectsWhereInput | Prisma.UserProjectsWhereInput[];
    OR?: Prisma.UserProjectsWhereInput[];
    NOT?: Prisma.UserProjectsWhereInput | Prisma.UserProjectsWhereInput[];
    userId?: Prisma.IntFilter<"UserProjects"> | number;
    projectId?: Prisma.IntFilter<"UserProjects"> | number;
    joinedAt?: Prisma.DateTimeFilter<"UserProjects"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
}, "userId_projectId">;
export type UserProjectsOrderByWithAggregationInput = {
    userId?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
    _count?: Prisma.UserProjectsCountOrderByAggregateInput;
    _avg?: Prisma.UserProjectsAvgOrderByAggregateInput;
    _max?: Prisma.UserProjectsMaxOrderByAggregateInput;
    _min?: Prisma.UserProjectsMinOrderByAggregateInput;
    _sum?: Prisma.UserProjectsSumOrderByAggregateInput;
};
export type UserProjectsScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserProjectsScalarWhereWithAggregatesInput | Prisma.UserProjectsScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserProjectsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserProjectsScalarWhereWithAggregatesInput | Prisma.UserProjectsScalarWhereWithAggregatesInput[];
    userId?: Prisma.IntWithAggregatesFilter<"UserProjects"> | number;
    projectId?: Prisma.IntWithAggregatesFilter<"UserProjects"> | number;
    joinedAt?: Prisma.DateTimeWithAggregatesFilter<"UserProjects"> | Date | string;
};
export type UserProjectsCreateInput = {
    joinedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutProjectsInput;
    project: Prisma.ProjectCreateNestedOneWithoutMembersInput;
};
export type UserProjectsUncheckedCreateInput = {
    userId: number;
    projectId: number;
    joinedAt?: Date | string;
};
export type UserProjectsUpdateInput = {
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutProjectsNestedInput;
    project?: Prisma.ProjectUpdateOneRequiredWithoutMembersNestedInput;
};
export type UserProjectsUncheckedUpdateInput = {
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    projectId?: Prisma.IntFieldUpdateOperationsInput | number;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserProjectsCreateManyInput = {
    userId: number;
    projectId: number;
    joinedAt?: Date | string;
};
export type UserProjectsUpdateManyMutationInput = {
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserProjectsUncheckedUpdateManyInput = {
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    projectId?: Prisma.IntFieldUpdateOperationsInput | number;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserProjectsListRelationFilter = {
    every?: Prisma.UserProjectsWhereInput;
    some?: Prisma.UserProjectsWhereInput;
    none?: Prisma.UserProjectsWhereInput;
};
export type UserProjectsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UserProjectsUserIdProjectIdCompoundUniqueInput = {
    userId: number;
    projectId: number;
};
export type UserProjectsCountOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
};
export type UserProjectsAvgOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
};
export type UserProjectsMaxOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
};
export type UserProjectsMinOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
};
export type UserProjectsSumOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
};
export type UserProjectsCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserProjectsCreateWithoutUserInput, Prisma.UserProjectsUncheckedCreateWithoutUserInput> | Prisma.UserProjectsCreateWithoutUserInput[] | Prisma.UserProjectsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserProjectsCreateOrConnectWithoutUserInput | Prisma.UserProjectsCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserProjectsCreateManyUserInputEnvelope;
    connect?: Prisma.UserProjectsWhereUniqueInput | Prisma.UserProjectsWhereUniqueInput[];
};
export type UserProjectsUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserProjectsCreateWithoutUserInput, Prisma.UserProjectsUncheckedCreateWithoutUserInput> | Prisma.UserProjectsCreateWithoutUserInput[] | Prisma.UserProjectsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserProjectsCreateOrConnectWithoutUserInput | Prisma.UserProjectsCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserProjectsCreateManyUserInputEnvelope;
    connect?: Prisma.UserProjectsWhereUniqueInput | Prisma.UserProjectsWhereUniqueInput[];
};
export type UserProjectsUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserProjectsCreateWithoutUserInput, Prisma.UserProjectsUncheckedCreateWithoutUserInput> | Prisma.UserProjectsCreateWithoutUserInput[] | Prisma.UserProjectsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserProjectsCreateOrConnectWithoutUserInput | Prisma.UserProjectsCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserProjectsUpsertWithWhereUniqueWithoutUserInput | Prisma.UserProjectsUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserProjectsCreateManyUserInputEnvelope;
    set?: Prisma.UserProjectsWhereUniqueInput | Prisma.UserProjectsWhereUniqueInput[];
    disconnect?: Prisma.UserProjectsWhereUniqueInput | Prisma.UserProjectsWhereUniqueInput[];
    delete?: Prisma.UserProjectsWhereUniqueInput | Prisma.UserProjectsWhereUniqueInput[];
    connect?: Prisma.UserProjectsWhereUniqueInput | Prisma.UserProjectsWhereUniqueInput[];
    update?: Prisma.UserProjectsUpdateWithWhereUniqueWithoutUserInput | Prisma.UserProjectsUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserProjectsUpdateManyWithWhereWithoutUserInput | Prisma.UserProjectsUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserProjectsScalarWhereInput | Prisma.UserProjectsScalarWhereInput[];
};
export type UserProjectsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserProjectsCreateWithoutUserInput, Prisma.UserProjectsUncheckedCreateWithoutUserInput> | Prisma.UserProjectsCreateWithoutUserInput[] | Prisma.UserProjectsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserProjectsCreateOrConnectWithoutUserInput | Prisma.UserProjectsCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserProjectsUpsertWithWhereUniqueWithoutUserInput | Prisma.UserProjectsUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserProjectsCreateManyUserInputEnvelope;
    set?: Prisma.UserProjectsWhereUniqueInput | Prisma.UserProjectsWhereUniqueInput[];
    disconnect?: Prisma.UserProjectsWhereUniqueInput | Prisma.UserProjectsWhereUniqueInput[];
    delete?: Prisma.UserProjectsWhereUniqueInput | Prisma.UserProjectsWhereUniqueInput[];
    connect?: Prisma.UserProjectsWhereUniqueInput | Prisma.UserProjectsWhereUniqueInput[];
    update?: Prisma.UserProjectsUpdateWithWhereUniqueWithoutUserInput | Prisma.UserProjectsUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserProjectsUpdateManyWithWhereWithoutUserInput | Prisma.UserProjectsUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserProjectsScalarWhereInput | Prisma.UserProjectsScalarWhereInput[];
};
export type UserProjectsCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.UserProjectsCreateWithoutProjectInput, Prisma.UserProjectsUncheckedCreateWithoutProjectInput> | Prisma.UserProjectsCreateWithoutProjectInput[] | Prisma.UserProjectsUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.UserProjectsCreateOrConnectWithoutProjectInput | Prisma.UserProjectsCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.UserProjectsCreateManyProjectInputEnvelope;
    connect?: Prisma.UserProjectsWhereUniqueInput | Prisma.UserProjectsWhereUniqueInput[];
};
export type UserProjectsUncheckedCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.UserProjectsCreateWithoutProjectInput, Prisma.UserProjectsUncheckedCreateWithoutProjectInput> | Prisma.UserProjectsCreateWithoutProjectInput[] | Prisma.UserProjectsUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.UserProjectsCreateOrConnectWithoutProjectInput | Prisma.UserProjectsCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.UserProjectsCreateManyProjectInputEnvelope;
    connect?: Prisma.UserProjectsWhereUniqueInput | Prisma.UserProjectsWhereUniqueInput[];
};
export type UserProjectsUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.UserProjectsCreateWithoutProjectInput, Prisma.UserProjectsUncheckedCreateWithoutProjectInput> | Prisma.UserProjectsCreateWithoutProjectInput[] | Prisma.UserProjectsUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.UserProjectsCreateOrConnectWithoutProjectInput | Prisma.UserProjectsCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.UserProjectsUpsertWithWhereUniqueWithoutProjectInput | Prisma.UserProjectsUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.UserProjectsCreateManyProjectInputEnvelope;
    set?: Prisma.UserProjectsWhereUniqueInput | Prisma.UserProjectsWhereUniqueInput[];
    disconnect?: Prisma.UserProjectsWhereUniqueInput | Prisma.UserProjectsWhereUniqueInput[];
    delete?: Prisma.UserProjectsWhereUniqueInput | Prisma.UserProjectsWhereUniqueInput[];
    connect?: Prisma.UserProjectsWhereUniqueInput | Prisma.UserProjectsWhereUniqueInput[];
    update?: Prisma.UserProjectsUpdateWithWhereUniqueWithoutProjectInput | Prisma.UserProjectsUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.UserProjectsUpdateManyWithWhereWithoutProjectInput | Prisma.UserProjectsUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.UserProjectsScalarWhereInput | Prisma.UserProjectsScalarWhereInput[];
};
export type UserProjectsUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.UserProjectsCreateWithoutProjectInput, Prisma.UserProjectsUncheckedCreateWithoutProjectInput> | Prisma.UserProjectsCreateWithoutProjectInput[] | Prisma.UserProjectsUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.UserProjectsCreateOrConnectWithoutProjectInput | Prisma.UserProjectsCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.UserProjectsUpsertWithWhereUniqueWithoutProjectInput | Prisma.UserProjectsUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.UserProjectsCreateManyProjectInputEnvelope;
    set?: Prisma.UserProjectsWhereUniqueInput | Prisma.UserProjectsWhereUniqueInput[];
    disconnect?: Prisma.UserProjectsWhereUniqueInput | Prisma.UserProjectsWhereUniqueInput[];
    delete?: Prisma.UserProjectsWhereUniqueInput | Prisma.UserProjectsWhereUniqueInput[];
    connect?: Prisma.UserProjectsWhereUniqueInput | Prisma.UserProjectsWhereUniqueInput[];
    update?: Prisma.UserProjectsUpdateWithWhereUniqueWithoutProjectInput | Prisma.UserProjectsUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.UserProjectsUpdateManyWithWhereWithoutProjectInput | Prisma.UserProjectsUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.UserProjectsScalarWhereInput | Prisma.UserProjectsScalarWhereInput[];
};
export type UserProjectsCreateWithoutUserInput = {
    joinedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutMembersInput;
};
export type UserProjectsUncheckedCreateWithoutUserInput = {
    projectId: number;
    joinedAt?: Date | string;
};
export type UserProjectsCreateOrConnectWithoutUserInput = {
    where: Prisma.UserProjectsWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserProjectsCreateWithoutUserInput, Prisma.UserProjectsUncheckedCreateWithoutUserInput>;
};
export type UserProjectsCreateManyUserInputEnvelope = {
    data: Prisma.UserProjectsCreateManyUserInput | Prisma.UserProjectsCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type UserProjectsUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserProjectsWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserProjectsUpdateWithoutUserInput, Prisma.UserProjectsUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.UserProjectsCreateWithoutUserInput, Prisma.UserProjectsUncheckedCreateWithoutUserInput>;
};
export type UserProjectsUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserProjectsWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserProjectsUpdateWithoutUserInput, Prisma.UserProjectsUncheckedUpdateWithoutUserInput>;
};
export type UserProjectsUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.UserProjectsScalarWhereInput;
    data: Prisma.XOR<Prisma.UserProjectsUpdateManyMutationInput, Prisma.UserProjectsUncheckedUpdateManyWithoutUserInput>;
};
export type UserProjectsScalarWhereInput = {
    AND?: Prisma.UserProjectsScalarWhereInput | Prisma.UserProjectsScalarWhereInput[];
    OR?: Prisma.UserProjectsScalarWhereInput[];
    NOT?: Prisma.UserProjectsScalarWhereInput | Prisma.UserProjectsScalarWhereInput[];
    userId?: Prisma.IntFilter<"UserProjects"> | number;
    projectId?: Prisma.IntFilter<"UserProjects"> | number;
    joinedAt?: Prisma.DateTimeFilter<"UserProjects"> | Date | string;
};
export type UserProjectsCreateWithoutProjectInput = {
    joinedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutProjectsInput;
};
export type UserProjectsUncheckedCreateWithoutProjectInput = {
    userId: number;
    joinedAt?: Date | string;
};
export type UserProjectsCreateOrConnectWithoutProjectInput = {
    where: Prisma.UserProjectsWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserProjectsCreateWithoutProjectInput, Prisma.UserProjectsUncheckedCreateWithoutProjectInput>;
};
export type UserProjectsCreateManyProjectInputEnvelope = {
    data: Prisma.UserProjectsCreateManyProjectInput | Prisma.UserProjectsCreateManyProjectInput[];
    skipDuplicates?: boolean;
};
export type UserProjectsUpsertWithWhereUniqueWithoutProjectInput = {
    where: Prisma.UserProjectsWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserProjectsUpdateWithoutProjectInput, Prisma.UserProjectsUncheckedUpdateWithoutProjectInput>;
    create: Prisma.XOR<Prisma.UserProjectsCreateWithoutProjectInput, Prisma.UserProjectsUncheckedCreateWithoutProjectInput>;
};
export type UserProjectsUpdateWithWhereUniqueWithoutProjectInput = {
    where: Prisma.UserProjectsWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserProjectsUpdateWithoutProjectInput, Prisma.UserProjectsUncheckedUpdateWithoutProjectInput>;
};
export type UserProjectsUpdateManyWithWhereWithoutProjectInput = {
    where: Prisma.UserProjectsScalarWhereInput;
    data: Prisma.XOR<Prisma.UserProjectsUpdateManyMutationInput, Prisma.UserProjectsUncheckedUpdateManyWithoutProjectInput>;
};
export type UserProjectsCreateManyUserInput = {
    projectId: number;
    joinedAt?: Date | string;
};
export type UserProjectsUpdateWithoutUserInput = {
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutMembersNestedInput;
};
export type UserProjectsUncheckedUpdateWithoutUserInput = {
    projectId?: Prisma.IntFieldUpdateOperationsInput | number;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserProjectsUncheckedUpdateManyWithoutUserInput = {
    projectId?: Prisma.IntFieldUpdateOperationsInput | number;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserProjectsCreateManyProjectInput = {
    userId: number;
    joinedAt?: Date | string;
};
export type UserProjectsUpdateWithoutProjectInput = {
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutProjectsNestedInput;
};
export type UserProjectsUncheckedUpdateWithoutProjectInput = {
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserProjectsUncheckedUpdateManyWithoutProjectInput = {
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserProjectsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    projectId?: boolean;
    joinedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userProjects"]>;
export type UserProjectsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    projectId?: boolean;
    joinedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userProjects"]>;
export type UserProjectsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    projectId?: boolean;
    joinedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userProjects"]>;
export type UserProjectsSelectScalar = {
    userId?: boolean;
    projectId?: boolean;
    joinedAt?: boolean;
};
export type UserProjectsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"userId" | "projectId" | "joinedAt", ExtArgs["result"]["userProjects"]>;
export type UserProjectsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
};
export type UserProjectsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
};
export type UserProjectsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
};
export type $UserProjectsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "UserProjects";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        project: Prisma.$ProjectPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        userId: number;
        projectId: number;
        joinedAt: Date;
    }, ExtArgs["result"]["userProjects"]>;
    composites: {};
};
export type UserProjectsGetPayload<S extends boolean | null | undefined | UserProjectsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserProjectsPayload, S>;
export type UserProjectsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserProjectsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserProjectsCountAggregateInputType | true;
};
export interface UserProjectsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['UserProjects'];
        meta: {
            name: 'UserProjects';
        };
    };
    findUnique<T extends UserProjectsFindUniqueArgs>(args: Prisma.SelectSubset<T, UserProjectsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserProjectsClient<runtime.Types.Result.GetResult<Prisma.$UserProjectsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserProjectsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserProjectsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserProjectsClient<runtime.Types.Result.GetResult<Prisma.$UserProjectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserProjectsFindFirstArgs>(args?: Prisma.SelectSubset<T, UserProjectsFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserProjectsClient<runtime.Types.Result.GetResult<Prisma.$UserProjectsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserProjectsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserProjectsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserProjectsClient<runtime.Types.Result.GetResult<Prisma.$UserProjectsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserProjectsFindManyArgs>(args?: Prisma.SelectSubset<T, UserProjectsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserProjectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserProjectsCreateArgs>(args: Prisma.SelectSubset<T, UserProjectsCreateArgs<ExtArgs>>): Prisma.Prisma__UserProjectsClient<runtime.Types.Result.GetResult<Prisma.$UserProjectsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserProjectsCreateManyArgs>(args?: Prisma.SelectSubset<T, UserProjectsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserProjectsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserProjectsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserProjectsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserProjectsDeleteArgs>(args: Prisma.SelectSubset<T, UserProjectsDeleteArgs<ExtArgs>>): Prisma.Prisma__UserProjectsClient<runtime.Types.Result.GetResult<Prisma.$UserProjectsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserProjectsUpdateArgs>(args: Prisma.SelectSubset<T, UserProjectsUpdateArgs<ExtArgs>>): Prisma.Prisma__UserProjectsClient<runtime.Types.Result.GetResult<Prisma.$UserProjectsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserProjectsDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserProjectsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserProjectsUpdateManyArgs>(args: Prisma.SelectSubset<T, UserProjectsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserProjectsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserProjectsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserProjectsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserProjectsUpsertArgs>(args: Prisma.SelectSubset<T, UserProjectsUpsertArgs<ExtArgs>>): Prisma.Prisma__UserProjectsClient<runtime.Types.Result.GetResult<Prisma.$UserProjectsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserProjectsCountArgs>(args?: Prisma.Subset<T, UserProjectsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserProjectsCountAggregateOutputType> : number>;
    aggregate<T extends UserProjectsAggregateArgs>(args: Prisma.Subset<T, UserProjectsAggregateArgs>): Prisma.PrismaPromise<GetUserProjectsAggregateType<T>>;
    groupBy<T extends UserProjectsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserProjectsGroupByArgs['orderBy'];
    } : {
        orderBy?: UserProjectsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserProjectsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProjectsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserProjectsFieldRefs;
}
export interface Prisma__UserProjectsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    project<T extends Prisma.ProjectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProjectDefaultArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserProjectsFieldRefs {
    readonly userId: Prisma.FieldRef<"UserProjects", 'Int'>;
    readonly projectId: Prisma.FieldRef<"UserProjects", 'Int'>;
    readonly joinedAt: Prisma.FieldRef<"UserProjects", 'DateTime'>;
}
export type UserProjectsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserProjectsSelect<ExtArgs> | null;
    omit?: Prisma.UserProjectsOmit<ExtArgs> | null;
    include?: Prisma.UserProjectsInclude<ExtArgs> | null;
    where: Prisma.UserProjectsWhereUniqueInput;
};
export type UserProjectsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserProjectsSelect<ExtArgs> | null;
    omit?: Prisma.UserProjectsOmit<ExtArgs> | null;
    include?: Prisma.UserProjectsInclude<ExtArgs> | null;
    where: Prisma.UserProjectsWhereUniqueInput;
};
export type UserProjectsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserProjectsSelect<ExtArgs> | null;
    omit?: Prisma.UserProjectsOmit<ExtArgs> | null;
    include?: Prisma.UserProjectsInclude<ExtArgs> | null;
    where?: Prisma.UserProjectsWhereInput;
    orderBy?: Prisma.UserProjectsOrderByWithRelationInput | Prisma.UserProjectsOrderByWithRelationInput[];
    cursor?: Prisma.UserProjectsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserProjectsScalarFieldEnum | Prisma.UserProjectsScalarFieldEnum[];
};
export type UserProjectsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserProjectsSelect<ExtArgs> | null;
    omit?: Prisma.UserProjectsOmit<ExtArgs> | null;
    include?: Prisma.UserProjectsInclude<ExtArgs> | null;
    where?: Prisma.UserProjectsWhereInput;
    orderBy?: Prisma.UserProjectsOrderByWithRelationInput | Prisma.UserProjectsOrderByWithRelationInput[];
    cursor?: Prisma.UserProjectsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserProjectsScalarFieldEnum | Prisma.UserProjectsScalarFieldEnum[];
};
export type UserProjectsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserProjectsSelect<ExtArgs> | null;
    omit?: Prisma.UserProjectsOmit<ExtArgs> | null;
    include?: Prisma.UserProjectsInclude<ExtArgs> | null;
    where?: Prisma.UserProjectsWhereInput;
    orderBy?: Prisma.UserProjectsOrderByWithRelationInput | Prisma.UserProjectsOrderByWithRelationInput[];
    cursor?: Prisma.UserProjectsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserProjectsScalarFieldEnum | Prisma.UserProjectsScalarFieldEnum[];
};
export type UserProjectsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserProjectsSelect<ExtArgs> | null;
    omit?: Prisma.UserProjectsOmit<ExtArgs> | null;
    include?: Prisma.UserProjectsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserProjectsCreateInput, Prisma.UserProjectsUncheckedCreateInput>;
};
export type UserProjectsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserProjectsCreateManyInput | Prisma.UserProjectsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserProjectsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserProjectsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserProjectsOmit<ExtArgs> | null;
    data: Prisma.UserProjectsCreateManyInput | Prisma.UserProjectsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.UserProjectsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type UserProjectsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserProjectsSelect<ExtArgs> | null;
    omit?: Prisma.UserProjectsOmit<ExtArgs> | null;
    include?: Prisma.UserProjectsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserProjectsUpdateInput, Prisma.UserProjectsUncheckedUpdateInput>;
    where: Prisma.UserProjectsWhereUniqueInput;
};
export type UserProjectsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserProjectsUpdateManyMutationInput, Prisma.UserProjectsUncheckedUpdateManyInput>;
    where?: Prisma.UserProjectsWhereInput;
    limit?: number;
};
export type UserProjectsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserProjectsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserProjectsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserProjectsUpdateManyMutationInput, Prisma.UserProjectsUncheckedUpdateManyInput>;
    where?: Prisma.UserProjectsWhereInput;
    limit?: number;
    include?: Prisma.UserProjectsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type UserProjectsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserProjectsSelect<ExtArgs> | null;
    omit?: Prisma.UserProjectsOmit<ExtArgs> | null;
    include?: Prisma.UserProjectsInclude<ExtArgs> | null;
    where: Prisma.UserProjectsWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserProjectsCreateInput, Prisma.UserProjectsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserProjectsUpdateInput, Prisma.UserProjectsUncheckedUpdateInput>;
};
export type UserProjectsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserProjectsSelect<ExtArgs> | null;
    omit?: Prisma.UserProjectsOmit<ExtArgs> | null;
    include?: Prisma.UserProjectsInclude<ExtArgs> | null;
    where: Prisma.UserProjectsWhereUniqueInput;
};
export type UserProjectsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserProjectsWhereInput;
    limit?: number;
};
export type UserProjectsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserProjectsSelect<ExtArgs> | null;
    omit?: Prisma.UserProjectsOmit<ExtArgs> | null;
    include?: Prisma.UserProjectsInclude<ExtArgs> | null;
};
export {};
