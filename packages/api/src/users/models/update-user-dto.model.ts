import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDtoModel } from './create-user-dto.model';

export class UpdateUserDtoModel extends PartialType(CreateUserDtoModel) {}
