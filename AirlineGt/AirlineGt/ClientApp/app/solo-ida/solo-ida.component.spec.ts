import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloIdaComponent } from './solo-ida.component';

describe('VueloIdaComponent', () => {
  let component: SoloIdaComponent;
  let fixture: ComponentFixture<SoloIdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoloIdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloIdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
