/* 
Este servicion sera el encargado de manejar todos los datos del portfolio, y sera consumido por cada componente para que puedan mostrar su vista.
*/
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(
    private http:HttpClient
  ) { }

  obtenerDatos():Observable<any>{
    //console.log("Consumiendo el servicio portfolio");
    return this.http.get('../assets/data/data.json');
  }
}
