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
        likes: number;
        public: boolean;
        creatorId: number;
    }>;
    getProjects(request: Request): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        tags: string[];
        likes: number;
        public: boolean;
        creatorId: number;
    }[]>;
    getProject(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        tags: string[];
        likes: number;
        public: boolean;
        creatorId: number;
    } | null>;
    joinProject(projectId: string, currentUser: User): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        projectId: number;
        userId: number;
        status: import("../../generated/prisma/enums").Status;
    }>;
    getJoinRequests(projectId: number, currentUser: User): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        projectId: number;
        userId: number;
        status: import("../../generated/prisma/enums").Status;
    }[]>;
    acceptJoinRequest(requestId: number, currentUser: User): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        projectId: number;
        userId: number;
        status: import("../../generated/prisma/enums").Status;
    }>;
    rejectJoinRequest(requestId: number, currentUser: User): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        projectId: number;
        userId: number;
        status: import("../../generated/prisma/enums").Status;
    }>;
    updateProject(id: string, updateProjectDto: UpdateProjectDto, currentUser: User): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        tags: string[];
        likes: number;
        public: boolean;
        creatorId: number;
    }>;
    removeProject(id: string, currentUser: User): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        tags: string[];
        likes: number;
        public: boolean;
        creatorId: number;
    }>;
}
