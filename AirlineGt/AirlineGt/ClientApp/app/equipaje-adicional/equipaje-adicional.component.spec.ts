import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipajeAdicionalComponent } from './equipaje-adicional.component';

describe('EquipajeAdicionalComponent', () => {
  let component: EquipajeAdicionalComponent;
  let fixture: ComponentFixture<EquipajeAdicionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipajeAdicionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipajeAdicionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
