import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data-service.service';
import { IVuelo } from '../../shared/ivuelo';
import { ActivatedRoute } from '@angular/router';
import { Body } from '../../shared/body';

@Component({
    selector: 'app-vuelo',
    templateUrl: "vuelo.component.html",
    styleUrls: ["vuelo.component.css"]
})
export class VueloComponent implements OnInit {
    vuelo: IVuelo;
    error: string;
    constructor(private dataService: DataService
        , private route: ActivatedRoute) { }

    getVuelo(id: number) {
        this.dataService.getVuelo(id).subscribe({
            next: vuelo => this.vuelo = vuelo,
            error: err => this.error = err,
        }
        );
    }
    body: Body = new Body();
    ngOnInit() {
        const param = this.route.snapshot.paramMap.get('id');
        if (param) {
            const id = +param;
            this.getVuelo(id);
        }
        this.body.atributo1 = "page ready: Vuelo Detail";
        this.dataService.pageReady(this.body).subscribe(success => {
            if (success) {
                console.log("Page ready funciono");
            }

        }, err => console.log("Page Ready no funciono"));
  }

}
