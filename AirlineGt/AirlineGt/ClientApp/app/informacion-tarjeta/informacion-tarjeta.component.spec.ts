import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionTarjetaComponent } from './informacion-tarjeta.component';

describe('InformacionTarjetaComponent', () => {
  let component: InformacionTarjetaComponent;
  let fixture: ComponentFixture<InformacionTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
