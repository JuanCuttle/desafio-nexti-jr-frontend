import { Component, OnInit } from '@angular/core';
import { PedidosService } from './pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedidos: Array<any> = [];

  constructor(private services:PedidosService) { }

  ngOnInit(): void {
  }

  getPedidos() {
	  this.services.getPedidos().subscribe((data) => {
		  this.pedidos =  data;
	  });
  }
}
