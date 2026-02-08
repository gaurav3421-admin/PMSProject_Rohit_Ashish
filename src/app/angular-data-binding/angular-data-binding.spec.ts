import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDataBinding } from './angular-data-binding';

describe('AngularDataBinding', () => {
  let component: AngularDataBinding;
  let fixture: ComponentFixture<AngularDataBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularDataBinding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularDataBinding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
