import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn : "root"
})

export class employeeFilter implements HttpInterceptor{

    intercept(req:HttpRequest<any>,handler:HttpHandler):Observable< HttpEvent<any>>{
        const req1 = req.clone({
            setHeaders :{
                token : "nareshit"
            }
        });
        return handler.handle(req1);
    };
}