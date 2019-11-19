import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { SpinnerModule } from 'primeng/spinner';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { VueloIdaComponent } from './vuelo-ida/vuelo-ida.component';
import { SeleccionComponent } from './shared/seleccion/seleccion.component';
import { VuelosRegresoComponent } from './vuelos-regreso/vuelos-regreso.component';
import { InfoPasajeroComponent } from './info-pasajero/info-pasajero.component';
import { CheckboxModule } from 'primeng/checkbox';
import { EquipajeAdicionalComponent } from './equipaje-adicional/equipaje-adicional.component';
import { InformacionTarjetaComponent } from './informacion-tarjeta/informacion-tarjeta.component';
import { ResumenCompraComponent } from './resumen-compra/resumen-compra.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { LoginComponent } from './administracion/login/login.component';
import { ReporteriaComponent } from './administracion/reporteria/reporteria.component';
import { TabViewModule } from 'primeng/tabview';
import { ChartModule } from 'primeng/chart';
import { VuelosComponent } from './vuelos/vuelos.component';
import { VueloComponent } from './vuelos/vuelo/vuelo.component';
import { CrearVueloComponent } from './vuelos/crear-vuelo/crear-vuelo.component';
import { SoloIdaComponent } from './solo-ida/solo-ida.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                BusquedaComponent,
                VueloIdaComponent,
                SeleccionComponent,
                VuelosRegresoComponent,
                InfoPasajeroComponent,
                EquipajeAdicionalComponent,
                InformacionTarjetaComponent,
                ResumenCompraComponent,
                AdministracionComponent,
                LoginComponent,
                ReporteriaComponent,
                VuelosComponent,
                VueloComponent,
                CrearVueloComponent,
                SoloIdaComponent
            ],
            imports: [
                BrowserModule,
                BrowserAnimationsModule,
                FormsModule,
                DropdownModule,
                CalendarModule,
                SpinnerModule,
                ButtonModule,
                HttpClientModule,
                CheckboxModule,
                TabViewModule,
                ChartModule,
                RouterModule.forRoot([
                    { path: "home", component: BusquedaComponent },
                    { path: "vuelosIda", component: VueloIdaComponent },
                    { path: "vuelosRegreso", component: VuelosRegresoComponent },
                    { path: "infoPasajero", component: InfoPasajeroComponent },
                    { path: "equipajeAdicional", component: EquipajeAdicionalComponent },
                    { path: "pago", component: InformacionTarjetaComponent },
                    { path: "resumenCompra", component: ResumenCompraComponent },
                    { path: "login", component: LoginComponent },
                    { path: "administracion", component: AdministracionComponent },
                    { path: "reporteria", component: ReporteriaComponent },
                    { path: "vuelos", component: VuelosComponent },
                    { path: "vuelos/:id", component: VueloComponent },
                    { path: "crear", component: CrearVueloComponent },
                    { path: "soloIda", component: SoloIdaComponent },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: '**', redirectTo: 'home', pathMatch: 'full' }
                ])
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map