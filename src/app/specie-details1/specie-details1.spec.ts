import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecieDetails1 } from './specie-details1';

describe('SpecieDetails1', () => {
  let component: SpecieDetails1;
  let fixture: ComponentFixture<SpecieDetails1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecieDetails1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecieDetails1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
