import {Cliente} from './app.component';
import {HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

	urlClientes = "http://localhost:8080/api/v1/clientes/";
  urlProdutos = "http://localhost:8080/api/v1/produtos/";
  urlCPedidos = "http://localhost:8080/api/v1/pedidos/";
	
  constructor(private http:HttpClient) {}
  
  getClientes(): Observable<Array<any>> {
	  return this.http.get<Array<any>>(this.urlClientes, requestOptions);
  }

  getProdutos(): Observable<Array<any>> {
	  return this.http.get<Array<any>>(this.urlProdutos, requestOptions);
  }  

  getPedidos(): Observable<Array<any>> {
	  return this.http.get<Array<any>>(this.urlCPedidos, requestOptions);
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
