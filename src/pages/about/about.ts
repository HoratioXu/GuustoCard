import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MerchantProvider} from "../../providers/merchant/merchant";
import { ContactPage } from "../contact/contact";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  merchants: any;
  buffer: any;
  selectedList: any ={};
  selectedItem: any;

  constructor(public navCtrl: NavController, public merchantProvider: MerchantProvider) {
    this.getMerchant();
  }

  setMerchant() {
    this.merchants = this.buffer;
    this.clearSelectedItem();
  }

  async getMerchant(){
    this.buffer = await this.merchantProvider.queryMerchants();
    for(let i of this.buffer){
      this.selectedList[i.id] = false;
    }
    this.merchants = this.buffer;
  }

  filter(ev: any) {
    this.setMerchant();
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.merchants = this.merchants.filter((item) => {
        return (item['name'].toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

  selectItem(item:any) {
    if(this.selectedItem !== undefined){
      if(this.selectedItem.id !== item.id){
        this.selectedList[this.selectedItem.id] = false;
      }
    }
    this.selectedList[item.id] = true;
    this.selectedItem = item;
  }

  clearSelectedItem(){
    if(this.selectedItem !== undefined){
      this.selectedList[this.selectedItem.id] = false;
      this.selectedItem = undefined;
    }
  }

  cancelBtn() {
    this.clearSelectedItem();
    this.navCtrl.pop();
  }

  selectBtn() {
    if(this.selectedItem !== undefined){
      this.navCtrl.push(ContactPage, {merchant: this.selectedItem}).then(()=>{
        this.clearSelectedItem();
      });
    }
  }
}
