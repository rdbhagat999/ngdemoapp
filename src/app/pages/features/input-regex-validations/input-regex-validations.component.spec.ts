import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InputRegexValidationsComponent } from './input-regex-validations.component';

describe('InputRegexValidationsComponent', () => {
  let component: InputRegexValidationsComponent;
  let fixture: ComponentFixture<InputRegexValidationsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InputRegexValidationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputRegexValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
