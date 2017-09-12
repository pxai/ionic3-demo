import {Component} from '@angular/core';
import {CourseProvider} from "../../providers/course/course";


/**
 templateUrl: 'course.html'
 <ion-list inset>
 <!--p *ngFor="let course of courses">
 {{course.id}} {{course.name}}
 </p-->
 </ion-list>
 */

@Component({
  selector: 'course',
  templateUrl: 'course.html'
})
export class CourseComponent {

  text: string;
  courses;

  constructor(private courseProvider: CourseProvider) {
    this.courses = this.courseProvider.getAllCourses();
    this.text = 'Hello World';
  }

}
