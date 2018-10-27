import { Card } from './../../../shared/card.model';
import { RegisterInpiService } from './../../../services/registerInpi.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-inpi',
  templateUrl: './inpi.component.html',
  styleUrls: ['./inpi.component.css'],
  providers: [RegisterInpiService]
})
export class InpiComponent implements OnInit {

  @Input() searchValue: string;
  @ViewChild('card') card;

  constructor(private registerInpiService: RegisterInpiService) { }

  ngOnInit() {
    this.card.card = new Card(1, 'assets/cards/inpi.png', 'http://www.inpi.gov.br/', 'active', '');
  }

  searchEvent(searchValue: string) {
    this.card.status = 'loading';
    this.registerInpiService.userExist(searchValue)
      .then((exist: boolean) => {
        if (exist) {
          this.card.status = 'active';
        } else {
          this.card.status = 'inactive';
        }
      });
  }

}
