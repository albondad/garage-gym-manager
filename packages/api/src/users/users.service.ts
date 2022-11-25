import { CreateUserDtoModel } from './models/create-user-dto.model';
import { FirebaseAdminService } from 'src/firebase-admin/firebase-admin.service';
import { Injectable } from '@nestjs/common';
import { UpdateUserDtoModel } from './models/update-user-dto.model';
import { UserListModel } from './models/user-list.model';
import { UserModel } from './models/user.model';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDtoModel) {
    return 'This action adds a new user';
  }

  async readList() {
    const usersQuerySnapshot = await FirebaseAdminService.app
      .firestore()
      .collection('users')
      .get();

    const userListModel = new UserListModel();

    usersQuerySnapshot.forEach((element) => {
      const userModel = element.data() as UserModel;
      userListModel.list.push(userModel);
    });

    return userListModel;
  }

  async read(id: string) {
    const usersDocumentSnapshot = await FirebaseAdminService.app
      .firestore()
      .doc(`users/${id}`)
      .get();

    const userModel = usersDocumentSnapshot.data();

    return userModel;
  }

  update(id: number, updateUserDto: UpdateUserDtoModel) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
