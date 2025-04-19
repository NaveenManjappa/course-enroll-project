import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { catchError, finalize, map, Observable, throwError } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(private spinnerService:NgxSpinnerService,private toastrService:ToastrService){

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.show();
    
    return next.handle(req).pipe(
      map((event:HttpEvent<any>)=> {
        if(event instanceof HttpResponse){
          
        }
        return event;
      }),
      catchError((error:HttpErrorResponse) => {
        return throwError(() => error);
      }),
      finalize(()=> {
        this.spinnerService.hide();
      })
    )
  }
}