import {
  Injectable,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common'
import { User } from '@prisma/client'

import { I_GetData } from '../../models'

import { PrismaService } from '@app/common/modules'

@Injectable()
export class InfoService {
  constructor(private readonly prismaService: PrismaService) {}

  async getMyInfo(userId: number): Promise<I_GetData<User>> {
    try {
      const user = await this.prismaService.user.findFirst({
        where: {
          id: userId,
        },
      })

      if (!user) throw new NotFoundException(`User with id ${userId} not found`)

      return {
        message: 'Info received',
        data: user,
        timestamp: new Date(),
      }
    } catch (error) {
      throw new ForbiddenException({
        message: {
          text: error.message,
          status: error.status,
        },
      })
    }
  }
}
