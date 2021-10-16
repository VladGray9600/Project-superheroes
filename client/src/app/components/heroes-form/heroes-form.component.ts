import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Hero } from '../../interfaces/Hero'
import { HeroesService } from '../../services/heroes.service'


@Component({
  selector: 'app-heroes-form',
  templateUrl: './heroes-form.component.html',
  styleUrls: ['./heroes-form.component.css']
})
export class HeroesFormComponent implements OnInit {

  hero: Hero = {
    nickname: "",
    real_name: "",
    original_description​: "",
    superpowers: "",
    catch_phrase: "",
    picture: "",
  };

  edit: boolean = false;

  constructor(private heroesService: HeroesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    const params = this.activatedRoute.snapshot.params;
    if(params && params.id) {
      this.heroesService.getHero(params.id)
        .subscribe(
          res=>{
            console.log(res);
            this.hero = res;
            this.edit = true;
          }
        )
    }
  }
  
  submitHero() {
    this.heroesService.create(this.hero)
    .subscribe(
      res => {console.log(res);
      this.router.navigate(['/']);
      },
      err => console.log(err)
    )

  }

  update(){
    const id = this.activatedRoute.snapshot.params.id
    this.heroesService.update(id,this.hero)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/heroes'])
      },
     err => console.log(err)
    );
  }

}



