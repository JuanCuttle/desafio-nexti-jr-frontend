import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  urlPedidos = "http://localhost:8080/api/v1/pedidos/";

  constructor(private http:HttpClient) { }

  getPedidos(): Observable<Array<any>> {
	  return this.http.get<Array<any>>(this.urlPedidos, requestOptions);
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