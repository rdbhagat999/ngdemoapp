import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Employee } from '../models/employee';
import { Observable, of, throwError } from 'rxjs';
import { retry, catchError, map, first, tap } from 'rxjs/operators';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  // API path
  base_path = 'http://localhost:3000/employees';

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient, private readonly transferState: TransferState, @Inject(PLATFORM_ID) private readonly platformId: string,) { }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  getUsers(num: number = 3) {

    // const randomusers_key = makeStateKey('randomusers');

    // if (this.transferState.hasKey(randomusers_key)) {

    //   const users = this.transferState.get(randomusers_key, null);
    //   this.transferState.remove(randomusers_key);
    //   return of(users);

    // } else {

    //   return this.http.get(`https://jsonplaceholder.typicode.com/users`)
    //     .pipe(
    //       first(),
    //       tap((results: any) => {
    //         if (isPlatformServer(this.platformId)) {
    //           this.transferState.set(randomusers_key, results);
    //         }
    //       }),
    //       catchError(this.handleError)
    //     );
    // }

    return this.http.get(`https://jsonplaceholder.typicode.com/users`)
      .pipe(
        first(),
        catchError(this.handleError)
      );

  }

  getPosts(num: number = 3) {

    return this.http.get(`https://jsonplaceholder.typicode.com/users/1/posts`)
      .pipe(
        first(),
        catchError(this.handleError)
      );

  }


  // Create a new item
  createItem(item): Observable<Employee> {
    return this.http
      .post<Employee>(this.base_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Get single Employee data by ID
  getItem(id): Observable<Employee> {
    return this.http
      .get<Employee>(this.base_path + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Get Employees data
  getList(): Observable<Employee[]> {
    return this.http
      .get<Employee[]>(this.base_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Update item by id
  updateItem(id, item): Observable<Employee> {
    return this.http
      .put<Employee>(this.base_path + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Delete item by id
  deleteItem(id) {
    return this.http
      .delete<Employee>(this.base_path + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

}
