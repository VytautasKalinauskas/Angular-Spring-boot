import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = ''
  id: number
  welcomeMessageFromService:string;
  //ActivatedRoute
  constructor(
    private route:ActivatedRoute,
    private dataService:WelcomeDataService
  ) {

   }

  ngOnInit() {
    this.name = this.route.snapshot.params['name']
  }

getWelcomeMessage() {
  this.dataService.executeHelloWorldBeanService().subscribe(
    response => this.handleSuccessfulResponse(response),
    error => this.handleErrorResponse(error)
  );
 
}

getWelcomeMessageById() {
  this.dataService.executeHelloWorldBeanServiceWithId(this.id).subscribe(
    response => this.handleSuccessfulResponse(response),
    error => this.handleErrorResponse(error)
  )
}

handleSuccessfulResponse(response){
  this.welcomeMessageFromService = response.message;
}

handleErrorResponse(error){
  this.welcomeMessageFromService = error.error.message;
}

}
