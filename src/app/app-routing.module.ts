import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";

const routes = [
  {
    path: '',
    redirectTo: 'explorer',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'explorer',
    loadChildren: () => import('./pages/explorer/explorer.module').then(m => m.ExplorerModule)
  },
  {
    path: '**',
    redirectTo: 'explorer'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabled',
      relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
