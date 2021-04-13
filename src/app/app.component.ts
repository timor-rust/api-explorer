import {Component, OnDestroy, OnInit} from '@angular/core';
import {CoreService} from "./core.service";
import {EntriesInterface, EntryInterface} from "./entries.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'api-explorer';

  constructor(private coreService:CoreService) {
  }

  ngOnInit() {
    this.getAllEntries();
    this.getCategories();
  }

  categories: string[] = [];
  categoriesSub: any;
  getCategories() {
    this.categoriesSub = this.coreService.getCategory()
      .subscribe((data:string[]) => {
      this.categories = ['All', ...data];
    });
  }

  entriesSub: any;
  getAllEntries() {
     if(this.entriesByTitleSub) { this.entriesByTitleSub.unsubscribe();}
    this.entriesSub = this.coreService.getEntries()
      .subscribe((data:EntriesInterface) => this.setData(data.entries));
  }

  entriesByTitleSub: any;
  getEntriesByTitle(title: string) {
    this.entriesSub.unsubscribe();
    this.entriesByTitleSub = this.coreService.getEntryByTitle(title)
      .subscribe((data:EntriesInterface) => this.setData(data.entries));
  }

  entries: EntryInterface[] = [];
  entriesBackup: EntryInterface[] = [];
  setData(data) {
    this.entriesBackup = data;
    this.entries = data;
  }


  filterFunc(filterTyped, userSelection) {
    if (filterTyped === 'protocol') {
      this.entries = this.entriesBackup.filter((entry:EntryInterface) => {
       return userSelection === 'HTTPS' ? entry.HTTPS : userSelection === 'HTTP' ? !entry.HTTPS : true;
      })
    }
    if (filterTyped === 'category') {
      this.entries = this.entriesBackup.filter((entry:EntryInterface) => {
        return userSelection !== 'All' ? entry.Category === userSelection : true;
      });
    }
  }

  ngOnDestroy() {
    if(this.entriesSub) {this.entriesSub.unsubscribe();}
    if(this.entriesByTitleSub) { this.entriesByTitleSub.unsubscribe();}
  }

}
