import {Cliente} from './app.component';
import {HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

	
	
  constructor(private http:HttpClient) {}
  
  getData(): Observable<Array<Cliente>> {
	  
	  const url = "http://localhost:8080/api/v1/clientes/";
	  return this.http.get<Array<Cliente>>(url, requestOptions);
  }  
}

const headerDict = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type'
}

const requestOptions = {                                                                                                                                                                                 
	headers: new HttpHeaders(headerDict), 
};
