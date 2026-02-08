import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datatypes } from './datatypes';

describe('Datatypes', () => {
  let component: Datatypes;
  let fixture: ComponentFixture<Datatypes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Datatypes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Datatypes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
