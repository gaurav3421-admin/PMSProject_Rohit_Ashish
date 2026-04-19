import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RXJSOperators } from './rxjsoperators';

describe('RXJSOperators', () => {
  let component: RXJSOperators;
  let fixture: ComponentFixture<RXJSOperators>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RXJSOperators]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RXJSOperators);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
