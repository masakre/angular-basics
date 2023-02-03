import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
        <h1>Hello {{text}}!</h1>
        <a routerLink="/heroes">Go to heroes</a>
    `
  ,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  text: string = 'AMOS CREW'
}
