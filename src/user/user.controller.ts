import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findAll() {
    // return 'buscando todos los clientes';
    return this.userService.findAll();
  }
}
