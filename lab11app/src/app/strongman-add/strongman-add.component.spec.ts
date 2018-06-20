import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrongmanAddComponent } from './strongman-add.component';

describe('StrongmanAddComponent', () => {
  let component: StrongmanAddComponent;
  let fixture: ComponentFixture<StrongmanAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrongmanAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrongmanAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
