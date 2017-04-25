import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassifierWindowComponent } from './classifier-window.component';

describe('ClassifierWindowComponent', () => {
  let component: ClassifierWindowComponent;
  let fixture: ComponentFixture<ClassifierWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassifierWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassifierWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
