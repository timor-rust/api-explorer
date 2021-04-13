import {Component, Input, OnInit} from '@angular/core';
import { EntryInterface} from "../../entries.interface";

@Component({
  selector: 'ae-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.scss']
})

export class EntriesComponent implements OnInit {
  @Input() entries: EntryInterface[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
