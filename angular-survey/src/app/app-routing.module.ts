import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SupervisionSurveyComponent} from './supervision-survey/supervision-survey.component'
import {SurveySection1Component} from './survey-section1/survey-section1.component'

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch: 'full' },
  {path: 'home', component: SupervisionSurveyComponent },
  {path: 'sections1', component: SurveySection1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
