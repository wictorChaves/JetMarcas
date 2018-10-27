import { Card } from './../../../shared/card.model';
import { AccountGmailService } from './../../../services/accountGmail.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gmail',
  templateUrl: './gmail.component.html',
  styleUrls: ['./gmail.component.css'],
  providers: [AccountGmailService]
})
export class GmailComponent implements OnInit {

  @Input() searchValue: string;
  @ViewChild('card') card;

  constructor(private accountGmailService: AccountGmailService) { }

  ngOnInit() {
    this.card.card = new Card(0, 'assets/cards/gmail.png', 'https://www.gmail.com/', 'active', '');
  }

  searchEvent(searchValue: string) {
    this.card.status = 'loading';
    this.accountGmailService.userExist(searchValue)
      .then((exist: boolean) => {
        if (exist) {
          this.card.status = 'active';
        } else {
          this.card.status = 'inactive';
        }
      });
  }

}
