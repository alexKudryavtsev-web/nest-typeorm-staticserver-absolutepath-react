import { Controller, Post } from '@nestjs/common';
import { UserService } from '@app/api/user/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser() {
    await this.userService.createUser();
  }
}
