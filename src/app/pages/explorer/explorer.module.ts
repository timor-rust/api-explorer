import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExplorerPageComponent } from './components/explorer-page/explorer-page.component';
import {ExplorerRoutingModule} from "./explorer-routing.module";
import {SearchComponent} from "./components/explorer-page/search/search.component";
import {FilterComponent} from "./components/explorer-page/filter/filter.component";
import {EntriesComponent} from "./components/explorer-page/entries/entries.component";
import {EntryComponent} from "./components/explorer-page/entry/entry.component";



@NgModule({
  declarations: [
    ExplorerPageComponent,
    SearchComponent,
    FilterComponent,
    EntriesComponent,
    EntryComponent
  ],
  imports: [
    CommonModule,
    ExplorerRoutingModule
  ]
})
export class ExplorerModule { }
