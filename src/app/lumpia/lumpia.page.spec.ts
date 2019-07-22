import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LumpiaPage } from './lumpia.page';

describe('LumpiaPage', () => {
  let component: LumpiaPage;
  let fixture: ComponentFixture<LumpiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LumpiaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LumpiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
