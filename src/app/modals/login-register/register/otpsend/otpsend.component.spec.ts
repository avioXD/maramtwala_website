import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpsendComponent } from './otpsend.component';

describe('OtpsendComponent', () => {
  let component: OtpsendComponent;
  let fixture: ComponentFixture<OtpsendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpsendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpsendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
