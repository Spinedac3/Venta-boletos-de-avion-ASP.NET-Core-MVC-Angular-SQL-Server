import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VuelosRegresoComponent } from './vuelos-regreso.component';

describe('VuelosRegresoComponent', () => {
  let component: VuelosRegresoComponent;
  let fixture: ComponentFixture<VuelosRegresoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VuelosRegresoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VuelosRegresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
