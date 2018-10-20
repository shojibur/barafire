import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirealertComponent } from './firealert.component';

describe('FirealertComponent', () => {
  let component: FirealertComponent;
  let fixture: ComponentFixture<FirealertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirealertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirealertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
