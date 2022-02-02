import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoryPageComponent } from './sub-category-page.component';

describe('SubCategoryPageComponent', () => {
  let component: SubCategoryPageComponent;
  let fixture: ComponentFixture<SubCategoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCategoryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
