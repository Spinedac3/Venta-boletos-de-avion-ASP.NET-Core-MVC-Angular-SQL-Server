import { async, TestBed } from '@angular/core/testing';
import { VueloIdaComponent } from './vuelo-ida.component';
describe('VueloIdaComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [VueloIdaComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(VueloIdaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=vuelo-ida.component.spec.js.map