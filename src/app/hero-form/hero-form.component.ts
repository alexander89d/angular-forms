import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  
  model = new Hero(18, 'Dr IQ', this.powers[0], 'myhero@bogusemail.com', 'Chuck Overstreet');
  
  submitted = false;
  
  newHero() {
    this.model = new Hero(18, '', '', '');
  }
  
  onSubmit() { 
    this.submitted = true;
    console.log(this.diagnostic);
  }
  
  // TODO: remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
