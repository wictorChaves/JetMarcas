import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('domain') domain;
  @ViewChild('youtube') youtube;
  @ViewChild('facebook') facebook;
  @ViewChild('twitter') twitter;
  @ViewChild('instagram') instagram;
  @ViewChild('gmail') gmail;
  @ViewChild('hotmail') hotmail;
  @ViewChild('inpi') inpi;

  public searchValue = '';

  constructor() {
  }

  ngOnInit() {
  }

  searchEvent(searchValue: string) {
    this.domain.searchEvent(searchValue);
    this.youtube.searchEvent(searchValue);
    this.facebook.searchEvent(searchValue);
    this.twitter.searchEvent(searchValue);
    this.instagram.searchEvent(searchValue);
    this.gmail.searchEvent(searchValue);
    this.hotmail.searchEvent(searchValue);
    this.inpi.searchEvent(searchValue);
  }

}
