import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { EmpresaInterface } from '../../models/empresa-interface';


@Component({
  selector: 'app-list-empresas',
  templateUrl: './list-empresas.component.html',
  styleUrls: ['./list-empresas.component.css']
})
export class ListEmpresasComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  private empresas: EmpresaInterface;

  ngOnInit() {
    this.getListEmpresas();
  }

  getListEmpresas() {
    this.dataApi.getListEmpresas().subscribe((empresas: EmpresaInterface) => (this.empresas = empresas));
  }

}
