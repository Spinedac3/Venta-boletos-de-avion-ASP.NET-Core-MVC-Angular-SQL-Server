import { async, TestBed } from '@angular/core/testing';
import { InfoPasajeroComponent } from './info-pasajero.component';
describe('InfoPasajeroComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [InfoPasajeroComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(InfoPasajeroComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=info-pasajero.component.spec.js.map