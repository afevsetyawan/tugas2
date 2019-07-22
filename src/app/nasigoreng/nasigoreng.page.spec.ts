import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NasigorengPage } from './nasigoreng.page';

describe('NasigorengPage', () => {
  let component: NasigorengPage;
  let fixture: ComponentFixture<NasigorengPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NasigorengPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NasigorengPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
