/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AspirationsComponent } from './aspirations.component';

describe('AspirationsComponent', () => {
  let component: AspirationsComponent;
  let fixture: ComponentFixture<AspirationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AspirationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AspirationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
