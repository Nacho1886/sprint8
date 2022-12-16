import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiRequestsService {

  constructor(private http: HttpClient) { 
    this.http.get()
  }
}
