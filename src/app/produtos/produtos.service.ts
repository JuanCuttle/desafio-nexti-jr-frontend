import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  urlProdutos = "http://localhost:8080/api/v1/produtos/";

  constructor(private http:HttpClient) { }

  getProdutos(): Observable<Array<any>> {
	  return this.http.get<Array<any>>(this.urlProdutos, requestOptions);
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