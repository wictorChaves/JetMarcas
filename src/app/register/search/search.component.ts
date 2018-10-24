import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() searchValue = new EventEmitter<string>();

  public fieldSearchValue: string = '';

  constructor() { }

  ngOnInit() {

  }

  clickSearch() {
    this.searchValue.emit(this.fieldSearchValue);
  }

  onKeySearch(event: any) {
    this.fieldSearchValue = event.target.value;
  }

}
