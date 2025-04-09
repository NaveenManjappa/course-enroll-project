import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseByCategorryComponent } from './course-by-categorry.component';

describe('CourseByCategorryComponent', () => {
  let component: CourseByCategorryComponent;
  let fixture: ComponentFixture<CourseByCategorryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseByCategorryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseByCategorryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
