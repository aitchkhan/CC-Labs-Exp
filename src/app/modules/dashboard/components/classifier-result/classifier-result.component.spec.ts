import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassifierResultComponent } from './classifier-result.component';

describe('ClassifierResultComponent', () => {
  let component: ClassifierResultComponent;
  let fixture: ComponentFixture<ClassifierResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassifierResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassifierResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
