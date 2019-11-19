import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IVuelo } from './ivuelo';

import { Router } from '@angular/router';
import { Boleto, Factura } from './factura';
import { Body } from './body';


@Injectable({
  providedIn: 'root'
})
export class DataService {
    filtradoVuelosIda: Array<IVuelo> = new Array<IVuelo>();
    filtradoVuelosRegreso: Array<IVuelo> = new Array<IVuelo>();
    private Vuelos = "/api/vuelos";
    private DesarrolloWeb = 'https://us-east-1.aws.webhooks.mongodb-stitch.com/api/client/v2.0/app/hackathon-gmoid/service/API/incoming_webhook/analitica';
    constructor(private http: HttpClient, private router: Router) { }
    ida: string;
    public seleccion: Factura = new Factura();
    private token: string = "";
    private tokenExpiration: Date = new Date();
    formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
       
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }
    public filtrarVueloIda(vuelos: IVuelo[], origen: string, destino: string, fecha: Date, fechaRegreso: Date) {
        
        this.filtradoVuelosIda = vuelos.filter(v => v.origen == origen && v.destino == destino &&
            this.formatDate(fecha) == v.fechaPartida.substring(0, 10));
       
        this.filtradoVuelosRegreso = vuelos.filter(v => v.destino == origen &&
            v.origen == destino && this.formatDate(fechaRegreso) == v.fechaPartida.substring(0, 10));
       
      
   }
  getVuelos(): Observable<IVuelo[]>{
    return this.http.get<IVuelo[]>(this.Vuelos)
    .pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

    getVuelo(id: number): Observable<IVuelo> {
        return this.getVuelos()
            .pipe(
                map((vuelo: IVuelo[]) => vuelo.find(p => p.id === id))
            );
    }
   
    public añadirAOrden(vuelo: IVuelo) {
        let boleto: Boleto = this.seleccion.boletos.find(i => i.vuelo.id == vuelo.id);

      if (boleto) {
       boleto.cantidad++;

  } else {

          boleto = new Boleto();
          boleto.vuelo = vuelo;
          boleto.cantidad = 1;

          this.seleccion.boletos.push(boleto);
      }


    }
    public get loginRequired(): boolean {
        return this.token.length == 0 || this.tokenExpiration > new Date();
    }

    public login(creds) {
        return this.http.post("/credencial/CreateToken", creds)
            .pipe(
                map((response: any) => {
                    let tokenInfo = response;
                    this.token = tokenInfo.token;
                    this.tokenExpiration = tokenInfo.expiration;
                    return true;
                }));
    }

    public Facturar() {
        var fecha: Date = new Date();
        if (!this.seleccion.numeroFactura) {
            this.seleccion.numeroFactura = fecha.getFullYear().toString() + Math.round(Math.random()).toString();
        }


        console.log();
        return this.http.post("/api/factura", this.seleccion)
            .pipe(
                map((response: any) => {

                    return true;
                }));
    }

    crearVuelo(vuelo: IVuelo) {
        return this.http.post("/api/vuelos", vuelo, {
            headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
        })
            .pipe(
                map((response: any) => {
                    return true;
                }));
    }

    public pageReady(body: Body) {
        return this.http.post(this.DesarrolloWeb, body).pipe(
            map((response: any) => {
                return true;
            }));
    }
  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
