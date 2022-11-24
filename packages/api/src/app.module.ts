import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { FirebaseAdminModule } from './firebase-admin/firebase-admin.module';
import { FirebaseAdminService } from './firebase-admin/firebase-admin.service';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, FirebaseAdminModule],
  controllers: [AppController],
  providers: [AppService, FirebaseAdminService],
})
export class AppModule {}
