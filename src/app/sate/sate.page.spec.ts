import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SatePage } from './sate.page';

describe('SatePage', () => {
  let component: SatePage;
  let fixture: ComponentFixture<SatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
