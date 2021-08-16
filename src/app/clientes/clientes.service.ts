import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  urlClientes = "http://localhost:8080/api/v1/clientes/";

  constructor(private http:HttpClient) { }

  getClientes(): Observable<Array<any>> {
	  return this.http.get<Array<any>>(this.urlClientes, requestOptions);
  }

  postCliente(nome: any, cpf: any, dataDeNascimento: any): Observable<any> {
    return this.http.post(this.urlClientes, {'nome': nome, 'cpf': cpf, 'dataDeNascimento': dataDeNascimento}, requestOptions);
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

export interface Cliente {
	id: number;
	nome: String;
	cpf: String;
	dataDeNascimento: String;
};