import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/shared/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: [
    './card.component.css',
    './loading.component.css'
  ]
})
export class CardComponent implements OnInit {

  @Input() card: Card;
  public status: string = '';

  constructor() {

  }

  ngOnInit() {
    this.updateStatus(this.card.status);
  }

  updateStatus(status){
    this.status = status;
  }

}
