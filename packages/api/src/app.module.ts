import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { FirebaseAdminModule } from './firebase-admin/firebase-admin.module';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, FirebaseAdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
