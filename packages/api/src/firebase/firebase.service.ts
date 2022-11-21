import { App } from 'firebase-admin/app';
import { Injectable } from '@nestjs/common';
import admin from 'firebase-admin';

@Injectable()
export class FirebaseService {
  static app: App;
  static isAppInitialized = false;

  static start() {
    if (FirebaseService.isAppInitialized) {
      return;
    }

    FirebaseService.isAppInitialized = true;

    FirebaseService.app = admin.initializeApp({
      credential: admin.credential.cert({
        projectId: 'garage-gym-manager',
        privateKey:
          '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCidFhn6ShtJqKe\nc6ieuCkHeSwZx85k+rdK7se99pK4osCUFwZrJb5RKtJ3gMyrNBOVysVda72zwXG5\nnWIOhYyvc4hyKBuJBnhNcFBu7JUmNeSzusMNB15teUgmFNo1jyHotdFQVQxCGHG6\n2mujk0tfow6vDW/0e6Lo3TCeDPdvzq0/hvo1vA4Ge8Rl0Jl9xbOQseaZQB9q2dJx\ntXwfdJs8psiI4z3e4/g3Cs9qv8a04jjN0t4f9NInCQUW9KhXhQy4Ug4573UfTmM2\n9ni66+B3/PAvOkJd5qdiLI+SWpl4Vwj95GX7alxQyAA3cmiPfzH65pfxgscnweIh\n7tVZfbTJAgMBAAECggEAEoehRtbwKsUPovGvz8zTNzxBxL4G43s6eXRTea48jY1Y\n2Hto2sNfGix/fayGC9ggjMMocG+3319G/MRAGUZv5dpQe67p9x7zDWgscH6RQ569\nk6ePlHac9XEyQs+5lQbauAu3EInm4Eof/M9pnCqSnBnB9MMcXD9W9Wc3Yqu5dHno\ndx6CyPUwkoghlJPgDG7WiCNqgtykP5li5f0/aopHiNCeJa+2m8mW71QRYN07Teug\nLAmclJeuPrsCtbe+BXGGAZ6ZIh6UF+hX0s0d6XmQY69S1gsDKF4FBEp+u1o04hg4\n+SXdH+obK9jTioAfgFNKxvbBndyG48rXv0R1CUXswQKBgQDj56oKfiGwQ5GvWfhg\nLlqCZ89CKHv+movLfGlY2SJ8vO7BVWuxdYLhdJ6oXnD0064sAYIbj9OID70vISmL\nUuF2uDZ19lj1tSTL74tN3DNnEl6lJrp8EMQYwP6TI/S5L+jdWm+O00UX8+mMygzQ\nq0WOT8EWGyh+Kh8V+VBVMK6maQKBgQC2eynMCsnJsJGI0USMnvxE8kOhpgFh7vWP\ndbdZZlWcFejY+9asu0orpNv1s5Ay64ogATUyO7z0BA7jTMFNWbj3R+SjSt3ViUKk\njZU29LDBnSz9BBqJGUEXfAfPJUrsus89SdJ6TjGk56KeJ9QOCwzrLLmYHEvBjXrQ\nQ7N1IfyPYQKBgQCLHvHX8eMSvEyEZEGQRPuPO1tzoU7/vsuzbcDJMdMxnguJDWHu\nNDOu+QeY8/20FjvuNQV9WbDhD+qGiJHZsMBdPlpQbA8l/mv16cZ5wv/F3ZrU6e1Q\nqtNp4PYGUB6lpS9bYEdVQnadBpH9FaH5B3QwSVMu8WkoiwHq4gQ93LfgcQKBgFMH\n35DUJ9T53n6emc5SWP8WLOfUnTRugpVwPqkTA0kuPvDcRmX6IlmRffRia+5/di3x\n3r6op+VwI0YRmrMTbDI4KDSU0DNlbUlqksaauAKg/eNyhpBzSUbiTLtYgKsOpVWB\nzZ+RDM24CCpmfPqW1J39j8VCusWrFoLFC1b0y/KBAoGBALQjzQgscWac0N6dIrFL\nDUBHcctfw13fMxbYVMSnMAGO2MkQA8zofwuJ2IR2kk+Xbs9LlTSCB+eKhMN9kWVt\nz7qFNmKRkeOCjCNs1Xk8fAirAgpawEKwpijkVaSNF8IUCD7kRudDGNDLLIGNO1uP\nZDAIS8sHk38QI2zQ3n8/XaIF\n-----END PRIVATE KEY-----\n',
        clientEmail:
          'firebase-adminsdk-tf9tz@garage-gym-manager.iam.gserviceaccount.com',
      }),
    });
  }
}
