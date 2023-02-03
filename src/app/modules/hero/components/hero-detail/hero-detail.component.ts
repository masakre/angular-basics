import { Component, Input } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../types/hero.type';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'hero-detail[hero]',
  templateUrl: './hero-detail.component.html',
})
export class HeroDetailComponent {
  @Input() hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
      if ( this.hero ) return;
      const {id} = this.route.snapshot.params;      
      this.fetchHero(id)    
}

fetchHero(id: string) {
    this.heroService.findHero(id)
        .subscribe(hero => this.hero = hero);
  }

  osomEmoji(): string {
    return this.hero.isVillain ? '😈' : '😏';
  }

  getAmv(hero: Hero): SafeUrl {
    if (!hero.amv) return 
    return this.sanitizer.bypassSecurityTrustResourceUrl(hero.amv)
  }
}
