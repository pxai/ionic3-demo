import {Component, NgModule} from '@angular/core';
import {CourseProvider} from "../../providers/course/course";
import { AsyncPipe } from '@angular/common';

/**
 templateUrl: 'course.html'
 */
import { CommonModule } from '@angular/common';

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
