import { Component, OnInit } from '@angular/core';
import {CoreService} from "../../../../core.service";
import {EntriesInterface, EntryInterface} from "../../../../entries.interface";

@Component({
  selector: 'ae-explorer-page',
  templateUrl: './explorer-page.component.html',
  styleUrls: ['./explorer-page.component.scss']
})
export class ExplorerPageComponent implements OnInit {
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
    this.entriesByTitleSub = this.coreService.getEntryByTitle(title)// <= this title from $title
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
      this.entries = this.entriesBackup.filter((data:EntryInterface) => {
        return userSelection === 'HTTPS' ? data.HTTPS : userSelection === 'HTTP' ? !data.HTTPS : true;
      })
    }
    if (filterTyped === 'category') {
      this.entries = this.entriesBackup.filter((data:EntryInterface) => {
        return userSelection !== 'All' ? data.Category === userSelection : true;
      });
    }
  }

}

