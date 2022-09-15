import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '@app/api/user/user.entity';
import { Repository } from 'typeorm';

@Injectable({})
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser() {
    const user = new UserEntity();

    await this.userRepository.save(user);
  }
}
