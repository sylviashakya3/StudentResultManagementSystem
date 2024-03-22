import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { environment } from '../../environments/environment';

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
export class StudentComponent implements OnInit {
  public students: Student[] = [];
  private baseUrl: string = environment.baseUrl + 'api/';
  constructor(private studentService: StudentService, private http: HttpClient) { }

  ngOnInit() {
    this.getStudents();
  }
   
  getStudents() {
   
    //this.http.get<Student[]>('/api/Student').subscribe(
    //  (result) => {
    //    this.students = result;
    //  },
    //  (error) => {
    //    console.error(error);
    //  }
    //);
    this.http.get<any[]>(this.baseUrl + `Students`, { responseType: 'json' }).subscribe((data: any[]) => {
      this.students = data;
    })
  }

}
