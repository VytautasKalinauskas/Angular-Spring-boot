import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


export class HelloWorldBean {
  constructor(
    public id:number,
    public name:string,
    public message:string) { }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private client:HttpClient

  ) { }

  executeHelloWorldBeanService() {
    
    return this.client.get<HelloWorldBean>(environment.JAVA_API+'api/hello/bean/0');
  }

  executeHelloWorldBeanServiceWithId(id: number) {
    
    return this.client.get<HelloWorldBean>(environment.JAVA_API+`api/hello/bean/${id}`);
  }

}
