import { async, TestBed } from '@angular/core/testing';
import { EquipajeAdicionalComponent } from './equipaje-adicional.component';
describe('EquipajeAdicionalComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [EquipajeAdicionalComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(EquipajeAdicionalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=equipaje-adicional.component.spec.js.map