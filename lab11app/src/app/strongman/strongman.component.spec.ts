import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrongmanComponent } from './strongman.component';

describe('StrongmanComponent', () => {
  let component: StrongmanComponent;
  let fixture: ComponentFixture<StrongmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrongmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrongmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
