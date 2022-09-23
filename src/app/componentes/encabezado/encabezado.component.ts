import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../servicios/portfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  myPortfolio: any;

  constructor(
    private datosPortfolio:PortfolioService
  ) { }

  ngOnInit(): void {
    //Accedemos al metodo del servicio
    this.datosPortfolio.obtenerDatos().subscribe(dato=>{
      console.log(dato);
      this.myPortfolio=dato;
    });
  }
}
