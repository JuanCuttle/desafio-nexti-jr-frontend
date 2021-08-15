import { Component, OnInit } from '@angular/core';
import {ClientesService} from './clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Array<any> = [];

  constructor(private services:ClientesService) { }

  ngOnInit(): void {
  }

  getClientes() {
	  this.services.getClientes().subscribe((data) => {
		  this.clientes =  data;
	  });
  }

}
