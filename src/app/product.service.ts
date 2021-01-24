import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginationResponse } from '../app/book';
import { environment } from '../environments/environment';

@Injectable()
export class ProductService {

    constructor(private http: HttpClient) { }

  searchBooks(title: string, pageNo: number): Observable<PaginationResponse> {
    return this.http.get<PaginationResponse>(environment.apiBaseUrl + '/books/search/' + title + '?page=' +
    pageNo + '&size=' + environment.pageSize);
  }

  getAllBooks(pageNo: number): Observable<PaginationResponse> {
    return this.http.get<PaginationResponse>(environment.apiBaseUrl + '/books?page=' +
    pageNo + '&size=' + environment.pageSize);
  }
}
