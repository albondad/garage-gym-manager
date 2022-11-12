import { initializeApp, FirebaseApp } from 'firebase/app';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FirebaseService {
  static app: FirebaseApp;
  static isAppInitialized = false;

  static start() {
    if (FirebaseService.isAppInitialized) {
      return;
    }

    FirebaseService.isAppInitialized = true;

    const options = {
      apiKey: process.env.FIREBASE_API_KEY,
      appId: process.env.FIREBASE_APP_ID,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    };

    FirebaseService.app = initializeApp(options);
  }
}
