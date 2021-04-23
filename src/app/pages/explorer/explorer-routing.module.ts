import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {ExplorerPageComponent} from "./components/explorer-page/explorer-page.component";

const router = [
  {
    path: '',
    component: ExplorerPageComponent,
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [],
  imports: [
   RouterModule.forChild(router)
  ]
})
export class ExplorerRoutingModule { }
