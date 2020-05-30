import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { authController } from './authController';

export class mockBackend implements HttpInterceptor {
  /* simulated delay value in ms */
  delay = 2000;

  /* 
  HttpRequest is intercepted and passed into authController
  
  Returns an Observable of HttpResponse
 */

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return of(req).pipe(delay(delay), map(authController));
  }
}
