import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CourseComponent} from "../../components/course/course";
import {CourseProvider} from "../../providers/course/course";
import {Lesson1Page} from "../lesson1/lesson1";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, private courseProvider: CourseProvider) {

  }

  onSubmit(title, description) {
    this.courseProvider.createCourse(title, description).subscribe(x => console.log(x))
}

goLesson (lesson: number) {
  this.navCtrl.push(Lesson1Page, {lesson: {id: 1, name: 'Lesson1'}});
}

}
