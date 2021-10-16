import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { Hero } from '../interfaces/Hero';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  BASE_URL: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getHeroes(pagination :{ count: number, offset: number }): Observable<Hero[]>{
    return this.http.get<Hero[]>(`${this.BASE_URL}/heroes`, {params: pagination});
  }

  getHero(id: string): Observable<Hero> {
    return this.http.get<Hero>(`${this.BASE_URL}/heroes/${id}`);
  }

  create(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(`${this.BASE_URL}/heroes`, hero);
  }

  delete(id: string): Observable<Hero> {
    return this.http.delete<Hero>(`${this.BASE_URL}/heroes/${id}`);
  }

  update(id: string, hero: Hero): Observable<Hero> {
    return this.http.put<Hero>(`${this.BASE_URL}/heroes/${id}`, hero);
  }


}
