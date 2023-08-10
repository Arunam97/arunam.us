import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AboutMeComponent} from "./components/about-me/about-me.component";
import {EducationComponent} from "./components/education/education.component";
import {WorkExperienceComponent} from "./components/work-experience/work-experience.component";
import {SkillsComponent} from "./components/skills/skills.component";

const routes: Routes = [
  {path: '', title: 'Arunam Gupta', component: AboutMeComponent},
  {path: 'education', title: 'Arunam\'s Education', component: EducationComponent},
  {path: "work-experience", title: 'Arunam\'s Work Experience', component: WorkExperienceComponent},
  {path: "skills", title: 'Arunam\'s Skills', component: SkillsComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
