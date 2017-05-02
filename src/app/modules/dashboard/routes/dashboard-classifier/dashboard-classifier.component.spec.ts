import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardClassifierComponent } from './dashboard-classifier.component';

describe('DashboardClassifierComponent', () => {
  let component: DashboardClassifierComponent;
  let fixture: ComponentFixture<DashboardClassifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardClassifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardClassifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
