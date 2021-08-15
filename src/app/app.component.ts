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
  
  constructor(private services:ServicesService) {
	  //this.data = new Array<Cliente>();
  }
  
  getDataFromAPI() {
	  this.services.getData().subscribe((data) => {
		  this.clientes =  data;
      console.log(this.clientes);
	  });
  }
}

export interface Cliente {
	id: number;
	nome: String;
	cpf: String;
	dataDeNascimento: String;
};
