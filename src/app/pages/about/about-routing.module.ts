import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {AboutPagesComponent} from "./components/about-pages/about-pages.component";

const routes = [
  {
    path: '',
    component: AboutPagesComponent,
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AboutRoutingModule { }
