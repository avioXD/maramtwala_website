import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderInDetailComponent } from './provider-in-detail.component';

describe('ProviderInDetailComponent', () => {
  let component: ProviderInDetailComponent;
  let fixture: ComponentFixture<ProviderInDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderInDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderInDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
