import { Component } from '@angular/core';
import {ServicesService} from './services.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http';
  
  constructor(private services:ServicesService) {
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
