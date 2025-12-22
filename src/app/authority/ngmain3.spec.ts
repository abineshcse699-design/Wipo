import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngmain3 } from './ngmain3';

describe('Ngmain3', () => {
  let component: Ngmain3;
  let fixture: ComponentFixture<Ngmain3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ngmain3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ngmain3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
