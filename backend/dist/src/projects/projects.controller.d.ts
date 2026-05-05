import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import type { User } from '../../generated/prisma/client';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    createProject(createProjectDto: CreateProjectDto, currentUser: User): Promise<{
        id: number;
        title: string;
        description: string;
        tags: string[];
        likes: number;
        public: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getProjects(request: Request): Promise<{
        id: number;
        title: string;
        description: string;
        tags: string[];
        likes: number;
        public: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getProject(id: string): Promise<{
        id: number;
        title: string;
        description: string;
        tags: string[];
        likes: number;
        public: boolean;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    joinProject(projectId: string, currentUser: User): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        projectId: number;
        status: import("../../generated/prisma/enums").JoinRequestStatus;
    }>;
    getJoinRequests(projectId: number, currentUser: User): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        projectId: number;
        status: import("../../generated/prisma/enums").JoinRequestStatus;
    }[]>;
    acceptJoinRequest(requestId: number, currentUser: User): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        projectId: number;
        status: import("../../generated/prisma/enums").JoinRequestStatus;
    }>;
    rejectJoinRequest(requestId: number, currentUser: User): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        projectId: number;
        status: import("../../generated/prisma/enums").JoinRequestStatus;
    }>;
    updateProject(id: string, updateProjectDto: UpdateProjectDto, currentUser: User): Promise<{
        id: number;
        title: string;
        description: string;
        tags: string[];
        likes: number;
        public: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    removeProject(id: string, currentUser: User): Promise<{
        id: number;
        title: string;
        description: string;
        tags: string[];
        likes: number;
        public: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
