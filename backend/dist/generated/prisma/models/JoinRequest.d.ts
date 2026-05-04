import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type JoinRequestModel = runtime.Types.Result.DefaultSelection<Prisma.$JoinRequestPayload>;
export type AggregateJoinRequest = {
    _count: JoinRequestCountAggregateOutputType | null;
    _avg: JoinRequestAvgAggregateOutputType | null;
    _sum: JoinRequestSumAggregateOutputType | null;
    _min: JoinRequestMinAggregateOutputType | null;
    _max: JoinRequestMaxAggregateOutputType | null;
};
export type JoinRequestAvgAggregateOutputType = {
    id: number | null;
    projectId: number | null;
    userId: number | null;
};
export type JoinRequestSumAggregateOutputType = {
    id: number | null;
    projectId: number | null;
    userId: number | null;
};
export type JoinRequestMinAggregateOutputType = {
    id: number | null;
    projectId: number | null;
    userId: number | null;
    status: $Enums.Status | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type JoinRequestMaxAggregateOutputType = {
    id: number | null;
    projectId: number | null;
    userId: number | null;
    status: $Enums.Status | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type JoinRequestCountAggregateOutputType = {
    id: number;
    projectId: number;
    userId: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type JoinRequestAvgAggregateInputType = {
    id?: true;
    projectId?: true;
    userId?: true;
};
export type JoinRequestSumAggregateInputType = {
    id?: true;
    projectId?: true;
    userId?: true;
};
export type JoinRequestMinAggregateInputType = {
    id?: true;
    projectId?: true;
    userId?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type JoinRequestMaxAggregateInputType = {
    id?: true;
    projectId?: true;
    userId?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type JoinRequestCountAggregateInputType = {
    id?: true;
    projectId?: true;
    userId?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type JoinRequestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JoinRequestWhereInput;
    orderBy?: Prisma.JoinRequestOrderByWithRelationInput | Prisma.JoinRequestOrderByWithRelationInput[];
    cursor?: Prisma.JoinRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | JoinRequestCountAggregateInputType;
    _avg?: JoinRequestAvgAggregateInputType;
    _sum?: JoinRequestSumAggregateInputType;
    _min?: JoinRequestMinAggregateInputType;
    _max?: JoinRequestMaxAggregateInputType;
};
export type GetJoinRequestAggregateType<T extends JoinRequestAggregateArgs> = {
    [P in keyof T & keyof AggregateJoinRequest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateJoinRequest[P]> : Prisma.GetScalarType<T[P], AggregateJoinRequest[P]>;
};
export type JoinRequestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JoinRequestWhereInput;
    orderBy?: Prisma.JoinRequestOrderByWithAggregationInput | Prisma.JoinRequestOrderByWithAggregationInput[];
    by: Prisma.JoinRequestScalarFieldEnum[] | Prisma.JoinRequestScalarFieldEnum;
    having?: Prisma.JoinRequestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: JoinRequestCountAggregateInputType | true;
    _avg?: JoinRequestAvgAggregateInputType;
    _sum?: JoinRequestSumAggregateInputType;
    _min?: JoinRequestMinAggregateInputType;
    _max?: JoinRequestMaxAggregateInputType;
};
export type JoinRequestGroupByOutputType = {
    id: number;
    projectId: number;
    userId: number;
    status: $Enums.Status;
    createdAt: Date;
    updatedAt: Date;
    _count: JoinRequestCountAggregateOutputType | null;
    _avg: JoinRequestAvgAggregateOutputType | null;
    _sum: JoinRequestSumAggregateOutputType | null;
    _min: JoinRequestMinAggregateOutputType | null;
    _max: JoinRequestMaxAggregateOutputType | null;
};
export type GetJoinRequestGroupByPayload<T extends JoinRequestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<JoinRequestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof JoinRequestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], JoinRequestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], JoinRequestGroupByOutputType[P]>;
}>>;
export type JoinRequestWhereInput = {
    AND?: Prisma.JoinRequestWhereInput | Prisma.JoinRequestWhereInput[];
    OR?: Prisma.JoinRequestWhereInput[];
    NOT?: Prisma.JoinRequestWhereInput | Prisma.JoinRequestWhereInput[];
    id?: Prisma.IntFilter<"JoinRequest"> | number;
    projectId?: Prisma.IntFilter<"JoinRequest"> | number;
    userId?: Prisma.IntFilter<"JoinRequest"> | number;
    status?: Prisma.EnumStatusFilter<"JoinRequest"> | $Enums.Status;
    createdAt?: Prisma.DateTimeFilter<"JoinRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"JoinRequest"> | Date | string;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type JoinRequestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    project?: Prisma.ProjectOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type JoinRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.JoinRequestWhereInput | Prisma.JoinRequestWhereInput[];
    OR?: Prisma.JoinRequestWhereInput[];
    NOT?: Prisma.JoinRequestWhereInput | Prisma.JoinRequestWhereInput[];
    projectId?: Prisma.IntFilter<"JoinRequest"> | number;
    userId?: Prisma.IntFilter<"JoinRequest"> | number;
    status?: Prisma.EnumStatusFilter<"JoinRequest"> | $Enums.Status;
    createdAt?: Prisma.DateTimeFilter<"JoinRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"JoinRequest"> | Date | string;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type JoinRequestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.JoinRequestCountOrderByAggregateInput;
    _avg?: Prisma.JoinRequestAvgOrderByAggregateInput;
    _max?: Prisma.JoinRequestMaxOrderByAggregateInput;
    _min?: Prisma.JoinRequestMinOrderByAggregateInput;
    _sum?: Prisma.JoinRequestSumOrderByAggregateInput;
};
export type JoinRequestScalarWhereWithAggregatesInput = {
    AND?: Prisma.JoinRequestScalarWhereWithAggregatesInput | Prisma.JoinRequestScalarWhereWithAggregatesInput[];
    OR?: Prisma.JoinRequestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.JoinRequestScalarWhereWithAggregatesInput | Prisma.JoinRequestScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"JoinRequest"> | number;
    projectId?: Prisma.IntWithAggregatesFilter<"JoinRequest"> | number;
    userId?: Prisma.IntWithAggregatesFilter<"JoinRequest"> | number;
    status?: Prisma.EnumStatusWithAggregatesFilter<"JoinRequest"> | $Enums.Status;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"JoinRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"JoinRequest"> | Date | string;
};
export type JoinRequestCreateInput = {
    status?: $Enums.Status;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutJoinRequestsInput;
    user: Prisma.UserCreateNestedOneWithoutJoinRequestsInput;
};
export type JoinRequestUncheckedCreateInput = {
    id?: number;
    projectId: number;
    userId: number;
    status?: $Enums.Status;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type JoinRequestUpdateInput = {
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutJoinRequestsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutJoinRequestsNestedInput;
};
export type JoinRequestUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    projectId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JoinRequestCreateManyInput = {
    id?: number;
    projectId: number;
    userId: number;
    status?: $Enums.Status;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type JoinRequestUpdateManyMutationInput = {
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JoinRequestUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    projectId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JoinRequestListRelationFilter = {
    every?: Prisma.JoinRequestWhereInput;
    some?: Prisma.JoinRequestWhereInput;
    none?: Prisma.JoinRequestWhereInput;
};
export type JoinRequestOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type JoinRequestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type JoinRequestAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type JoinRequestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type JoinRequestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type JoinRequestSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type JoinRequestCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.JoinRequestCreateWithoutUserInput, Prisma.JoinRequestUncheckedCreateWithoutUserInput> | Prisma.JoinRequestCreateWithoutUserInput[] | Prisma.JoinRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.JoinRequestCreateOrConnectWithoutUserInput | Prisma.JoinRequestCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.JoinRequestCreateManyUserInputEnvelope;
    connect?: Prisma.JoinRequestWhereUniqueInput | Prisma.JoinRequestWhereUniqueInput[];
};
export type JoinRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.JoinRequestCreateWithoutUserInput, Prisma.JoinRequestUncheckedCreateWithoutUserInput> | Prisma.JoinRequestCreateWithoutUserInput[] | Prisma.JoinRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.JoinRequestCreateOrConnectWithoutUserInput | Prisma.JoinRequestCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.JoinRequestCreateManyUserInputEnvelope;
    connect?: Prisma.JoinRequestWhereUniqueInput | Prisma.JoinRequestWhereUniqueInput[];
};
export type JoinRequestUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.JoinRequestCreateWithoutUserInput, Prisma.JoinRequestUncheckedCreateWithoutUserInput> | Prisma.JoinRequestCreateWithoutUserInput[] | Prisma.JoinRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.JoinRequestCreateOrConnectWithoutUserInput | Prisma.JoinRequestCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.JoinRequestUpsertWithWhereUniqueWithoutUserInput | Prisma.JoinRequestUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.JoinRequestCreateManyUserInputEnvelope;
    set?: Prisma.JoinRequestWhereUniqueInput | Prisma.JoinRequestWhereUniqueInput[];
    disconnect?: Prisma.JoinRequestWhereUniqueInput | Prisma.JoinRequestWhereUniqueInput[];
    delete?: Prisma.JoinRequestWhereUniqueInput | Prisma.JoinRequestWhereUniqueInput[];
    connect?: Prisma.JoinRequestWhereUniqueInput | Prisma.JoinRequestWhereUniqueInput[];
    update?: Prisma.JoinRequestUpdateWithWhereUniqueWithoutUserInput | Prisma.JoinRequestUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.JoinRequestUpdateManyWithWhereWithoutUserInput | Prisma.JoinRequestUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.JoinRequestScalarWhereInput | Prisma.JoinRequestScalarWhereInput[];
};
export type JoinRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.JoinRequestCreateWithoutUserInput, Prisma.JoinRequestUncheckedCreateWithoutUserInput> | Prisma.JoinRequestCreateWithoutUserInput[] | Prisma.JoinRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.JoinRequestCreateOrConnectWithoutUserInput | Prisma.JoinRequestCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.JoinRequestUpsertWithWhereUniqueWithoutUserInput | Prisma.JoinRequestUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.JoinRequestCreateManyUserInputEnvelope;
    set?: Prisma.JoinRequestWhereUniqueInput | Prisma.JoinRequestWhereUniqueInput[];
    disconnect?: Prisma.JoinRequestWhereUniqueInput | Prisma.JoinRequestWhereUniqueInput[];
    delete?: Prisma.JoinRequestWhereUniqueInput | Prisma.JoinRequestWhereUniqueInput[];
    connect?: Prisma.JoinRequestWhereUniqueInput | Prisma.JoinRequestWhereUniqueInput[];
    update?: Prisma.JoinRequestUpdateWithWhereUniqueWithoutUserInput | Prisma.JoinRequestUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.JoinRequestUpdateManyWithWhereWithoutUserInput | Prisma.JoinRequestUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.JoinRequestScalarWhereInput | Prisma.JoinRequestScalarWhereInput[];
};
export type JoinRequestCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.JoinRequestCreateWithoutProjectInput, Prisma.JoinRequestUncheckedCreateWithoutProjectInput> | Prisma.JoinRequestCreateWithoutProjectInput[] | Prisma.JoinRequestUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.JoinRequestCreateOrConnectWithoutProjectInput | Prisma.JoinRequestCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.JoinRequestCreateManyProjectInputEnvelope;
    connect?: Prisma.JoinRequestWhereUniqueInput | Prisma.JoinRequestWhereUniqueInput[];
};
export type JoinRequestUncheckedCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.JoinRequestCreateWithoutProjectInput, Prisma.JoinRequestUncheckedCreateWithoutProjectInput> | Prisma.JoinRequestCreateWithoutProjectInput[] | Prisma.JoinRequestUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.JoinRequestCreateOrConnectWithoutProjectInput | Prisma.JoinRequestCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.JoinRequestCreateManyProjectInputEnvelope;
    connect?: Prisma.JoinRequestWhereUniqueInput | Prisma.JoinRequestWhereUniqueInput[];
};
export type JoinRequestUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.JoinRequestCreateWithoutProjectInput, Prisma.JoinRequestUncheckedCreateWithoutProjectInput> | Prisma.JoinRequestCreateWithoutProjectInput[] | Prisma.JoinRequestUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.JoinRequestCreateOrConnectWithoutProjectInput | Prisma.JoinRequestCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.JoinRequestUpsertWithWhereUniqueWithoutProjectInput | Prisma.JoinRequestUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.JoinRequestCreateManyProjectInputEnvelope;
    set?: Prisma.JoinRequestWhereUniqueInput | Prisma.JoinRequestWhereUniqueInput[];
    disconnect?: Prisma.JoinRequestWhereUniqueInput | Prisma.JoinRequestWhereUniqueInput[];
    delete?: Prisma.JoinRequestWhereUniqueInput | Prisma.JoinRequestWhereUniqueInput[];
    connect?: Prisma.JoinRequestWhereUniqueInput | Prisma.JoinRequestWhereUniqueInput[];
    update?: Prisma.JoinRequestUpdateWithWhereUniqueWithoutProjectInput | Prisma.JoinRequestUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.JoinRequestUpdateManyWithWhereWithoutProjectInput | Prisma.JoinRequestUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.JoinRequestScalarWhereInput | Prisma.JoinRequestScalarWhereInput[];
};
export type JoinRequestUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.JoinRequestCreateWithoutProjectInput, Prisma.JoinRequestUncheckedCreateWithoutProjectInput> | Prisma.JoinRequestCreateWithoutProjectInput[] | Prisma.JoinRequestUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.JoinRequestCreateOrConnectWithoutProjectInput | Prisma.JoinRequestCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.JoinRequestUpsertWithWhereUniqueWithoutProjectInput | Prisma.JoinRequestUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.JoinRequestCreateManyProjectInputEnvelope;
    set?: Prisma.JoinRequestWhereUniqueInput | Prisma.JoinRequestWhereUniqueInput[];
    disconnect?: Prisma.JoinRequestWhereUniqueInput | Prisma.JoinRequestWhereUniqueInput[];
    delete?: Prisma.JoinRequestWhereUniqueInput | Prisma.JoinRequestWhereUniqueInput[];
    connect?: Prisma.JoinRequestWhereUniqueInput | Prisma.JoinRequestWhereUniqueInput[];
    update?: Prisma.JoinRequestUpdateWithWhereUniqueWithoutProjectInput | Prisma.JoinRequestUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.JoinRequestUpdateManyWithWhereWithoutProjectInput | Prisma.JoinRequestUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.JoinRequestScalarWhereInput | Prisma.JoinRequestScalarWhereInput[];
};
export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status;
};
export type JoinRequestCreateWithoutUserInput = {
    status?: $Enums.Status;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutJoinRequestsInput;
};
export type JoinRequestUncheckedCreateWithoutUserInput = {
    id?: number;
    projectId: number;
    status?: $Enums.Status;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type JoinRequestCreateOrConnectWithoutUserInput = {
    where: Prisma.JoinRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.JoinRequestCreateWithoutUserInput, Prisma.JoinRequestUncheckedCreateWithoutUserInput>;
};
export type JoinRequestCreateManyUserInputEnvelope = {
    data: Prisma.JoinRequestCreateManyUserInput | Prisma.JoinRequestCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type JoinRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.JoinRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.JoinRequestUpdateWithoutUserInput, Prisma.JoinRequestUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.JoinRequestCreateWithoutUserInput, Prisma.JoinRequestUncheckedCreateWithoutUserInput>;
};
export type JoinRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.JoinRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.JoinRequestUpdateWithoutUserInput, Prisma.JoinRequestUncheckedUpdateWithoutUserInput>;
};
export type JoinRequestUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.JoinRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.JoinRequestUpdateManyMutationInput, Prisma.JoinRequestUncheckedUpdateManyWithoutUserInput>;
};
export type JoinRequestScalarWhereInput = {
    AND?: Prisma.JoinRequestScalarWhereInput | Prisma.JoinRequestScalarWhereInput[];
    OR?: Prisma.JoinRequestScalarWhereInput[];
    NOT?: Prisma.JoinRequestScalarWhereInput | Prisma.JoinRequestScalarWhereInput[];
    id?: Prisma.IntFilter<"JoinRequest"> | number;
    projectId?: Prisma.IntFilter<"JoinRequest"> | number;
    userId?: Prisma.IntFilter<"JoinRequest"> | number;
    status?: Prisma.EnumStatusFilter<"JoinRequest"> | $Enums.Status;
    createdAt?: Prisma.DateTimeFilter<"JoinRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"JoinRequest"> | Date | string;
};
export type JoinRequestCreateWithoutProjectInput = {
    status?: $Enums.Status;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutJoinRequestsInput;
};
export type JoinRequestUncheckedCreateWithoutProjectInput = {
    id?: number;
    userId: number;
    status?: $Enums.Status;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type JoinRequestCreateOrConnectWithoutProjectInput = {
    where: Prisma.JoinRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.JoinRequestCreateWithoutProjectInput, Prisma.JoinRequestUncheckedCreateWithoutProjectInput>;
};
export type JoinRequestCreateManyProjectInputEnvelope = {
    data: Prisma.JoinRequestCreateManyProjectInput | Prisma.JoinRequestCreateManyProjectInput[];
    skipDuplicates?: boolean;
};
export type JoinRequestUpsertWithWhereUniqueWithoutProjectInput = {
    where: Prisma.JoinRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.JoinRequestUpdateWithoutProjectInput, Prisma.JoinRequestUncheckedUpdateWithoutProjectInput>;
    create: Prisma.XOR<Prisma.JoinRequestCreateWithoutProjectInput, Prisma.JoinRequestUncheckedCreateWithoutProjectInput>;
};
export type JoinRequestUpdateWithWhereUniqueWithoutProjectInput = {
    where: Prisma.JoinRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.JoinRequestUpdateWithoutProjectInput, Prisma.JoinRequestUncheckedUpdateWithoutProjectInput>;
};
export type JoinRequestUpdateManyWithWhereWithoutProjectInput = {
    where: Prisma.JoinRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.JoinRequestUpdateManyMutationInput, Prisma.JoinRequestUncheckedUpdateManyWithoutProjectInput>;
};
export type JoinRequestCreateManyUserInput = {
    id?: number;
    projectId: number;
    status?: $Enums.Status;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type JoinRequestUpdateWithoutUserInput = {
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutJoinRequestsNestedInput;
};
export type JoinRequestUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    projectId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JoinRequestUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    projectId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JoinRequestCreateManyProjectInput = {
    id?: number;
    userId: number;
    status?: $Enums.Status;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type JoinRequestUpdateWithoutProjectInput = {
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutJoinRequestsNestedInput;
};
export type JoinRequestUncheckedUpdateWithoutProjectInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JoinRequestUncheckedUpdateManyWithoutProjectInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JoinRequestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    userId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["joinRequest"]>;
export type JoinRequestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    userId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["joinRequest"]>;
export type JoinRequestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    userId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["joinRequest"]>;
export type JoinRequestSelectScalar = {
    id?: boolean;
    projectId?: boolean;
    userId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type JoinRequestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "projectId" | "userId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["joinRequest"]>;
export type JoinRequestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type JoinRequestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type JoinRequestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $JoinRequestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "JoinRequest";
    objects: {
        project: Prisma.$ProjectPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        projectId: number;
        userId: number;
        status: $Enums.Status;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["joinRequest"]>;
    composites: {};
};
export type JoinRequestGetPayload<S extends boolean | null | undefined | JoinRequestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$JoinRequestPayload, S>;
export type JoinRequestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<JoinRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: JoinRequestCountAggregateInputType | true;
};
export interface JoinRequestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['JoinRequest'];
        meta: {
            name: 'JoinRequest';
        };
    };
    findUnique<T extends JoinRequestFindUniqueArgs>(args: Prisma.SelectSubset<T, JoinRequestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__JoinRequestClient<runtime.Types.Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends JoinRequestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, JoinRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__JoinRequestClient<runtime.Types.Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends JoinRequestFindFirstArgs>(args?: Prisma.SelectSubset<T, JoinRequestFindFirstArgs<ExtArgs>>): Prisma.Prisma__JoinRequestClient<runtime.Types.Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends JoinRequestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, JoinRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__JoinRequestClient<runtime.Types.Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends JoinRequestFindManyArgs>(args?: Prisma.SelectSubset<T, JoinRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends JoinRequestCreateArgs>(args: Prisma.SelectSubset<T, JoinRequestCreateArgs<ExtArgs>>): Prisma.Prisma__JoinRequestClient<runtime.Types.Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends JoinRequestCreateManyArgs>(args?: Prisma.SelectSubset<T, JoinRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends JoinRequestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, JoinRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends JoinRequestDeleteArgs>(args: Prisma.SelectSubset<T, JoinRequestDeleteArgs<ExtArgs>>): Prisma.Prisma__JoinRequestClient<runtime.Types.Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends JoinRequestUpdateArgs>(args: Prisma.SelectSubset<T, JoinRequestUpdateArgs<ExtArgs>>): Prisma.Prisma__JoinRequestClient<runtime.Types.Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends JoinRequestDeleteManyArgs>(args?: Prisma.SelectSubset<T, JoinRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends JoinRequestUpdateManyArgs>(args: Prisma.SelectSubset<T, JoinRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends JoinRequestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, JoinRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends JoinRequestUpsertArgs>(args: Prisma.SelectSubset<T, JoinRequestUpsertArgs<ExtArgs>>): Prisma.Prisma__JoinRequestClient<runtime.Types.Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends JoinRequestCountArgs>(args?: Prisma.Subset<T, JoinRequestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], JoinRequestCountAggregateOutputType> : number>;
    aggregate<T extends JoinRequestAggregateArgs>(args: Prisma.Subset<T, JoinRequestAggregateArgs>): Prisma.PrismaPromise<GetJoinRequestAggregateType<T>>;
    groupBy<T extends JoinRequestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: JoinRequestGroupByArgs['orderBy'];
    } : {
        orderBy?: JoinRequestGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, JoinRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJoinRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: JoinRequestFieldRefs;
}
export interface Prisma__JoinRequestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    project<T extends Prisma.ProjectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProjectDefaultArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface JoinRequestFieldRefs {
    readonly id: Prisma.FieldRef<"JoinRequest", 'Int'>;
    readonly projectId: Prisma.FieldRef<"JoinRequest", 'Int'>;
    readonly userId: Prisma.FieldRef<"JoinRequest", 'Int'>;
    readonly status: Prisma.FieldRef<"JoinRequest", 'Status'>;
    readonly createdAt: Prisma.FieldRef<"JoinRequest", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"JoinRequest", 'DateTime'>;
}
export type JoinRequestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JoinRequestSelect<ExtArgs> | null;
    omit?: Prisma.JoinRequestOmit<ExtArgs> | null;
    include?: Prisma.JoinRequestInclude<ExtArgs> | null;
    where: Prisma.JoinRequestWhereUniqueInput;
};
export type JoinRequestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JoinRequestSelect<ExtArgs> | null;
    omit?: Prisma.JoinRequestOmit<ExtArgs> | null;
    include?: Prisma.JoinRequestInclude<ExtArgs> | null;
    where: Prisma.JoinRequestWhereUniqueInput;
};
export type JoinRequestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type JoinRequestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type JoinRequestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type JoinRequestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JoinRequestSelect<ExtArgs> | null;
    omit?: Prisma.JoinRequestOmit<ExtArgs> | null;
    include?: Prisma.JoinRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.JoinRequestCreateInput, Prisma.JoinRequestUncheckedCreateInput>;
};
export type JoinRequestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.JoinRequestCreateManyInput | Prisma.JoinRequestCreateManyInput[];
    skipDuplicates?: boolean;
};
export type JoinRequestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JoinRequestSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.JoinRequestOmit<ExtArgs> | null;
    data: Prisma.JoinRequestCreateManyInput | Prisma.JoinRequestCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.JoinRequestIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type JoinRequestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JoinRequestSelect<ExtArgs> | null;
    omit?: Prisma.JoinRequestOmit<ExtArgs> | null;
    include?: Prisma.JoinRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.JoinRequestUpdateInput, Prisma.JoinRequestUncheckedUpdateInput>;
    where: Prisma.JoinRequestWhereUniqueInput;
};
export type JoinRequestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.JoinRequestUpdateManyMutationInput, Prisma.JoinRequestUncheckedUpdateManyInput>;
    where?: Prisma.JoinRequestWhereInput;
    limit?: number;
};
export type JoinRequestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JoinRequestSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.JoinRequestOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.JoinRequestUpdateManyMutationInput, Prisma.JoinRequestUncheckedUpdateManyInput>;
    where?: Prisma.JoinRequestWhereInput;
    limit?: number;
    include?: Prisma.JoinRequestIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type JoinRequestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JoinRequestSelect<ExtArgs> | null;
    omit?: Prisma.JoinRequestOmit<ExtArgs> | null;
    include?: Prisma.JoinRequestInclude<ExtArgs> | null;
    where: Prisma.JoinRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.JoinRequestCreateInput, Prisma.JoinRequestUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.JoinRequestUpdateInput, Prisma.JoinRequestUncheckedUpdateInput>;
};
export type JoinRequestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JoinRequestSelect<ExtArgs> | null;
    omit?: Prisma.JoinRequestOmit<ExtArgs> | null;
    include?: Prisma.JoinRequestInclude<ExtArgs> | null;
    where: Prisma.JoinRequestWhereUniqueInput;
};
export type JoinRequestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JoinRequestWhereInput;
    limit?: number;
};
export type JoinRequestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JoinRequestSelect<ExtArgs> | null;
    omit?: Prisma.JoinRequestOmit<ExtArgs> | null;
    include?: Prisma.JoinRequestInclude<ExtArgs> | null;
};
