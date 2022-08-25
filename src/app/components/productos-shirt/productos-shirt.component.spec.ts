import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosShirtComponent } from './productos-shirt.component';

describe('ProductosShirtComponent', () => {
  let component: ProductosShirtComponent;
  let fixture: ComponentFixture<ProductosShirtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosShirtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosShirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
