import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data-service.service';
import { SelectItem } from 'primeng/api';
import { Body } from '../shared/body';

@Component({
  selector: 'app-informacion-tarjeta',
  templateUrl: './informacion-tarjeta.component.html',
  styleUrls: ['./informacion-tarjeta.component.css']
})
export class InformacionTarjetaComponent implements OnInit {

    constructor(private dataService: DataService) {
        this.franquicias = [
            { label: 'Visa', value: 'Visa' },
            { label: 'Mastercard', value: 'Mastercard' }

        ];
        this.tipos = [
            { label: 'DPI', value: 'DPI' },
            { label: 'Pasaporte', value: 'Pasaporte' }
        ]
        this.lugares = [
            { label: 'Guatemala', value: 'Guatemala' },
            { label: 'Mexico', value: 'Mexico' }
        ]
    }
    franquicias: SelectItem[];
    tipos: SelectItem[];
    lugares: SelectItem[];
    selectedLugar: string;
    selectedTipo: string;
    selectedFranquicia: string;
    body: Body = new Body();
    numeroIdentificacion: number;
    domicilio: string;
    direccion: string;
    departamento: string;
    ciudad: string;
    codigoPostal: string;
    numeroTarjeta: number;
    fechaVencimiento: string;
    ccv: number;
  // confirmarTarjeta() {
        /*this.dataService.seleccion.pasajero.tipoDocumento = this.selectedTipo;
        this.dataService.seleccion.pasajero.numeroIdentificacion = this.numeroIdentificacion;
        this.dataService.seleccion.pasajero.domicilio = this.domicilio;
        this.dataService.seleccion.pasajero.direccion = this.direccion;
        this.dataService.seleccion.pasajero.departamento = this.departamento;
        this.dataService.seleccion.pasajero.ciudad = this.ciudad;
        this.dataService.seleccion.pasajero.codigoPostal = this.codigoPostal;
        this.dataService.seleccion.pasajero.tarjeta.franquicia = this.selectedFranquicia;
        this.dataService.seleccion.pasajero.tarjeta.lugarEmision = this.selectedLugar;
        this.dataService.seleccion.pasajero.tarjeta.numeroTarjeta = this.numeroTarjeta;
        this.dataService.seleccion.pasajero.tarjeta.fechaVencimiento = this.fechaVencimiento;
        this.dataService.seleccion.pasajero.tarjeta.ccv = this.ccv;*/
    //    console.log(this.dataService.seleccion)
    //}
    ngOnInit() {
        this.body.atributo1 = "page ready: Informacion Tarjeta";
        this.dataService.pageReady(this.body).subscribe(success => {
            if (success) {
                console.log("Page ready funciono");
            }

        }, err => console.log("Page Ready no funciono"));
  }

}
