import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../servicios/portfolio.service';

@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css']
})
export class AcercaDeMiComponent implements OnInit {
  myPortfolio: any;

  constructor(
    private datosPortfolio:PortfolioService
  ) { }

  ngOnInit(): void {
     //Accedemos al metodo del servicio
    this.datosPortfolio.obtenerDatos().subscribe(dato=>{
      this.myPortfolio=dato;
    });
  }

}
