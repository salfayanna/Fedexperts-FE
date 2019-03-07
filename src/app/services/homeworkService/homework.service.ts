import { Injectable } from '@angular/core';
import { throwError, Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ErrorHandlingService } from '../ErrorHandlingService/error-handling.service';
import { Homework } from './hwInterface';

@Injectable({
  providedIn: 'root'
})
export class HomeworkService {

  baseUrl: '8080'

  constructor(private http: HttpClient,
    private errorHandlingService: ErrorHandlingService) { }

  getHomework(): Observable<Homework[]> {
    const url = this.baseUrl + '/homework';
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Requested-With':'XMLHttpRequest', 
        'content-type': 'application/json',
      })
    };
    return this.http.get<Homework[]>(url, httpOptions)
      .pipe(catchError((e) => this.errorHandler(e)));
  }

  sendHomework(newHomework: Homework): Observable<Object> {
    const url = this.baseUrl + '/homework';
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Requested-With':'XMLHttpRequest',
        'content-type': 'application/json',
      })
    };
    return this.http.post(url,newHomework, httpOptions)
    .pipe(catchError((e) => this.errorHandler(e)));
  }
  private errorHandler(error: HttpErrorResponse) {
    this.errorHandlingService.handleError(error);
    return throwError(error);
  }
}
