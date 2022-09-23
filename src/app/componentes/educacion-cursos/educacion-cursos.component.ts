import { Component, OnInit } from '@angular/core';
import { PortfolioService } from "../../servicios/portfolio.service";

@Component({
  selector: 'app-educacion-cursos',
  templateUrl: './educacion-cursos.component.html',
  styleUrls: ['./educacion-cursos.component.css']
})
export class EducacionCursosComponent implements OnInit {
  //Guardamo al info de educacion y cursos en una variable
  educacionList:any;

  constructor(
    private datosPortfolio: PortfolioService
  ) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(dato=>{
      this.educacionList=dato.schools;
    })
  }

}
