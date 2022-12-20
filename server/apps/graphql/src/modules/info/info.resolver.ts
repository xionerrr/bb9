import { Injectable, UseGuards } from '@nestjs/common'
import { Query, Resolver } from '@nestjs/graphql'
import { User } from '@prisma/client'

import { InfoService } from './info.service'

import { CurrentUser } from '../../decorators'
import { GqlAuthGuard } from '../../guards'
import { I_GetData } from '../../models'

@Injectable()
@UseGuards(GqlAuthGuard)
@Resolver('Info')
export class InfoResolver {
  constructor(private readonly infoService: InfoService) {}

  @Query('getInfo')
  getMyInfo(@CurrentUser() user: User): Promise<I_GetData<User>> {
    console.log(user)
    return this.infoService.getMyInfo(user['sub'])
  }
}
