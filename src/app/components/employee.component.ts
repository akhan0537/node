import { Component } from "@angular/core";
import { employeeService } from '../services/employee.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector:"employee",
    templateUrl:"./employee.component.html"
})

export class employeeComponent{

    public result:any;
    constructor(public service: employeeService){}

    ngOnInit(){
        this.service.getEmployees()
                    .subscribe((posRes)=>{
                        this.result = posRes;
                        console.log("the result is " + this.result);
                    },(errRes:HttpErrorResponse)=>{
                        console.log(errRes);
                    })
    };
};