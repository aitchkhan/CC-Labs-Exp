import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassifierUploadButtonComponent } from './classifier-upload-button.component';

describe('ClassifierUploadButtonComponent', () => {
  let component: ClassifierUploadButtonComponent;
  let fixture: ComponentFixture<ClassifierUploadButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassifierUploadButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassifierUploadButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
