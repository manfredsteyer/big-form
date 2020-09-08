import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudy1Component } from './case-study1.component';

describe('CaseStudy1Component', () => {
  let component: CaseStudy1Component;
  let fixture: ComponentFixture<CaseStudy1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseStudy1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseStudy1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
