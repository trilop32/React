import { Component } from '@angular/core';

interface Hero {
  id: number;
  name: string;
  superpower: string;
  age: number;
  imageUrl: string;
}

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  hero: Hero = {
    id: 1,
    name: 'Супермен',
    superpower: 'Полет, супер сила, лазерное зрение',
    age: 30,
    imageUrl: 'https://avatars.mds.yandex.net/i?id=bbafd9ee1ae0f70851accf068fe3bbc7_l-10595433-images-thumbs&n=13' 
  };

  isHeroVisible: boolean = true;
  powerLevel: number = 75;
  todaysDate: Date = new Date();

  increasePower() {
    this.powerLevel = Math.min(1000, this.powerLevel + 10);
  }

  decreasePower() {
    this.powerLevel = Math.max(0, this.powerLevel - 10);
  }
}