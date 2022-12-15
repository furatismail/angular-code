import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveSignUpComponent } from './reactive-sign-up.component';

describe('ReactiveSignUpComponent', () => {
  let component: ReactiveSignUpComponent;
  let fixture: ComponentFixture<ReactiveSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveSignUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
