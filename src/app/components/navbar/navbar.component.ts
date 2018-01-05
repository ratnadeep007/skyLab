import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  numLikes: number = 0;
  showLikes: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  liked() {
    this.numLikes = this.numLikes + 1
    this.showLikes = true;
  }

}
