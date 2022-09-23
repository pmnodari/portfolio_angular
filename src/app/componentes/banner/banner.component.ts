import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../servicios/portfolio.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
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
