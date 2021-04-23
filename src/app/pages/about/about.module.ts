import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPagesComponent } from './components/about-pages/about-pages.component';
import {AboutRoutingModule} from "./about-routing.module";



@NgModule({
  declarations: [AboutPagesComponent],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
