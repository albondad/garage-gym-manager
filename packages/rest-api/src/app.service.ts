import { FirebaseService } from './firebase/firebase.service';
import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class AppService implements OnModuleInit {
  onModuleInit() {
    FirebaseService.start();
  }
}
