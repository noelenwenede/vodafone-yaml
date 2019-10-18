import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectDisplayComponent } from './object-display.component';

describe('ObjectDisplayComponent', () => {
  let component: ObjectDisplayComponent;
  let fixture: ComponentFixture<ObjectDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
