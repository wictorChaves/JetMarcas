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

  public google: boolean;
  public cards: Card[] = [];
  public inforCards: any[] = [];

  constructor(private accountYoutubeService: AccountYoutubeService) {
    this.inforCards = [
      { 'id': 1, 'image': 'assets/cards/instagram.png', 'isActive': false, 'description': 'descrição' },
      { 'id': 2, 'image': 'assets/cards/facebook.png', 'isActive': false, 'description': 'descrição' },
      { 'id': 3, 'image': 'assets/cards/youtube.png', 'isActive': false, 'description': 'descrição' },
      { 'id': 4, 'image': 'assets/cards/twitter.png', 'isActive': false, 'description': 'descrição' },
    ];
    this.fillObjsCards();
  }

  fillObjsCards() {
    this.cards = [];
    for (let inforCard of this.inforCards) {
      this.cards.push(new Card(inforCard.id, inforCard.image, inforCard.isActive, inforCard.description));
    }
  }

  ngOnInit() {
  }

  searchEvent(searchValue: string) {
    this.accountYoutubeService.userExist(searchValue)
      .then((exist: boolean) => {
        if (exist) {
          this.inforCards[2].isActive = true;
        } else {
          this.inforCards[2].isActive = false;
        }
        this.fillObjsCards();
      });
  }

}
