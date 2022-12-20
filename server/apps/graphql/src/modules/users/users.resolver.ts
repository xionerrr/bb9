import { Injectable, UseGuards } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { User } from '@prisma/client'

import { CreateUserDto } from './dtos'
import { UsersService } from './users.service'

import { GqlAuthGuard } from '../../guards'

@Injectable()
@UseGuards(GqlAuthGuard)
@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query('users')
  getAll(): Promise<User[]> {
    return this.usersService.getAll()
  }

  @Query('user')
  getOne(@Args('id') userId: string): Promise<User> {
    return this.usersService.getOne('id', Number(userId))
  }

  @Mutation('createUser')
  create(@Args('input') body: CreateUserDto): Promise<User> {
    return this.usersService.create(body)
  }
}
