import {Component, Input, OnInit} from '@angular/core';
import {EntryInterface} from "../../../../../entries.interface";

@Component({
  selector: 'ae-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
  @Input() entry: EntryInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
