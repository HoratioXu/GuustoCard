import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from "../about/about";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  price: number = 25;

  constructor(public navCtrl: NavController) {

  }

  select() {
    this.navCtrl.push(AboutPage);
  }
}