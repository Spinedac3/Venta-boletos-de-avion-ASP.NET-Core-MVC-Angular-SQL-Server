import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data-service.service';
import { Body } from '../shared/body';

@Component({
  selector: 'app-equipaje-adicional',
  templateUrl: './equipaje-adicional.component.html',
  styleUrls: ['./equipaje-adicional.component.css']
})
export class EquipajeAdicionalComponent implements OnInit {
    precio: number = 15;
    constructor(private dataService: DataService) { }
    body: Body = new Body();
    anadir() {
        this.dataService.seleccion.maleta += this.precio;
        this.body.atributo1 = "page name: Equipaje Adicional";
        this.body.atributo2 = "action name: anadir()";
        this.dataService.pageReady(this.body).subscribe(success => {
            if (success) {
                console.log("action funciono");
            }

        }, err => console.log("no guardo action"));
    }
    ngOnInit() {
        this.body.atributo1 = "page ready: Equipaje Adicional";
        this.dataService.pageReady(this.body).subscribe(success => {
            if (success) {
                console.log("Page ready funciono");
            }

        }, err => console.log("Page Ready no funciono"));
  }

}
