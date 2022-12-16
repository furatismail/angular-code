import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithLayoutComponent } from './with-layout.component';

describe('WithLayoutComponent', () => {
  let component: WithLayoutComponent;
  let fixture: ComponentFixture<WithLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
