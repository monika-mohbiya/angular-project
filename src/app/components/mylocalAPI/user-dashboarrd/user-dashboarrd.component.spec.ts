import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboarrdComponent } from './user-dashboarrd.component';

describe('UserDashboarrdComponent', () => {
  let component: UserDashboarrdComponent;
  let fixture: ComponentFixture<UserDashboarrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDashboarrdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDashboarrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
