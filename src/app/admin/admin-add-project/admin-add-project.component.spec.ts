import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddProjectComponent } from './admin-add-project.component';

describe('AdminAddProjectComponent', () => {
  let component: AdminAddProjectComponent;
  let fixture: ComponentFixture<AdminAddProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
