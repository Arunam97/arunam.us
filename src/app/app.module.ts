import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {NavbarComponent} from './components/navbar/navbar.component';
import {AboutMeComponent} from "./components/about-me/about-me.component";
import {EducationComponent} from "./components/education/education.component";
import {WorkExperienceComponent} from "./components/work-experience/work-experience.component";
import {SkillsComponent} from "./components/skills/skills.component";


@NgModule({
  declarations: [
    AppComponent,
    WorkExperienceComponent,
    AboutMeComponent,
    SkillsComponent,
    NavbarComponent,
    EducationComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
