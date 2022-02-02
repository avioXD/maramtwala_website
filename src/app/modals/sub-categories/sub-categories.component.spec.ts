import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCatagoriesComponent } from './sub-categories.component';

describe('SubCatagoriesComponent', () => {
  let component: SubCatagoriesComponent;
  let fixture: ComponentFixture<SubCatagoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCatagoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCatagoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
