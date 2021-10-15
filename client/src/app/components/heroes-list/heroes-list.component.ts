import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/Hero'
import { HeroesService } from '../../services/heroes.service'



@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  constructor(private heroService: HeroesService) { }

  heroes: Hero[] = [] 

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(){
    this.heroService.getHeroes()
      .subscribe(
        res => { this.heroes = res
        },
        err => console.log(err)
      )
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
