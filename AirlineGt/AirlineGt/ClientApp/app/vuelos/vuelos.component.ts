import { Component, OnInit } from '@angular/core';
import { IVuelo } from '../shared/ivuelo';
import { DataService } from '../shared/data-service.service';
import { Body } from '../shared/body';

@Component({
    selector: 'app-vuelos',
    templateUrl:"./vuelos.component.html",
  styles: []
})
export class VuelosComponent implements OnInit {

    errorMessage = '';
    _listFilter = '';

    constructor(private dataService: DataService) {

    }
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredVuelos = this.listFilter ? this.performFilter(this.listFilter) : this.vuelos;
    }
    body: Body = new Body();
    filteredVuelos: IVuelo[] = [];
    vuelos: IVuelo[] = [];

    performFilter(filterBy: string): IVuelo[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.vuelos.filter((vuelo: IVuelo) =>
            vuelo.origen.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }


    ngOnInit() {
        this.dataService.getVuelos().subscribe({
            next: vuelos => {
                this.vuelos = vuelos;
                this.filteredVuelos = this.vuelos;
            },
            error: err => this.errorMessage = err
        });
        this.body.atributo1 = "page ready: Vuelos";
        this.dataService.pageReady(this.body).subscribe(success => {
            if (success) {
                console.log("Page ready funciono");
            }

        }, err => console.log("Page Ready no funciono"));
    }
}
