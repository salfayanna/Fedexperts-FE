import { Injectable } from '@angular/core';
import { Post } from './postInterface';
import { throwError, Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ErrorHandlingService } from '../ErrorHandlingService/error-handling.service';

@Injectable({
  providedIn: 'root'
})

export class GetPostandCommentService {

  baseUrl = 'http://10.27.6.115:8080';

  constructor(private http: HttpClient,
    private errorHandlingService: ErrorHandlingService) { }

 // ---------------- GET POST ------------------

 getPosts(subject: string): Observable<Post[]> {
  const url = this.baseUrl + `/forum/${subject}`;
  return this.http.get<Post[]>(url, { headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'} })
    .pipe(catchError((e) => this.errorHandler(e)));
}

// ---------------- GET POST ID ------------------

getPostsId(id: number): Observable<Post[]> {
  const url = this.baseUrl + `/post/${id}`;
  return this.http.get<Post[]>(url, { headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'} })
    .pipe(catchError((e) => this.errorHandler(e)));
}

 // ------------------ WRITE POST ------------------

  addPost(postId: string, username: string, content: string, token: string): Observable<Object> {
    const url = this.baseUrl + `/posts/${postId}/comments`;
    const body = {
      'username': `${username}`,
      'content': `${content}`
    };
    const header = {
      headers: new HttpHeaders
        ({
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          'token': `Bearer ${token}`
        })
    };
    return this.http.post<any>(url, body, header)
      .pipe(catchError((e) => this.errorHandler(e)));
  }


// ---------------- VOTE POST ------------------

votePost(postId: string, vote: string, token: string): Observable<Object> {
  const url = this.baseUrl + `/posts/${postId}/vote`;
  const body = {
    'type': `${vote}`
  };
  return this.http.put<Object>(url, body, { headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'AuthToken': `${token}`}, observe : 'response' })
    .pipe(catchError((e) => this.errorHandler(e)));
}

  // ------------------ WRITE COMMENT ------------------

  addComment(postId: string, username: string, content: string, token: string): Observable<Object> {
    const url = this.baseUrl + `/posts/${postId}/comments`;
    const body = {
      'username': `${username}`,
      'content': `${content}`
    };
    const header = {
      headers: new HttpHeaders
        ({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'AuthToken': `${token}`
        })
    };
    return this.http.post<any>(url, body, header)
      .pipe(catchError((e) => this.errorHandler(e)));
  }

   // ---------------- GET COMMENTS ------------------

 getComments(token: string, subject: string): Observable<Post[]> {
  const url = this.baseUrl + '/posts';
  return this.http.get<Post[]>(url, { headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Token': `${token}` } })
    .pipe(catchError((e) => this.errorHandler(e)));
}

   // ------------------ ERROR HANDLING ------------------

   private errorHandler(error: HttpErrorResponse) {
    this.errorHandlingService.handleError(error);
    return throwError(error);
  }

}
