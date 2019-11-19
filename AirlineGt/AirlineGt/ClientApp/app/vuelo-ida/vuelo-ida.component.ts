import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data-service.service';
import { IVuelo } from '../shared/ivuelo';
import { Router } from '@angular/router';
import { Body } from '../shared/body';

@Component({
  selector: 'app-vuelo-ida',
  templateUrl: './vuelo-ida.component.html',
  styleUrls: ['./vuelo-ida.component.css']
})
export class VueloIdaComponent implements OnInit {

  constructor(private dataService: DataService, 
      private router: Router) {
    
    }
    body: Body = new Body();
    vuelos: IVuelo[] = this.dataService.filtradoVuelosIda;
  errorMessage = '';

  anadirASeleccion(vuelo: IVuelo) {
      this.dataService.añadirAOrden(vuelo);
      this.body.atributo1 = "page name: vuelosIda";
      this.body.atributo2 = "action name: añadirAseleccion";
      this.dataService.pageReady(this.body).subscribe(success => {
          if (success) {
              console.log("action funciono");
          }

      }, err => console.log("no guardo action"));
 
  }

  ngOnInit() {
      if (this.router.url == '/vuelosIda') {
          this.dataService.ida = "Ida";
      } 
      this.body.atributo1 = "page ready: vuelosIda";
      this.dataService.pageReady(this.body).subscribe(success => {
          if (success) {
              console.log("page ready funciono");
          }

      }, err => console.log("no guardo page ready"));
  }

}
