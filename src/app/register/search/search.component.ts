import { AccountYoutubeService } from './../../services/accountYoutube.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [AccountYoutubeService]
})
export class SearchComponent implements OnInit {

  @Output() google = new EventEmitter<boolean>();

  public fieldSearchValue: string = '';

  constructor(private accountYoutubeService: AccountYoutubeService) { }

  ngOnInit() {

  }

  clickSearch() {
    this.accountYoutubeService.userExist(this.fieldSearchValue)
      .then((information: boolean) => {
        this.google.emit(information);
        console.log(information);
      });
  }

  onKeySearch(event: any) {
    this.fieldSearchValue = event.target.value;
  }

}
