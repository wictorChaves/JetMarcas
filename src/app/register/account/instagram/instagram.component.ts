import { Card } from 'src/app/shared/card.model';
import { AccountInstagramService } from './../../../services/accountInstagram.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css'],
  providers: [AccountInstagramService]
})
export class InstagramComponent implements OnInit {

  @Input() searchValue: string;
  @ViewChild('card') card;

  constructor(private accountInstagramService: AccountInstagramService) { }

  ngOnInit() {
    this.card.card = new Card(1, 'assets/cards/instagram.png', 'https://www.instagram.com/', 'active', '');
  }

  searchEvent(searchValue: string) {
    this.card.status = 'loading';
    this.accountInstagramService.userExist(searchValue)
      .then((exist: boolean) => {
        if (exist) {
          this.card.status = 'active';
        } else {
          this.card.status = 'inactive';
        }
      });
  }

}
