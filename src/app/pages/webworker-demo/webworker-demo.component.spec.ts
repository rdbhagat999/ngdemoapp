import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WebworkerDemoComponent } from './webworker-demo.component';

describe('WebworkerDemoComponent', () => {
  let component: WebworkerDemoComponent;
  let fixture: ComponentFixture<WebworkerDemoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WebworkerDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebworkerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
