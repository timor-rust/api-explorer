import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ae-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output() title$ = new EventEmitter(null);
  timeout: any = null;

  titleTyped(event) {
    if (this.timeout) { clearTimeout(this.timeout); }
    setTimeout(() => {
      this.title$.emit(event.target.value);
    },500);


  }

}
