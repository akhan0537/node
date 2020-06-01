import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({

    providedIn : "root"
})

export class employeeService{

    constructor (public http : HttpClient){}

    public getEmployees():Observable<any>{
        return this.http.get(`http://localhost:8084/employee`);
    }
}