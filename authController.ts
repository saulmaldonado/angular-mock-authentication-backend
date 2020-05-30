import { HttpResponse } from '@angular/common/http';
import db from './db.json';
/*

configure 'tsconfig.ts' include "resolveJsonModule" and "esModuleInterop"

tsconfig.json 

  "compilerOptions": {
    ...
    "resolveJsonModule": true,
    "esModuleInterop": true,
    ...
  }
    
*/

export const authController = (request): HttpResponse<any> => {
  /* ENDPOINT = '/api/authenticate' METHOD = 'POST' */
  if (request.url === '/api/authenticate' && request.method === 'POST') {
    const {
      email,
      password,
    }: { email: string; password: string } = request.body;

    let mockDbQuery = db.find(({ email: dbEmail }) => email === dbEmail);

    if (mockDbQuery) {
      if (mockDbQuery.password === password) {
        return new HttpResponse({
          status: 200,
        });
      } else {
        return new HttpResponse({
          status: 401,
        });
      }
    } else {
      return new HttpResponse({
        status: 404,
      });
    }
  } else {
    return new HttpResponse({
      status: 400,
    });
  }
};
