import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  snackBarRef: any;

  constructor(public snackBar:  MatSnackBar) { }

  ngOnInit() {
    this.snackBarRef = this.snackBar.open('Created using Angular. Scroll Down', 'Dismiss', {
      duration: 5000,
    });
  }


}
