import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Plugins } from '@capacitor/core'
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  latitude;
  longitude;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    Plugins.Geolocation.getCurrentPosition().then((position)=>{
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
