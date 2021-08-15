import { Component } from '@angular/core';
import {ServicesService} from './services.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http';
  
  clientes: Array<any> = [];
  produtos: Array<any> = [];
  pedidos: Array<any> = [];
  
  constructor(private services:ServicesService) {
  }
  
  getClientes() {
	  this.services.getClientes().subscribe((data) => {
		  this.clientes =  data;
	  });
  }

  getProdutos() {
	  this.services.getProdutos().subscribe((data) => {
		  this.produtos =  data;
	  });
  }

  getPedidos() {
	  this.services.getPedidos().subscribe((data) => {
		  this.pedidos =  data;
	  });
  }
}

export interface Cliente {
	id: number;
	nome: String;
	cpf: String;
	dataDeNascimento: String;
};

export interface Produto {
	id: number;
	nome: String;
	descricao: String;
	preco: number;
  quantidade: number
};

export interface Pedido {
	id: number;
	idCliente: String;
	totalDaCompra: number;
	dataDaCompra: String;
  produtos: Array<number>;
};
