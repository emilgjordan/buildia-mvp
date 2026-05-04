import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProjectModel = runtime.Types.Result.DefaultSelection<Prisma.$ProjectPayload>;
export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null;
    _avg: ProjectAvgAggregateOutputType | null;
    _sum: ProjectSumAggregateOutputType | null;
    _min: ProjectMinAggregateOutputType | null;
    _max: ProjectMaxAggregateOutputType | null;
};
export type ProjectAvgAggregateOutputType = {
    id: number | null;
    creatorId: number | null;
    likes: number | null;
};
export type ProjectSumAggregateOutputType = {
    id: number | null;
    creatorId: number | null;
    likes: number | null;
};
export type ProjectMinAggregateOutputType = {
    id: number | null;
    title: string | null;
    description: string | null;
    creatorId: number | null;
    likes: number | null;
    public: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProjectMaxAggregateOutputType = {
    id: number | null;
    title: string | null;
    description: string | null;
    creatorId: number | null;
    likes: number | null;
    public: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProjectCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    creatorId: number;
    tags: number;
    likes: number;
    public: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ProjectAvgAggregateInputType = {
    id?: true;
    creatorId?: true;
    likes?: true;
};
export type ProjectSumAggregateInputType = {
    id?: true;
    creatorId?: true;
    likes?: true;
};
export type ProjectMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    creatorId?: true;
    likes?: true;
    public?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProjectMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    creatorId?: true;
    likes?: true;
    public?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProjectCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    creatorId?: true;
    tags?: true;
    likes?: true;
    public?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ProjectAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProjectWhereInput;
    orderBy?: Prisma.ProjectOrderByWithRelationInput | Prisma.ProjectOrderByWithRelationInput[];
    cursor?: Prisma.ProjectWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProjectCountAggregateInputType;
    _avg?: ProjectAvgAggregateInputType;
    _sum?: ProjectSumAggregateInputType;
    _min?: ProjectMinAggregateInputType;
    _max?: ProjectMaxAggregateInputType;
};
export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
    [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProject[P]> : Prisma.GetScalarType<T[P], AggregateProject[P]>;
};
export type ProjectGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProjectWhereInput;
    orderBy?: Prisma.ProjectOrderByWithAggregationInput | Prisma.ProjectOrderByWithAggregationInput[];
    by: Prisma.ProjectScalarFieldEnum[] | Prisma.ProjectScalarFieldEnum;
    having?: Prisma.ProjectScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProjectCountAggregateInputType | true;
    _avg?: ProjectAvgAggregateInputType;
    _sum?: ProjectSumAggregateInputType;
    _min?: ProjectMinAggregateInputType;
    _max?: ProjectMaxAggregateInputType;
};
export type ProjectGroupByOutputType = {
    id: number;
    title: string;
    description: string;
    creatorId: number;
    tags: string[];
    likes: number;
    public: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: ProjectCountAggregateOutputType | null;
    _avg: ProjectAvgAggregateOutputType | null;
    _sum: ProjectSumAggregateOutputType | null;
    _min: ProjectMinAggregateOutputType | null;
    _max: ProjectMaxAggregateOutputType | null;
};
export type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProjectGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProjectGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProjectGroupByOutputType[P]>;
}>>;
export type ProjectWhereInput = {
    AND?: Prisma.ProjectWhereInput | Prisma.ProjectWhereInput[];
    OR?: Prisma.ProjectWhereInput[];
    NOT?: Prisma.ProjectWhereInput | Prisma.ProjectWhereInput[];
    id?: Prisma.IntFilter<"Project"> | number;
    title?: Prisma.StringFilter<"Project"> | string;
    description?: Prisma.StringFilter<"Project"> | string;
    creatorId?: Prisma.IntFilter<"Project"> | number;
    tags?: Prisma.StringNullableListFilter<"Project">;
    likes?: Prisma.IntFilter<"Project"> | number;
    public?: Prisma.BoolFilter<"Project"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Project"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Project"> | Date | string;
    members?: Prisma.UserProjectsListRelationFilter;
    creator?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    joinRequests?: Prisma.JoinRequestListRelationFilter;
};
export type ProjectOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    creatorId?: Prisma.SortOrder;
    tags?: Prisma.SortOrder;
    likes?: Prisma.SortOrder;
    public?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    members?: Prisma.UserProjectsOrderByRelationAggregateInput;
    creator?: Prisma.UserOrderByWithRelationInput;
    joinRequests?: Prisma.JoinRequestOrderByRelationAggregateInput;
};
export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ProjectWhereInput | Prisma.ProjectWhereInput[];
    OR?: Prisma.ProjectWhereInput[];
    NOT?: Prisma.ProjectWhereInput | Prisma.ProjectWhereInput[];
    title?: Prisma.StringFilter<"Project"> | string;
    description?: Prisma.StringFilter<"Project"> | string;
    creatorId?: Prisma.IntFilter<"Project"> | number;
    tags?: Prisma.StringNullableListFilter<"Project">;
    likes?: Prisma.IntFilter<"Project"> | number;
    public?: Prisma.BoolFilter<"Project"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Project"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Project"> | Date | string;
    members?: Prisma.UserProjectsListRelationFilter;
    creator?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    joinRequests?: Prisma.JoinRequestListRelationFilter;
}, "id">;
export type ProjectOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    creatorId?: Prisma.SortOrder;
    tags?: Prisma.SortOrder;
    likes?: Prisma.SortOrder;
    public?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ProjectCountOrderByAggregateInput;
    _avg?: Prisma.ProjectAvgOrderByAggregateInput;
    _max?: Prisma.ProjectMaxOrderByAggregateInput;
    _min?: Prisma.ProjectMinOrderByAggregateInput;
    _sum?: Prisma.ProjectSumOrderByAggregateInput;
};
export type ProjectScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProjectScalarWhereWithAggregatesInput | Prisma.ProjectScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProjectScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProjectScalarWhereWithAggregatesInput | Prisma.ProjectScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Project"> | number;
    title?: Prisma.StringWithAggregatesFilter<"Project"> | string;
    description?: Prisma.StringWithAggregatesFilter<"Project"> | string;
    creatorId?: Prisma.IntWithAggregatesFilter<"Project"> | number;
    tags?: Prisma.StringNullableListFilter<"Project">;
    likes?: Prisma.IntWithAggregatesFilter<"Project"> | number;
    public?: Prisma.BoolWithAggregatesFilter<"Project"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Project"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Project"> | Date | string;
};
export type ProjectCreateInput = {
    title: string;
    description: string;
    tags?: Prisma.ProjectCreatetagsInput | string[];
    likes?: number;
    public?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: Prisma.UserProjectsCreateNestedManyWithoutProjectInput;
    creator: Prisma.UserCreateNestedOneWithoutCreatedProjectsInput;
    joinRequests?: Prisma.JoinRequestCreateNestedManyWithoutProjectInput;
};
export type ProjectUncheckedCreateInput = {
    id?: number;
    title: string;
    description: string;
    creatorId: number;
    tags?: Prisma.ProjectCreatetagsInput | string[];
    likes?: number;
    public?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: Prisma.UserProjectsUncheckedCreateNestedManyWithoutProjectInput;
    joinRequests?: Prisma.JoinRequestUncheckedCreateNestedManyWithoutProjectInput;
};
export type ProjectUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.ProjectUpdatetagsInput | string[];
    likes?: Prisma.IntFieldUpdateOperationsInput | number;
    public?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.UserProjectsUpdateManyWithoutProjectNestedInput;
    creator?: Prisma.UserUpdateOneRequiredWithoutCreatedProjectsNestedInput;
    joinRequests?: Prisma.JoinRequestUpdateManyWithoutProjectNestedInput;
};
export type ProjectUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    creatorId?: Prisma.IntFieldUpdateOperationsInput | number;
    tags?: Prisma.ProjectUpdatetagsInput | string[];
    likes?: Prisma.IntFieldUpdateOperationsInput | number;
    public?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.UserProjectsUncheckedUpdateManyWithoutProjectNestedInput;
    joinRequests?: Prisma.JoinRequestUncheckedUpdateManyWithoutProjectNestedInput;
};
export type ProjectCreateManyInput = {
    id?: number;
    title: string;
    description: string;
    creatorId: number;
    tags?: Prisma.ProjectCreatetagsInput | string[];
    likes?: number;
    public?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProjectUpdateManyMutationInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.ProjectUpdatetagsInput | string[];
    likes?: Prisma.IntFieldUpdateOperationsInput | number;
    public?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProjectUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    creatorId?: Prisma.IntFieldUpdateOperationsInput | number;
    tags?: Prisma.ProjectUpdatetagsInput | string[];
    likes?: Prisma.IntFieldUpdateOperationsInput | number;
    public?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProjectListRelationFilter = {
    every?: Prisma.ProjectWhereInput;
    some?: Prisma.ProjectWhereInput;
    none?: Prisma.ProjectWhereInput;
};
export type ProjectOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type ProjectCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    creatorId?: Prisma.SortOrder;
    tags?: Prisma.SortOrder;
    likes?: Prisma.SortOrder;
    public?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProjectAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    creatorId?: Prisma.SortOrder;
    likes?: Prisma.SortOrder;
};
export type ProjectMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    creatorId?: Prisma.SortOrder;
    likes?: Prisma.SortOrder;
    public?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProjectMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    creatorId?: Prisma.SortOrder;
    likes?: Prisma.SortOrder;
    public?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProjectSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    creatorId?: Prisma.SortOrder;
    likes?: Prisma.SortOrder;
};
export type ProjectScalarRelationFilter = {
    is?: Prisma.ProjectWhereInput;
    isNot?: Prisma.ProjectWhereInput;
};
export type ProjectCreateNestedManyWithoutCreatorInput = {
    create?: Prisma.XOR<Prisma.ProjectCreateWithoutCreatorInput, Prisma.ProjectUncheckedCreateWithoutCreatorInput> | Prisma.ProjectCreateWithoutCreatorInput[] | Prisma.ProjectUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.ProjectCreateOrConnectWithoutCreatorInput | Prisma.ProjectCreateOrConnectWithoutCreatorInput[];
    createMany?: Prisma.ProjectCreateManyCreatorInputEnvelope;
    connect?: Prisma.ProjectWhereUniqueInput | Prisma.ProjectWhereUniqueInput[];
};
export type ProjectUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: Prisma.XOR<Prisma.ProjectCreateWithoutCreatorInput, Prisma.ProjectUncheckedCreateWithoutCreatorInput> | Prisma.ProjectCreateWithoutCreatorInput[] | Prisma.ProjectUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.ProjectCreateOrConnectWithoutCreatorInput | Prisma.ProjectCreateOrConnectWithoutCreatorInput[];
    createMany?: Prisma.ProjectCreateManyCreatorInputEnvelope;
    connect?: Prisma.ProjectWhereUniqueInput | Prisma.ProjectWhereUniqueInput[];
};
export type ProjectUpdateManyWithoutCreatorNestedInput = {
    create?: Prisma.XOR<Prisma.ProjectCreateWithoutCreatorInput, Prisma.ProjectUncheckedCreateWithoutCreatorInput> | Prisma.ProjectCreateWithoutCreatorInput[] | Prisma.ProjectUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.ProjectCreateOrConnectWithoutCreatorInput | Prisma.ProjectCreateOrConnectWithoutCreatorInput[];
    upsert?: Prisma.ProjectUpsertWithWhereUniqueWithoutCreatorInput | Prisma.ProjectUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: Prisma.ProjectCreateManyCreatorInputEnvelope;
    set?: Prisma.ProjectWhereUniqueInput | Prisma.ProjectWhereUniqueInput[];
    disconnect?: Prisma.ProjectWhereUniqueInput | Prisma.ProjectWhereUniqueInput[];
    delete?: Prisma.ProjectWhereUniqueInput | Prisma.ProjectWhereUniqueInput[];
    connect?: Prisma.ProjectWhereUniqueInput | Prisma.ProjectWhereUniqueInput[];
    update?: Prisma.ProjectUpdateWithWhereUniqueWithoutCreatorInput | Prisma.ProjectUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?: Prisma.ProjectUpdateManyWithWhereWithoutCreatorInput | Prisma.ProjectUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: Prisma.ProjectScalarWhereInput | Prisma.ProjectScalarWhereInput[];
};
export type ProjectUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: Prisma.XOR<Prisma.ProjectCreateWithoutCreatorInput, Prisma.ProjectUncheckedCreateWithoutCreatorInput> | Prisma.ProjectCreateWithoutCreatorInput[] | Prisma.ProjectUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.ProjectCreateOrConnectWithoutCreatorInput | Prisma.ProjectCreateOrConnectWithoutCreatorInput[];
    upsert?: Prisma.ProjectUpsertWithWhereUniqueWithoutCreatorInput | Prisma.ProjectUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: Prisma.ProjectCreateManyCreatorInputEnvelope;
    set?: Prisma.ProjectWhereUniqueInput | Prisma.ProjectWhereUniqueInput[];
    disconnect?: Prisma.ProjectWhereUniqueInput | Prisma.ProjectWhereUniqueInput[];
    delete?: Prisma.ProjectWhereUniqueInput | Prisma.ProjectWhereUniqueInput[];
    connect?: Prisma.ProjectWhereUniqueInput | Prisma.ProjectWhereUniqueInput[];
    update?: Prisma.ProjectUpdateWithWhereUniqueWithoutCreatorInput | Prisma.ProjectUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?: Prisma.ProjectUpdateManyWithWhereWithoutCreatorInput | Prisma.ProjectUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: Prisma.ProjectScalarWhereInput | Prisma.ProjectScalarWhereInput[];
};
export type ProjectCreatetagsInput = {
    set: string[];
};
export type ProjectUpdatetagsInput = {
    set?: string[];
    push?: string | string[];
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type ProjectCreateNestedOneWithoutMembersInput = {
    create?: Prisma.XOR<Prisma.ProjectCreateWithoutMembersInput, Prisma.ProjectUncheckedCreateWithoutMembersInput>;
    connectOrCreate?: Prisma.ProjectCreateOrConnectWithoutMembersInput;
    connect?: Prisma.ProjectWhereUniqueInput;
};
export type ProjectUpdateOneRequiredWithoutMembersNestedInput = {
    create?: Prisma.XOR<Prisma.ProjectCreateWithoutMembersInput, Prisma.ProjectUncheckedCreateWithoutMembersInput>;
    connectOrCreate?: Prisma.ProjectCreateOrConnectWithoutMembersInput;
    upsert?: Prisma.ProjectUpsertWithoutMembersInput;
    connect?: Prisma.ProjectWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProjectUpdateToOneWithWhereWithoutMembersInput, Prisma.ProjectUpdateWithoutMembersInput>, Prisma.ProjectUncheckedUpdateWithoutMembersInput>;
};
export type ProjectCreateNestedOneWithoutJoinRequestsInput = {
    create?: Prisma.XOR<Prisma.ProjectCreateWithoutJoinRequestsInput, Prisma.ProjectUncheckedCreateWithoutJoinRequestsInput>;
    connectOrCreate?: Prisma.ProjectCreateOrConnectWithoutJoinRequestsInput;
    connect?: Prisma.ProjectWhereUniqueInput;
};
export type ProjectUpdateOneRequiredWithoutJoinRequestsNestedInput = {
    create?: Prisma.XOR<Prisma.ProjectCreateWithoutJoinRequestsInput, Prisma.ProjectUncheckedCreateWithoutJoinRequestsInput>;
    connectOrCreate?: Prisma.ProjectCreateOrConnectWithoutJoinRequestsInput;
    upsert?: Prisma.ProjectUpsertWithoutJoinRequestsInput;
    connect?: Prisma.ProjectWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProjectUpdateToOneWithWhereWithoutJoinRequestsInput, Prisma.ProjectUpdateWithoutJoinRequestsInput>, Prisma.ProjectUncheckedUpdateWithoutJoinRequestsInput>;
};
export type ProjectCreateWithoutCreatorInput = {
    title: string;
    description: string;
    tags?: Prisma.ProjectCreatetagsInput | string[];
    likes?: number;
    public?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: Prisma.UserProjectsCreateNestedManyWithoutProjectInput;
    joinRequests?: Prisma.JoinRequestCreateNestedManyWithoutProjectInput;
};
export type ProjectUncheckedCreateWithoutCreatorInput = {
    id?: number;
    title: string;
    description: string;
    tags?: Prisma.ProjectCreatetagsInput | string[];
    likes?: number;
    public?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: Prisma.UserProjectsUncheckedCreateNestedManyWithoutProjectInput;
    joinRequests?: Prisma.JoinRequestUncheckedCreateNestedManyWithoutProjectInput;
};
export type ProjectCreateOrConnectWithoutCreatorInput = {
    where: Prisma.ProjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProjectCreateWithoutCreatorInput, Prisma.ProjectUncheckedCreateWithoutCreatorInput>;
};
export type ProjectCreateManyCreatorInputEnvelope = {
    data: Prisma.ProjectCreateManyCreatorInput | Prisma.ProjectCreateManyCreatorInput[];
    skipDuplicates?: boolean;
};
export type ProjectUpsertWithWhereUniqueWithoutCreatorInput = {
    where: Prisma.ProjectWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProjectUpdateWithoutCreatorInput, Prisma.ProjectUncheckedUpdateWithoutCreatorInput>;
    create: Prisma.XOR<Prisma.ProjectCreateWithoutCreatorInput, Prisma.ProjectUncheckedCreateWithoutCreatorInput>;
};
export type ProjectUpdateWithWhereUniqueWithoutCreatorInput = {
    where: Prisma.ProjectWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProjectUpdateWithoutCreatorInput, Prisma.ProjectUncheckedUpdateWithoutCreatorInput>;
};
export type ProjectUpdateManyWithWhereWithoutCreatorInput = {
    where: Prisma.ProjectScalarWhereInput;
    data: Prisma.XOR<Prisma.ProjectUpdateManyMutationInput, Prisma.ProjectUncheckedUpdateManyWithoutCreatorInput>;
};
export type ProjectScalarWhereInput = {
    AND?: Prisma.ProjectScalarWhereInput | Prisma.ProjectScalarWhereInput[];
    OR?: Prisma.ProjectScalarWhereInput[];
    NOT?: Prisma.ProjectScalarWhereInput | Prisma.ProjectScalarWhereInput[];
    id?: Prisma.IntFilter<"Project"> | number;
    title?: Prisma.StringFilter<"Project"> | string;
    description?: Prisma.StringFilter<"Project"> | string;
    creatorId?: Prisma.IntFilter<"Project"> | number;
    tags?: Prisma.StringNullableListFilter<"Project">;
    likes?: Prisma.IntFilter<"Project"> | number;
    public?: Prisma.BoolFilter<"Project"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Project"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Project"> | Date | string;
};
export type ProjectCreateWithoutMembersInput = {
    title: string;
    description: string;
    tags?: Prisma.ProjectCreatetagsInput | string[];
    likes?: number;
    public?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    creator: Prisma.UserCreateNestedOneWithoutCreatedProjectsInput;
    joinRequests?: Prisma.JoinRequestCreateNestedManyWithoutProjectInput;
};
export type ProjectUncheckedCreateWithoutMembersInput = {
    id?: number;
    title: string;
    description: string;
    creatorId: number;
    tags?: Prisma.ProjectCreatetagsInput | string[];
    likes?: number;
    public?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    joinRequests?: Prisma.JoinRequestUncheckedCreateNestedManyWithoutProjectInput;
};
export type ProjectCreateOrConnectWithoutMembersInput = {
    where: Prisma.ProjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProjectCreateWithoutMembersInput, Prisma.ProjectUncheckedCreateWithoutMembersInput>;
};
export type ProjectUpsertWithoutMembersInput = {
    update: Prisma.XOR<Prisma.ProjectUpdateWithoutMembersInput, Prisma.ProjectUncheckedUpdateWithoutMembersInput>;
    create: Prisma.XOR<Prisma.ProjectCreateWithoutMembersInput, Prisma.ProjectUncheckedCreateWithoutMembersInput>;
    where?: Prisma.ProjectWhereInput;
};
export type ProjectUpdateToOneWithWhereWithoutMembersInput = {
    where?: Prisma.ProjectWhereInput;
    data: Prisma.XOR<Prisma.ProjectUpdateWithoutMembersInput, Prisma.ProjectUncheckedUpdateWithoutMembersInput>;
};
export type ProjectUpdateWithoutMembersInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.ProjectUpdatetagsInput | string[];
    likes?: Prisma.IntFieldUpdateOperationsInput | number;
    public?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creator?: Prisma.UserUpdateOneRequiredWithoutCreatedProjectsNestedInput;
    joinRequests?: Prisma.JoinRequestUpdateManyWithoutProjectNestedInput;
};
export type ProjectUncheckedUpdateWithoutMembersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    creatorId?: Prisma.IntFieldUpdateOperationsInput | number;
    tags?: Prisma.ProjectUpdatetagsInput | string[];
    likes?: Prisma.IntFieldUpdateOperationsInput | number;
    public?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    joinRequests?: Prisma.JoinRequestUncheckedUpdateManyWithoutProjectNestedInput;
};
export type ProjectCreateWithoutJoinRequestsInput = {
    title: string;
    description: string;
    tags?: Prisma.ProjectCreatetagsInput | string[];
    likes?: number;
    public?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: Prisma.UserProjectsCreateNestedManyWithoutProjectInput;
    creator: Prisma.UserCreateNestedOneWithoutCreatedProjectsInput;
};
export type ProjectUncheckedCreateWithoutJoinRequestsInput = {
    id?: number;
    title: string;
    description: string;
    creatorId: number;
    tags?: Prisma.ProjectCreatetagsInput | string[];
    likes?: number;
    public?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: Prisma.UserProjectsUncheckedCreateNestedManyWithoutProjectInput;
};
export type ProjectCreateOrConnectWithoutJoinRequestsInput = {
    where: Prisma.ProjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProjectCreateWithoutJoinRequestsInput, Prisma.ProjectUncheckedCreateWithoutJoinRequestsInput>;
};
export type ProjectUpsertWithoutJoinRequestsInput = {
    update: Prisma.XOR<Prisma.ProjectUpdateWithoutJoinRequestsInput, Prisma.ProjectUncheckedUpdateWithoutJoinRequestsInput>;
    create: Prisma.XOR<Prisma.ProjectCreateWithoutJoinRequestsInput, Prisma.ProjectUncheckedCreateWithoutJoinRequestsInput>;
    where?: Prisma.ProjectWhereInput;
};
export type ProjectUpdateToOneWithWhereWithoutJoinRequestsInput = {
    where?: Prisma.ProjectWhereInput;
    data: Prisma.XOR<Prisma.ProjectUpdateWithoutJoinRequestsInput, Prisma.ProjectUncheckedUpdateWithoutJoinRequestsInput>;
};
export type ProjectUpdateWithoutJoinRequestsInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.ProjectUpdatetagsInput | string[];
    likes?: Prisma.IntFieldUpdateOperationsInput | number;
    public?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.UserProjectsUpdateManyWithoutProjectNestedInput;
    creator?: Prisma.UserUpdateOneRequiredWithoutCreatedProjectsNestedInput;
};
export type ProjectUncheckedUpdateWithoutJoinRequestsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    creatorId?: Prisma.IntFieldUpdateOperationsInput | number;
    tags?: Prisma.ProjectUpdatetagsInput | string[];
    likes?: Prisma.IntFieldUpdateOperationsInput | number;
    public?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.UserProjectsUncheckedUpdateManyWithoutProjectNestedInput;
};
export type ProjectCreateManyCreatorInput = {
    id?: number;
    title: string;
    description: string;
    tags?: Prisma.ProjectCreatetagsInput | string[];
    likes?: number;
    public?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProjectUpdateWithoutCreatorInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.ProjectUpdatetagsInput | string[];
    likes?: Prisma.IntFieldUpdateOperationsInput | number;
    public?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.UserProjectsUpdateManyWithoutProjectNestedInput;
    joinRequests?: Prisma.JoinRequestUpdateManyWithoutProjectNestedInput;
};
export type ProjectUncheckedUpdateWithoutCreatorInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.ProjectUpdatetagsInput | string[];
    likes?: Prisma.IntFieldUpdateOperationsInput | number;
    public?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.UserProjectsUncheckedUpdateManyWithoutProjectNestedInput;
    joinRequests?: Prisma.JoinRequestUncheckedUpdateManyWithoutProjectNestedInput;
};
export type ProjectUncheckedUpdateManyWithoutCreatorInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.ProjectUpdatetagsInput | string[];
    likes?: Prisma.IntFieldUpdateOperationsInput | number;
    public?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProjectCountOutputType = {
    members: number;
    joinRequests: number;
};
export type ProjectCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    members?: boolean | ProjectCountOutputTypeCountMembersArgs;
    joinRequests?: boolean | ProjectCountOutputTypeCountJoinRequestsArgs;
};
export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectCountOutputTypeSelect<ExtArgs> | null;
};
export type ProjectCountOutputTypeCountMembersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserProjectsWhereInput;
};
export type ProjectCountOutputTypeCountJoinRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JoinRequestWhereInput;
};
export type ProjectSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    creatorId?: boolean;
    tags?: boolean;
    likes?: boolean;
    public?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    members?: boolean | Prisma.Project$membersArgs<ExtArgs>;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    joinRequests?: boolean | Prisma.Project$joinRequestsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProjectCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["project"]>;
