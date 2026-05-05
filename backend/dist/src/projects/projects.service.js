"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProjectsService = class ProjectsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createProject(createProjectDto, currentUserId) {
        return this.prisma.project.create({
            data: {
                ...createProjectDto,
                members: {
                    create: {
                        user: {
                            connect: { id: currentUserId },
                        },
                        role: 'OWNER',
                    },
                },
            },
        });
    }
    async requestToJoinProject(projectId, currentUserId) {
        const project = await this.prisma.project.findUnique({
            where: {
                id: projectId,
            },
            include: {
                members: {
                    where: {
                        userId: currentUserId,
                    },
                },
            },
        });
        if (!project) {
            throw new common_1.NotFoundException('Project not found');
        }
        if (project.members.length > 0) {
            throw new common_1.UnauthorizedException('You are already a member of this project');
        }
        return this.prisma.joinRequest.create({
            data: {
                project: { connect: { id: projectId } },
                user: { connect: { id: currentUserId } },
            },
        });
    }
    async getJoinRequests(projectId, currentUserId) {
        const project = await this.prisma.project.findUnique({
            where: {
                id: projectId,
            },
            include: {
                members: {
                    where: {
                        userId: currentUserId,
                    },
                },
            },
        });
        if (!project) {
            throw new common_1.NotFoundException('Project not found');
        }
        if (project.members.length === 0) {
            throw new common_1.UnauthorizedException('You are not a member of this project');
        }
        return this.prisma.joinRequest.findMany({
            where: {
                projectId,
                status: 'PENDING',
            },
            include: {
                user: true,
            },
        });
    }
    async acceptJoinRequest(joinRequestId, currentUserId) {
        const joinRequest = await this.prisma.joinRequest.findUnique({
            where: {
                id: joinRequestId,
            },
            include: {
                project: {
                    include: {
                        members: {
                            where: {
                                userId: currentUserId,
                            },
                        },
                    },
                },
            },
        });
        if (!joinRequest) {
            throw new common_1.NotFoundException('Join request not found');
        }
        if (joinRequest.project.members.length === 0) {
            throw new common_1.UnauthorizedException('You are not a member of this project');
        }
        return this.prisma.joinRequest.update({
            where: {
                id: joinRequestId,
            },
            data: {
                status: 'ACCEPTED',
                project: {
                    update: {
                        members: {
                            create: {
                                user: {
                                    connect: {
                                        id: joinRequest.userId,
                                    },
                                },
                            },
                        },
                    },
                },
            },
            include: {
                user: true,
                project: {
                    include: {
                        members: true,
                    },
                },
            },
        });
    }
    async rejectJoinRequest(joinRequestId, currentUserId) {
        const joinRequest = await this.prisma.joinRequest.findUnique({
            where: {
                id: joinRequestId,
            },
            include: {
                project: {
                    include: {
                        members: {
                            where: {
                                userId: currentUserId,
                            },
                        },
                    },
                },
            },
        });
        if (!joinRequest) {
            throw new common_1.NotFoundException('Join request not found');
        }
        if (joinRequest.project.members.length === 0) {
            throw new common_1.UnauthorizedException('You are not a member of this project');
        }
        return this.prisma.joinRequest.update({
            where: {
                id: joinRequestId,
            },
            data: {
                status: 'REJECTED',
            },
            include: {
                user: true,
                project: true,
            },
        });
    }
    async getProjects() {
        return this.prisma.project.findMany({
            include: {
                members: {
                    include: {
                        user: true,
                    },
                },
            },
        });
    }
    async getProjectById(id) {
        return this.prisma.project.findUnique({
            where: {
                id,
            },
            include: {
                members: {
                    include: {
                        user: true,
                    },
                },
            },
        });
    }
    async updateProject(id, projectUpdateDto, currentUserId) {
        const project = await this.prisma.project.findUnique({
            where: {
                id,
            },
        });
        if (!project) {
            throw new common_1.NotFoundException('Project not found');
        }
        const userProject = await this.prisma.userProject.findUnique({
            where: {
                userId_projectId: {
                    userId: currentUserId,
                    projectId: id,
                },
            },
        });
        if (!userProject) {
            throw new common_1.UnauthorizedException('You are not a member of this project');
        }
        return this.prisma.project.update({
            where: {
                id,
            },
            data: projectUpdateDto,
        });
    }
    async removeProject(id, currentUserId) {
        const project = await this.prisma.project.findUnique({
            where: {
                id,
            },
        });
        if (!project) {
            throw new common_1.NotFoundException('Project not found');
        }
        const userProject = await this.prisma.userProject.findUnique({
            where: {
                userId_projectId: {
                    userId: currentUserId,
                    projectId: id,
                },
            },
        });
        if (!userProject || userProject.role !== 'OWNER') {
            throw new common_1.UnauthorizedException('You are not the creator of this project');
        }
        return this.prisma.$transaction(async (tx) => {
            await tx.joinRequest.deleteMany({ where: { projectId: id } });
            await tx.userProject.deleteMany({ where: { projectId: id } });
            const deleted = await tx.project.delete({ where: { id } });
            return deleted;
        });
    }
};
exports.ProjectsService = ProjectsService;
exports.ProjectsService = ProjectsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProjectsService);
//# sourceMappingURL=projects.service.js.map