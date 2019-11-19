import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data-service.service';
import { SelectItem } from 'primeng/api';
import { IVuelo } from '../../shared/ivuelo';
import { Router } from '@angular/router';
import { Body } from '../../shared/body';

@Component({
    selector: 'app-crear-vuelo',
    templateUrl: "crear-vuelo.component.html",
    styleUrls:["crear-vuelo.component.css"]
})
export class CrearVueloComponent implements OnInit {
    fechaPartida: Date;
    origenes: SelectItem[];
    selectedOrigenes: string;
    destinos: SelectItem[];
    selectedDestinos: string;
    precioTurista: number;
    precioEjecutivo: number;
    horaPartida: number;
    horaLlegada: number;
    noParadas: number;
    noVueloEscala: string;
    noVueloDestino: string;
    duracion: number;
    error: string;
    body: Body = new Body();
    vuelo: IVuelo = new IVuelo();
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
    constructor(private dataService: DataService, private router: Router) {
        this.origenes = [
            { label: 'Guatemala', value: 'Guatemala' },
            { label: 'Aberdeen', value: 'Aberdeen' },
            { label: 'Beijing', value: 'Beijing' },
            { label: 'Colorado Springs', value: 'Colorado Springs' },
            { label: 'Panama', value: 'Panama' },
            { label: 'Alajuela Costa Rica', value: 'Alajuela Costa Rica'}
        ]

        this.destinos = [
            { label: 'Guatemala', value: 'Guatemala' },
            { label: 'Aberdeen', value: 'Aberdeen' },
            { label: 'Beijing', value: 'Beijing' },
            { label: 'Colorado Springs', value: 'Colorado Springs' },
            { label: 'Panama', value: 'Panama' },
            { label: 'Alajuela Costa Rica', value: 'Alajuela Costa Rica' }
        ]
    }
    crear() {
        this.body.atributo1 = "page name: Crear-Vuelo";
        this.body.atributo2 = "action name: crear";
        this.dataService.pageReady(this.body).subscribe(success => {
            if (success) {
                console.log("action funciono");
            }

        }, err => console.log("no guardo action"));
        this.vuelo.origen = this.selectedOrigenes;
        this.vuelo.destino = this.selectedDestinos;
        this.vuelo.fechaPartida = this.formatDate(this.fechaPartida);
        this.vuelo.precioTurista = this.precioTurista;
        this.vuelo.precioEjecutivo = this.precioEjecutivo;
        this.vuelo.horaPartida = this.horaPartida;
        this.vuelo.horaLlegada = this.horaLlegada;
        this.vuelo.noParadas = this.noParadas;
        this.vuelo.noVueloEscala = this.noVueloEscala;
        this.vuelo.noVueloDestino = this.noVueloDestino;
        this.vuelo.duracion = this.duracion;
        this.dataService.crearVuelo(this.vuelo).subscribe(success => {
            if (success) {
                this.router.navigate(['vuelos']);
            }

        }, err => this.error = "No se pudo crear el Vuelo");
    }
    ngOnInit() {
        this.body.atributo1 = "page ready: Crear-Vuelo";
        this.dataService.pageReady(this.body).subscribe(success => {
            if (success) {
                console.log("Page ready funciono");
            }

        }, err => console.log("Page Ready no funciono"));
  }

}
