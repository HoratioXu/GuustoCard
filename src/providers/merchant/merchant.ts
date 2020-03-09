import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const API = 'http://165.227.43.115:8080/merchant/merchant';

@Injectable()
export class MerchantProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MerchantProvider Provider');
  }


  queryMerchants(){
    return new Promise(resolve => {
      this.http.get(API).subscribe(data=>{
        resolve(data);
      }, error =>{
        console.log(error);
      });
    });
  }

}
