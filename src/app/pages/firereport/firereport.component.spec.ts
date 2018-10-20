import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirereportComponent } from './firereport.component';

describe('FirereportComponent', () => {
  let component: FirereportComponent;
  let fixture: ComponentFixture<FirereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
