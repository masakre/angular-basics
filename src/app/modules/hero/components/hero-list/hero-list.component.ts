import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../types/hero.type';

@Component({
  selector: 'hero-list',
  template: `
    <small *ngIf="!heroes.length"> Empty list :/ </small>

    <ul *ngIf="heroes?.length">
      <li
        *ngFor="let hero of heroes"
        class="h-cursor mb10"
        (click)="handleClick(hero)"
      >
        {{ hero.isVillain ? '😈' : '😏' }}
        <b>{{ hero.name }}</b>
        {{ hero.powerLevel }}
      </li>
    </ul>
  `,
})
export class HeroListComponent implements OnInit {
  @Input() heroes: Hero[] = [];
  @Output() onClick: EventEmitter<Hero> = new EventEmitter();

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.fetchHeroes()
  }

  fetchHeroes() {
    this.heroService.fetchHeroes()
    .subscribe((heroes: Hero[]) => {
      this.heroes = heroes;
    });
  }

  handleClick(hero: Hero) {
    this.onClick.emit(hero);
  }
}
