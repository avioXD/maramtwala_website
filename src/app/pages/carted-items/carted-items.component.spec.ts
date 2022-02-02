import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartedItemsComponent } from './carted-items.component';

describe('CartedItemsComponent', () => {
  let component: CartedItemsComponent;
  let fixture: ComponentFixture<CartedItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartedItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
