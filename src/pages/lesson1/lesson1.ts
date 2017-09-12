import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Lesson1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lesson1',
  templateUrl: 'lesson1.html',
})
export class Lesson1Page implements OnInit {
  private lesson: any;

  ngOnInit (): void {
    this.lesson = this.navParams.get('lesson');
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Lesson1Page');
  }

}
