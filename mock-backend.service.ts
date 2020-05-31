import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { authController } from './authController';

export class mockBackend implements HttpInterceptor {
  /* simulated delay value in ms */
  delay = 2000;
  token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ';

  /* 
  HttpRequest is intercepted and passed into authController
  
  Returns an Observable of HttpResponse
 */

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return of(req).pipe(delay(delay), map(authController(this.token)));
  }
}
