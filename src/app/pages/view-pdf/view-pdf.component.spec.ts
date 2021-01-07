import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewPdfComponent } from './view-pdf.component';

describe('ViewPdfComponent', () => {
  let component: ViewPdfComponent;
  let fixture: ComponentFixture<ViewPdfComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
