import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaljiComponent } from './detalji.component';

describe('DetaljiComponent', () => {
  let component: DetaljiComponent;
  let fixture: ComponentFixture<DetaljiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaljiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaljiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
