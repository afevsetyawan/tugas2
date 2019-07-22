import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SotoPage } from './soto.page';

describe('SotoPage', () => {
  let component: SotoPage;
  let fixture: ComponentFixture<SotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SotoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
