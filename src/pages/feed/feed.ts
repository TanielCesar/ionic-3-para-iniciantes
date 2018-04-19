import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { isString } from 'ionic-angular/util/util';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public nome_usuario:string = "Taniel Balsanelli do código"
  private nTotal:number 
  private cMsg
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumeros(n1,n2): number {
    this.nTotal = n1+n2
    this.cMsg = "Valor total: " + this.nTotal
    return this.cMsg
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

}
