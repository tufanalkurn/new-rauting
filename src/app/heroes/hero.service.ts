import { Injectable } from '@angular/core';

export class Hero {
  constructor(public id: number, public name: string) { }
}

let HEROES = [
  new Hero(11, 'Mr. Nice'),
  new Hero(12, 'Narco'),
  new Hero(13, 'Bombasto'),
  new Hero(14, 'Celeritas'),
  new Hero(15, 'Magneta'),
  new Hero(16, 'RubberMan'),
  new Hero(17, 'Lorem ipsum dolor sit amet.')
];

let heroesPromise = Promise.resolve(HEROES);

@Injectable()
export class HeroService {
  getHeroes() { return heroesPromise; }

  getHero(id: number | string) {
    return heroesPromise
      .then(heroes => heroes.find(hero => hero.id === +id));
  }
}
