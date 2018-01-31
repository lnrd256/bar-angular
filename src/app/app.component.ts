import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
  	trigger('myAnimation',[
  		state('small',style({
  			borderRadius: '0%';
  		})),
  		state('large',style({
  			borderRadius: '50%';
  			width: '68px';

  		})),

  		transition('small => large', animate("100ms ease-in")),
  		transition('large => small', animate('100ms ease-out'))
  	]),
  ]

})
export class AppComponent {
  title = 'app';
  isBig=true;
  state: string='small';
  animate(event) {
  	this.isBig=!this.isBig;
    this.state=(this.state==='small'?'large':'small')
  }
}
