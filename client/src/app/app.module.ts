import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HeroesFormComponent } from './components/heroes-form/heroes-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroesListComponent,
    HeroesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
