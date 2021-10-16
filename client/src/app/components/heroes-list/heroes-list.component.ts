import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../../interfaces/Hero'
import { HeroesService } from '../../services/heroes.service'



@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  constructor(private heroService: HeroesService,private router: Router, private activatedRoute: ActivatedRoute) { }

  heroes: Hero[] = [] 
  count: number = 5;
  offset: number = 0;

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(){
    this.activatedRoute.queryParams.subscribe(query => {
      this.count = query.count ? Number(query.count) : this.count;
      this.offset = query.offset ? Number(query.offset) : this.offset;

      this.heroService.getHeroes({ count: this.count, offset: this.offset })
        .subscribe(
          res => {
            this.heroes = res
          },
          err => console.log(err)
        )
    });
  }

  previousPage() {
    const previousOffset = this.offset - this.count;
    if (previousOffset >= 0)
      this.router.navigate([`/heroes`], { queryParams: { count: this.count, offset: previousOffset }});
  }

  nextPage() {
    this.router.navigate([`/heroes`], { queryParams: { count: this.count, offset: this.offset + this.count }});
  }

  delete(id: string | undefined) {
    if(!id){return}
    this.heroService.delete(id)
      .subscribe(
        res => {
          console.log(res);
          this.getHeroes();
        },
        err => console.log(err)
      )
  }

}
