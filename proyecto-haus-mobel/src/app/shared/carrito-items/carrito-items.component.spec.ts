import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoItemsComponent } from './carrito-items.component';

describe('CarritoItemsComponent', () => {
  let component: CarritoItemsComponent;
  let fixture: ComponentFixture<CarritoItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarritoItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarritoItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
