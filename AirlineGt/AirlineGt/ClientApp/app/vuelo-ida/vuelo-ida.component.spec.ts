import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VueloIdaComponent } from './vuelo-ida.component';

describe('VueloIdaComponent', () => {
  let component: VueloIdaComponent;
  let fixture: ComponentFixture<VueloIdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VueloIdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VueloIdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
