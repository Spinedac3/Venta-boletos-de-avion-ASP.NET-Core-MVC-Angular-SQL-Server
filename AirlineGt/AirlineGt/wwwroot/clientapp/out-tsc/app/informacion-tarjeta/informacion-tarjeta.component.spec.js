import { async, TestBed } from '@angular/core/testing';
import { InformacionTarjetaComponent } from './informacion-tarjeta.component';
describe('InformacionTarjetaComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [InformacionTarjetaComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(InformacionTarjetaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=informacion-tarjeta.component.spec.js.map