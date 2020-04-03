import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import Swal2 from 'sweetalert2';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {


  constructor(

  ) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        retry(1),
        catchError((error: HttpErrorResponse) => {

          if (error.status >= 300) {
            let errorMessage = '';
            if (error.error instanceof ErrorEvent) {
              errorMessage = `Error: ${error.error.message}`
            } else {
              errorMessage = `Código del Error: ${error.status}`;
            }
            console.log(errorMessage);
            Swal2.fire({
              title: 'Oops!',
              text: errorMessage + '... Operación cancelada'
            });

            return throwError(errorMessage);
          }
        })
      )

  }
}
