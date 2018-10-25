import { AccountYoutubeService } from './../services/accountYoutube.service';
import { Card } from './../shared/card.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AccountYoutubeService]
})
export class RegisterComponent implements OnInit {

  public cards: Card[] = [];
  public inforCards: any[] = [];

  constructor(private accountYoutubeService: AccountYoutubeService) {
    this.inforCards = [
      { 'id': 1, 'image': 'assets/cards/instagram.png', 'url': 'https://www.instagram.com/', 'status': 'active', 'description': 'descrição' },
      { 'id': 2, 'image': 'assets/cards/facebook.png', 'url': 'http://www.facebook.com/', 'status': 'inactive', 'description': 'descrição' },
      { 'id': 3, 'image': 'assets/cards/youtube.png', 'url': 'https://www.youtube.com/', 'status': 'loading', 'description': 'descrição' },
      { 'id': 4, 'image': 'assets/cards/twitter.png', 'url': 'https://www.twitter.com/', 'status': 'active', 'description': 'descrição' },
    ];
    this.fillObjsCards();
  }

  fillObjsCards() {
    this.cards = [];
    for (let inforCard of this.inforCards) {
      this.cards.push(new Card(inforCard.id, inforCard.image, inforCard.url, inforCard.status, inforCard.description));
    }
  }

  ngOnInit() {
  }

  searchEvent(searchValue: string) {
    this.accountYoutubeService.userExist(searchValue)
      .then((exist: boolean) => {
        if (exist) {
          //this.inforCards[2].isActive = true;
        } else {
          //this.inforCards[2].isActive = false;
        }
        this.fillObjsCards();
      });
  }

}
