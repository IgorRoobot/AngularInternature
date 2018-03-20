import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDelateComponent } from './form-delate.component';

describe('FormDelateComponent', () => {
  let component: FormDelateComponent;
  let fixture: ComponentFixture<FormDelateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDelateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDelateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
