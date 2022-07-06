import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  siteLanguage: string;
  siteLocale: string;
  languageList = [
    { code: 'en', label: 'English' },
    { code: 'it', label: 'Italian' }
  ];
  constructor() { }
  ngOnInit() {
  this.siteLocale = window.location.pathname.split('/')[1];
  
  this.siteLanguage = this.languageList.find(f => f.code === this.siteLocale).label;
  }
}

