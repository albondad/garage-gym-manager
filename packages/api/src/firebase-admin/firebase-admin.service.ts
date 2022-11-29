import { Injectable, OnModuleInit } from '@nestjs/common';
import firebaseAdmin from 'firebase-admin';

@Injectable()
export class FirebaseAdminService implements OnModuleInit {
  static app: firebaseAdmin.app.App;
  static isAppInitialized: boolean;

  onModuleInit() {
    FirebaseAdminService.setup();
  }

  static setup() {
    const serviceAccount = Object({
      type: process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT_TYPE,
      project_id: process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT_PROJECT_ID,
      private_key_id: process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT_PRIVATE_KEY_ID,
      private_key: process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT_PRIVATE_KEY,
      client_email: process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT_CLIENT_EMAIL,
      client_id: process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT_CLIENT_ID,
      auth_uri: process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT_AUTH_URI,
      token_uri: process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT_TOKEN_URI,
      auth_provider_x509_cert_url:
        process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT_AUTH_PROVIDER_X509_CERT_URL,
      client_x509_cert_url:
        process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT_CLIENT_X509_CERT_URL,
    });
    const credential = firebaseAdmin.credential.cert(serviceAccount);
    FirebaseAdminService.app = firebaseAdmin.initializeApp({
      credential: credential,
    });
    FirebaseAdminService.isAppInitialized = true;

    return 'This action adds a new firebaseAdmin';
  }
}
