import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Hero } from "../types/hero.type";

@Component({
    selector: 'heroes-page',
    template: `
        <h2>This is da HEROES page!</h2>
        <div style="display:flex; gap: 50px">
            <hero-list (onClick)="goToHero($event)"></hero-list>
            <hero-detail *ngIf="selectedHero" [hero]="selectedHero"></hero-detail>
        </div>
    `
})
export class HeroPageComponent {

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) {}

    selectedHero: Hero | null = null;

    showPreview(hero: Hero) {
        this.selectedHero = hero;
    }

    goToHero(hero: Hero) {
        this.router.navigate([hero.id ], { relativeTo: this.route })
    }

}