import { Card } from './../../../shared/card.model';
import { AvailableDomain } from './../../../services/availableDomain.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css'],
  providers: [AvailableDomain]
})
export class DomainComponent implements OnInit {

  @Input() searchValue: string;
  @ViewChild('card') card;

  constructor(private availableDomain: AvailableDomain) { }

  ngOnInit() {
    this.card.card = new Card(5, 'assets/cards/domain.png', '#', 'inactive', '');
  }

  searchEvent(searchValue: string) {
    this.card.status = 'loading';
    this.availableDomain.domainExist(searchValue)
      .then((exist: boolean) => {
        if (exist) {
          this.card.status = 'active';
        } else {
          this.card.status = 'inactive';
        }
      });
  }

}
