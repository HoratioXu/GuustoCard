import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  price: number = 25;
  selectedMerchant:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedMerchant = navParams.get('merchant');
    console.log(this.selectedMerchant);
  }

  remove() {
    this.navCtrl.popToRoot();
  }
}
