import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typeChallenge';

  solved = false;
  attempt: string = '';
  randomSentence = faker.lorem.sentence();
  
  onInput(input :string){
    this.attempt= input;

  }

  colorChooser(randomletter: string, attemptedLetter: string){
    if (!attemptedLetter){
      return 'pending'
    }
    // if(attemptedLetter == randomletter){
    //   return 'rightGuess'
    // }
    // if(attemptedLetter != randomletter){
    //   return "wrongGuess"
    // }
    //terneray expression is usable here
    return randomletter === attemptedLetter ? 'rightGuess' : 'wrongGuess'

  }
  
}
