import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMicroserviceComponent } from './select-microservice.component';

describe('SelectMicroserviceComponent', () => {
  let component: SelectMicroserviceComponent;
  let fixture: ComponentFixture<SelectMicroserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectMicroserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMicroserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
