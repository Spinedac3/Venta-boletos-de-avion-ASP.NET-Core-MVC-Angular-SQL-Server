import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data-service.service';
import { IVuelo } from '../shared/ivuelo';
import { Router } from '@angular/router';
import { Body } from '../shared/body';

@Component({
  selector: 'app-vuelo-ida',
  templateUrl: './solo-ida.component.html',
  styleUrls: ['./solo-ida.component.css']
})
export class SoloIdaComponent implements OnInit {

  constructor(private dataService: DataService, 
      private router: Router) {
    
    }
    body: Body = new Body();
    vuelos: IVuelo[] = this.dataService.filtradoVuelosIda;
  errorMessage = '';

  anadirASeleccion(vuelo: IVuelo) {
      this.dataService.añadirAOrden(vuelo);
      this.body.atributo1 = "page name: soloIda";
      this.body.atributo2 = "action name: añadirAseleccion";
      this.dataService.pageReady(this.body).subscribe(success => {
          if (success) {
              console.log("action funciono");
          }

      }, err => console.log("no guardo action"));
 
  }

    ngOnInit() {
        this.body.atributo1 = "Page name: Solo Ida";
        this.dataService.pageReady(this.body).subscribe(success => {
            if (success) {
                console.log("Page Ready funciono");
            }

        }, err => console.log("no guardo page Ready"));
      if (this.router.url == '/vuelosIda') {
          this.dataService.ida = "Ida";
      } 
  }

}
