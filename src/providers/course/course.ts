import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CourseProvider {

  constructor(public http: Http) {
    console.log('Hello CourseProvider Provider');
  }

  getAllCourses () {
    return this.http
      .get('http://localhost:3000/courses.json')
      .map(response => response.json())
    //.get('data.agenda.wedeploy.io/talks')
  }

  createCourse(title, description) {
    return this.http
      .post('http://localhost:3000/courses.json', {title, description});
  }

}
