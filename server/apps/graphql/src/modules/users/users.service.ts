import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { User } from '@prisma/client'
import * as argon2 from 'argon2'

import { CreateUserDto } from './dtos'

import { PrismaService } from '@app/common/modules'

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAll(): Promise<User[]> {
    try {
      return await this.prismaService.user.findMany()
    } catch (error) {
      throw new ForbiddenException({
        message: {
          text: error.message,
          status: error.status,
        },
      })
    }
  }

  async getOne(type: 'id' | 'email', value: number | string): Promise<User> {
    try {
      const user = await this.prismaService.user.findFirst({
        where: {
          [type]: value,
        },
      })
      if (!user)
        throw new NotFoundException(`User with ${type}: ${value} not found`)

      return user
    } catch (error) {
      throw new ForbiddenException({
        message: {
          text: error.message,
          status: error.status,
        },
      })
    }
  }

  async create(body: CreateUserDto): Promise<User> {
    const { email, password } = body
    try {
      const hashedPass = await argon2.hash(password)

      return await this.prismaService.user.create({
        data: {
          email,
          hashedPass,
        },
      })
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
