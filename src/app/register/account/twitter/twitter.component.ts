import { Card } from 'src/app/shared/card.model';
import { AccountTwitterService } from './../../../services/accountTwitter.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css'],
  providers: [AccountTwitterService]
})
export class TwitterComponent implements OnInit {

  @Input() searchValue: string;
  @ViewChild('card') card;

  constructor(private accountTwitterService: AccountTwitterService) { }

  ngOnInit() {
    this.card.card = new Card(1, 'assets/cards/twitter.png', 'https://www.twitter.com/', 'active', '');
  }

  searchEvent(searchValue: string) {
    this.card.status = 'loading';
    this.accountTwitterService.userExist(searchValue)
      .then((exist: boolean) => {
        if (exist) {
          this.card.status = 'active';
        } else {
          this.card.status = 'inactive';
        }
      });
  }

}
