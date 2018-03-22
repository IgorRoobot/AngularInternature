import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseComponentComponent } from './firebase-component.component';

describe('FirebaseComponentComponent', () => {
  let component: FirebaseComponentComponent;
  let fixture: ComponentFixture<FirebaseComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
