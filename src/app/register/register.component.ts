import { Card } from './../shared/card.model';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('domain') domain;
  @ViewChild('youtube') youtube;

  public cards: Card[] = [];
  public inforCards: any[] = [];
  public searchValue = '';

  constructor() {
    this.inforCards = [
      { 'id': 1, 'image': 'assets/cards/instagram.png', 'url': 'https://www.instagram.com/', 'status': 'active', 'description': 'descrição' },
      { 'id': 2, 'image': 'assets/cards/facebook.png', 'url': 'http://www.facebook.com/', 'status': 'inactive', 'description': 'descrição' },
      { 'id': 4, 'image': 'assets/cards/twitter.png', 'url': 'https://www.twitter.com/', 'status': 'loading', 'description': 'descrição' },
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
    this.domain.searchEvent(searchValue);
    this.youtube.searchEvent(searchValue);
  }

}
