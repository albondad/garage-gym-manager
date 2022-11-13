import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FirebaseService } from '../firebase/firebase.service';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async readList() {
    const firestore = getFirestore(FirebaseService.app);
    const usersCollection = collection(firestore, 'users');
    const userDocumentsSnapshot = await getDocs(usersCollection);
    userDocumentsSnapshot.forEach((element) => {
      console.log(element.data());
    });
    return `This action reads a user list`;
  }

  readOne(id: number) {
    return `This action reads a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
