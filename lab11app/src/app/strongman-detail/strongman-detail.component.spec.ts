import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrongmanDetailComponent } from './strongman-detail.component';

describe('StrongmanDetailComponent', () => {
  let component: StrongmanDetailComponent;
  let fixture: ComponentFixture<StrongmanDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrongmanDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrongmanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
