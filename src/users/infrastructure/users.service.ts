import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto): string {
    return 'This action adds a new user'
  }
}
