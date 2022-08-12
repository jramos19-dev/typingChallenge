import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typeChallenge';

  attempt: string = '';
  randomSentence = faker.lorem.sentence();

  handleattempt(value:string){
  // this.attempt = value
  // 
    console.log(value)
  }
}
