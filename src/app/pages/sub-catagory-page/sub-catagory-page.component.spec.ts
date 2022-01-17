import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCatagoryPageComponent } from './sub-catagory-page.component';

describe('SubCatagoryPageComponent', () => {
  let component: SubCatagoryPageComponent;
  let fixture: ComponentFixture<SubCatagoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCatagoryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCatagoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
