import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInformationAshish } from './student-information-ashish';

describe('StudentInformationAshish', () => {
  let component: StudentInformationAshish;
  let fixture: ComponentFixture<StudentInformationAshish>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentInformationAshish]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentInformationAshish);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
