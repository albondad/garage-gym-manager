import { FirebaseAdminService } from './firebase-admin/firebase-admin.service';
import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(private firebaseAdminService: FirebaseAdminService) {}

  onModuleInit() {
    this.firebaseAdminService.setup();
  }
}
