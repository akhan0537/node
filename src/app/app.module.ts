import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { employeeComponent } from './components/employee.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { employeeFilter } from './filters/employee.filter';

@NgModule({
  declarations: [
    AppComponent,employeeComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : employeeFilter,
    multi : true
  }],
  bootstrap: [employeeComponent]
})
export class AppModule { }
