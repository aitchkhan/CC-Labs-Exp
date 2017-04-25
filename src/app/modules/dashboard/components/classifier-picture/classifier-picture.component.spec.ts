import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassifierPictureComponent } from './classifier-picture.component';

describe('ClassifierPictureComponent', () => {
  let component: ClassifierPictureComponent;
  let fixture: ComponentFixture<ClassifierPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassifierPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassifierPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
