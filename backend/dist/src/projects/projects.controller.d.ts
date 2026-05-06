import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import type { User } from '../../generated/prisma/client';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    createProject(createProjectDto: CreateProjectDto, currentUser: User): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        tags: string[];
        public: boolean;
        likes: number;
    }>;
    getProjects(request: Request): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        tags: string[];
        public: boolean;
        likes: number;
    }[]>;
    getProject(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        tags: string[];
        public: boolean;
        likes: number;
    } | null>;
    getMembershipStatus(projectId: string, currentUser: User): Promise<{
        role: string;
    }>;
    joinProject(projectId: string, currentUser: User): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        projectId: number;
        userId: number;
        status: import("../../generated/prisma/enums").JoinRequestStatus;
    }>;
    getJoinRequests(projectId: number, currentUser: User): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        projectId: number;
        userId: number;
        status: import("../../generated/prisma/enums").JoinRequestStatus;
    }[]>;
    acceptJoinRequest(requestId: number, currentUser: User): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        projectId: number;
        userId: number;
        status: import("../../generated/prisma/enums").JoinRequestStatus;
    }>;
    rejectJoinRequest(requestId: number, currentUser: User): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        projectId: number;
        userId: number;
        status: import("../../generated/prisma/enums").JoinRequestStatus;
    }>;
    updateProject(id: string, updateProjectDto: UpdateProjectDto, currentUser: User): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        tags: string[];
        public: boolean;
        likes: number;
    }>;
    removeProject(id: string, currentUser: User): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        tags: string[];
        public: boolean;
        likes: number;
    }>;
}
