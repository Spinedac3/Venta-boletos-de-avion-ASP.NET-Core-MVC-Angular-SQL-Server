import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPasajeroComponent } from './info-pasajero.component';

describe('InfoPasajeroComponent', () => {
  let component: InfoPasajeroComponent;
  let fixture: ComponentFixture<InfoPasajeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPasajeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPasajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
