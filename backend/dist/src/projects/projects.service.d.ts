import { CreateProjectDto } from './dto/create-project.dto';
import { PrismaService } from '../prisma/prisma.service';
import { JoinRequest, Prisma, Project } from '../../generated/prisma/client';
export declare class ProjectsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createProject(createProjectDto: CreateProjectDto, currentUserId: number): Promise<Project>;
    requestToJoinProject(projectId: number, currentUserId: number): Promise<JoinRequest>;
    getJoinRequests(projectId: number, currentUserId: number): Promise<JoinRequest[]>;
    acceptJoinRequest(joinRequestId: number, currentUserId: number): Promise<JoinRequest>;
    rejectJoinRequest(joinRequestId: number, currentUserId: number): Promise<JoinRequest>;
    getProjects(): Promise<Project[]>;
    getProjectById(id: number): Promise<Project | null>;
    updateProject(id: number, projectUpdateDto: Prisma.ProjectUpdateInput, currentUserId: number): Promise<Project>;
    removeProject(id: number, currentUserId: number): Promise<Project>;
}
