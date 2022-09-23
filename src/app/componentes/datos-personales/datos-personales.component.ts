import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../servicios/portfolio.service';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {
    datosPersonalesList: any;

  constructor(
    private datosPortfolio:PortfolioService
  ) { }

  ngOnInit(): void {
    //Accedemos al metodo del servicio
    this.datosPortfolio.obtenerDatos().subscribe(dato=>{
      this.datosPersonalesList=dato.data_persons;
    });
  }

}
