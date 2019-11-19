import { async, TestBed } from '@angular/core/testing';
import { VuelosRegresoComponent } from './vuelos-regreso.component';
describe('VuelosRegresoComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [VuelosRegresoComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(VuelosRegresoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=vuelos-regreso.component.spec.js.map