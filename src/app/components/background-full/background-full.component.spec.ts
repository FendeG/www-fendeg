import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundFullComponent } from './background-full.component';

describe('BackgroundFullComponent', () => {
  let component: BackgroundFullComponent;
  let fixture: ComponentFixture<BackgroundFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
