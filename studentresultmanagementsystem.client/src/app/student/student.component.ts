import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface Student {
  studentID: number;
  userID: number;
  firstName: string;
  lastName: string;
  grade: string;
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  public students: Student[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.http.get<Student[]>('/api/Student/Index').subscribe(
      (result) => {
        this.students = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
