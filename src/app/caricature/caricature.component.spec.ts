import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaricatureComponent } from './caricature.component';

describe('CaricatureComponent', () => {
  let component: CaricatureComponent;
  let fixture: ComponentFixture<CaricatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaricatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaricatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
