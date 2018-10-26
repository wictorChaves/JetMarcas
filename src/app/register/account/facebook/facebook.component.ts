import { Card } from 'src/app/shared/card.model';
import { AccountFacebookService } from './../../../services/accountFacebook.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css'],
  providers: [AccountFacebookService]
})
export class FacebookComponent implements OnInit {

  @Input() searchValue: string;
  @ViewChild('card') card;

  constructor(private accountFacebookService: AccountFacebookService) { }

  ngOnInit() {
    this.card.card = new Card(1, 'assets/cards/facebook.png', 'https://www.facebook.com/', 'inactive', '');
  }

  searchEvent(searchValue: string) {
    this.card.status = 'loading';
    this.accountFacebookService.userExist(searchValue)
      .then((exist: boolean) => {
        if (exist) {
          this.card.status = 'active';
        } else {
          this.card.status = 'inactive';
        }
      });
  }

}
