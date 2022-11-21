import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DevelopmentModule } from './development/development.module';
import { FirebaseService } from './firebase/firebase.service';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ConfigModule.forRoot(), DevelopmentModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, FirebaseService],
})
export class AppModule {}
