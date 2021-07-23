import { Component } from '@angular/core';
import {ServicesService} from './services.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http';
  
  data: Array<Cliente>;
  
  constructor(private services:ServicesService) {
	  this.data = new Array<Cliente>();
  }
  
  getDataFromAPI() {
	  this.services.getData().subscribe((data) => {
		  this.data = data;
	  });
  }
}

export interface Cliente {
	id: number;
	nome: String;
	cpf: String;
	dataDeNascimento: String;
};
