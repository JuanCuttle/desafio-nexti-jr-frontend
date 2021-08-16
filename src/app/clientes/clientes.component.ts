import { Component, OnInit } from '@angular/core';
import {ClientesService} from './clientes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Array<any> = [];

  nome: any;
  cpf: any;
  dataDeNascimento: any;

  constructor(private services:ClientesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  getClientes() {
	  this.services.getClientes().subscribe((data) => {
		  this.clientes =  data;
	  });
  }

  postCliente(){
    this.route.queryParamMap.subscribe(
      (params => {
        console.log(params.keys);
        //this.nome = params.nome;
        //console.log(this.nome);
      })
    );
    this.services.postCliente(this.nome, this.cpf, this.dataDeNascimento).subscribe();
  }

}
