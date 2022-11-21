import { Injectable } from '@nestjs/common';
import { SignInDto } from './dto/sign-in.dto';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseService } from 'src/firebase/firebase.service';

@Injectable()
export class DevelopmentService {
  async signIn(signInDto: SignInDto) {
    const auth = getAuth(FirebaseService.app);
    const userCredential = await signInWithEmailAndPassword(
      auth,
      signInDto.email,
      signInDto.password,
    );
    return userCredential;
  }
}
