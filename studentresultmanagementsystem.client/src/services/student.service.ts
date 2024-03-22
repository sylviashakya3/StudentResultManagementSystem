import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl: string = environment.baseUrl + 'api/';
 

  constructor(private http: HttpClient) { }
  

  getStudents(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + `Students`, { responseType: 'json' });
  }

}
