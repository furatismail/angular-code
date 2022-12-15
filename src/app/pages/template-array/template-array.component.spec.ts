import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateArrayComponent } from './template-array.component';

describe('TemplateArrayComponent', () => {
  let component: TemplateArrayComponent;
  let fixture: ComponentFixture<TemplateArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
