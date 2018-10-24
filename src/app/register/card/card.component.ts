import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/shared/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: Card;
  public activeCard: string = '';

  constructor() {
    
  }

  ngOnInit() {
    this.activeCard = (this.card.isActive) ? 'active' : '';
  }

}
