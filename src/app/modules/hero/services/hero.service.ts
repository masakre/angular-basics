import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { heroes } from "../mocks/heroes";
import { Hero } from "../types/hero.type";

@Injectable()
export class HeroService {
  
  fetchHeroes(): Observable<Hero[]> {
    return of(heroes);
  }

  findHero(id: string): Observable<Hero | null> {
    if (!id) return of(null);

    const hero = heroes.find((hero) => hero.id === id);
    return of(hero ? hero : null);
  }
}
