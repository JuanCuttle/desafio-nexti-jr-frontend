import { Component, OnInit } from '@angular/core';
import { ProdutosService } from './produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: Array<any> = [];

  constructor(private services:ProdutosService) { }

  ngOnInit(): void {
  }

  getProdutos() {
	  this.services.getProdutos().subscribe((data) => {
		  this.produtos =  data;
	  });
  }
}
