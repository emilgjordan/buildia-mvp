import { ExecutionContext } from '@nestjs/common';
import { User } from '../../../generated/prisma/client';
export declare const getCurrentUserByContext: (context: ExecutionContext) => User;
export declare const CurrentUser: (...dataOrPipes: unknown[]) => ParameterDecorator;