export type ProjectSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    creatorId?: boolean;
    tags?: boolean;
    likes?: boolean;
    public?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["project"]>;
export type ProjectSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    creatorId?: boolean;
    tags?: boolean;
    likes?: boolean;
    public?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["project"]>;
export type ProjectSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    creatorId?: boolean;
    tags?: boolean;
    likes?: boolean;
    public?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ProjectOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "description" | "creatorId" | "tags" | "likes" | "public" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>;
export type ProjectInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    members?: boolean | Prisma.Project$membersArgs<ExtArgs>;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    joinRequests?: boolean | Prisma.Project$joinRequestsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProjectCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProjectIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ProjectPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Project";
    objects: {
        members: Prisma.$UserProjectsPayload<ExtArgs>[];
        creator: Prisma.$UserPayload<ExtArgs>;
        joinRequests: Prisma.$JoinRequestPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        title: string;
        description: string;
        creatorId: number;
        tags: string[];
        likes: number;
        public: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["project"]>;
    composites: {};
};
export type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProjectPayload, S>;
export type ProjectCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProjectCountAggregateInputType | true;
};
export interface ProjectDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Project'];
        meta: {
            name: 'Project';
        };
    };
    findUnique<T extends ProjectFindUniqueArgs>(args: Prisma.SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProjectFindFirstArgs>(args?: Prisma.SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProjectFindManyArgs>(args?: Prisma.SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProjectCreateArgs>(args: Prisma.SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProjectCreateManyArgs>(args?: Prisma.SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProjectDeleteArgs>(args: Prisma.SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProjectUpdateArgs>(args: Prisma.SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProjectDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProjectUpdateManyArgs>(args: Prisma.SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProjectUpsertArgs>(args: Prisma.SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProjectCountArgs>(args?: Prisma.Subset<T, ProjectCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProjectCountAggregateOutputType> : number>;
    aggregate<T extends ProjectAggregateArgs>(args: Prisma.Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>;
    groupBy<T extends ProjectGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProjectGroupByArgs['orderBy'];
    } : {
        orderBy?: ProjectGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProjectFieldRefs;
}
export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    members<T extends Prisma.Project$membersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Project$membersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserProjectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    creator<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    joinRequests<T extends Prisma.Project$joinRequestsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Project$joinRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProjectFieldRefs {
    readonly id: Prisma.FieldRef<"Project", 'Int'>;
    readonly title: Prisma.FieldRef<"Project", 'String'>;
    readonly description: Prisma.FieldRef<"Project", 'String'>;
    readonly creatorId: Prisma.FieldRef<"Project", 'Int'>;
    readonly tags: Prisma.FieldRef<"Project", 'String[]'>;
    readonly likes: Prisma.FieldRef<"Project", 'Int'>;
    readonly public: Prisma.FieldRef<"Project", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Project", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Project", 'DateTime'>;
}
export type ProjectFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSelect<ExtArgs> | null;
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    include?: Prisma.ProjectInclude<ExtArgs> | null;
    where: Prisma.ProjectWhereUniqueInput;
};
export type ProjectFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSelect<ExtArgs> | null;
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    include?: Prisma.ProjectInclude<ExtArgs> | null;
    where: Prisma.ProjectWhereUniqueInput;
};
export type ProjectFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSelect<ExtArgs> | null;
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    include?: Prisma.ProjectInclude<ExtArgs> | null;
    where?: Prisma.ProjectWhereInput;
    orderBy?: Prisma.ProjectOrderByWithRelationInput | Prisma.ProjectOrderByWithRelationInput[];
    cursor?: Prisma.ProjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProjectScalarFieldEnum | Prisma.ProjectScalarFieldEnum[];
};
export type ProjectFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSelect<ExtArgs> | null;
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    include?: Prisma.ProjectInclude<ExtArgs> | null;
    where?: Prisma.ProjectWhereInput;
    orderBy?: Prisma.ProjectOrderByWithRelationInput | Prisma.ProjectOrderByWithRelationInput[];
    cursor?: Prisma.ProjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProjectScalarFieldEnum | Prisma.ProjectScalarFieldEnum[];
};
export type ProjectFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSelect<ExtArgs> | null;
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    include?: Prisma.ProjectInclude<ExtArgs> | null;
    where?: Prisma.ProjectWhereInput;
    orderBy?: Prisma.ProjectOrderByWithRelationInput | Prisma.ProjectOrderByWithRelationInput[];
    cursor?: Prisma.ProjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProjectScalarFieldEnum | Prisma.ProjectScalarFieldEnum[];
};
export type ProjectCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSelect<ExtArgs> | null;
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    include?: Prisma.ProjectInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProjectCreateInput, Prisma.ProjectUncheckedCreateInput>;
};
export type ProjectCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProjectCreateManyInput | Prisma.ProjectCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProjectCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    data: Prisma.ProjectCreateManyInput | Prisma.ProjectCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProjectIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProjectUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSelect<ExtArgs> | null;
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    include?: Prisma.ProjectInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProjectUpdateInput, Prisma.ProjectUncheckedUpdateInput>;
    where: Prisma.ProjectWhereUniqueInput;
};
export type ProjectUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProjectUpdateManyMutationInput, Prisma.ProjectUncheckedUpdateManyInput>;
    where?: Prisma.ProjectWhereInput;
    limit?: number;
};
export type ProjectUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProjectUpdateManyMutationInput, Prisma.ProjectUncheckedUpdateManyInput>;
    where?: Prisma.ProjectWhereInput;
    limit?: number;
    include?: Prisma.ProjectIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProjectUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSelect<ExtArgs> | null;
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    include?: Prisma.ProjectInclude<ExtArgs> | null;
    where: Prisma.ProjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProjectCreateInput, Prisma.ProjectUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProjectUpdateInput, Prisma.ProjectUncheckedUpdateInput>;
};
export type ProjectDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSelect<ExtArgs> | null;
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    include?: Prisma.ProjectInclude<ExtArgs> | null;
    where: Prisma.ProjectWhereUniqueInput;
};
export type ProjectDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProjectWhereInput;
    limit?: number;
};
export type Project$membersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Project$joinRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JoinRequestSelect<ExtArgs> | null;
    omit?: Prisma.JoinRequestOmit<ExtArgs> | null;
    include?: Prisma.JoinRequestInclude<ExtArgs> | null;
    where?: Prisma.JoinRequestWhereInput;
    orderBy?: Prisma.JoinRequestOrderByWithRelationInput | Prisma.JoinRequestOrderByWithRelationInput[];
    cursor?: Prisma.JoinRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.JoinRequestScalarFieldEnum | Prisma.JoinRequestScalarFieldEnum[];
};
export type ProjectDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSelect<ExtArgs> | null;
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    include?: Prisma.ProjectInclude<ExtArgs> | null;
};
