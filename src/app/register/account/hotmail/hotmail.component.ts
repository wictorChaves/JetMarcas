import { Card } from './../../../shared/card.model';
import { AccountHotmailService } from './../../../services/accountHotmail.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hotmail',
  templateUrl: './hotmail.component.html',
  styleUrls: ['./hotmail.component.css'],
  providers: [AccountHotmailService]
})
export class HotmailComponent implements OnInit {

  @Input() searchValue: string;
  @ViewChild('card') card;

  constructor(private accountHotmailService: AccountHotmailService) { }

  ngOnInit() {
    this.card.card = new Card(0, 'assets/cards/hotmail.png', 'https://www.hotmail.com/', 'active', '');
  }

  searchEvent(searchValue: string) {
    this.card.status = 'loading';
    this.accountHotmailService.userExist(searchValue)
      .then((exist: boolean) => {
        if (exist) {
          this.card.status = 'active';
        } else {
          this.card.status = 'inactive';
        }
      });
  }

}
