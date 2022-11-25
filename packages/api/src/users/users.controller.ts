import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDtoModel } from './models/create-user-dto.model';
import { UpdateUserDtoModel } from './models/update-user-dto.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDtoModel) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  readList() {
    return this.usersService.readList();
  }

  @Get(':id')
  read(@Param('id') id: string) {
    return this.usersService.read(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDtoModel) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
