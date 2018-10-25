import { Card } from './../../../shared/card.model';
import { AccountYoutubeService } from './../../../services/accountYoutube.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css'],
  providers: [AccountYoutubeService]
})
export class YoutubeComponent implements OnInit {

  @Input() searchValue: string;
  @ViewChild('card') card;

  constructor(private accountYoutubeService: AccountYoutubeService) {

  }

  ngOnInit() {
    this.card.card = new Card(3, 'assets/cards/youtube.png', 'https://www.youtube.com/', 'inactive', '');
  }

  searchEvent(searchValue: string) {
    this.card.status = 'loading';
    this.accountYoutubeService.userExist(searchValue)
      .then((exist: boolean) => {
        if (exist) {
          this.card.status = 'active';
        } else {
          this.card.status = 'inactive';
        }
      });
  }

}
