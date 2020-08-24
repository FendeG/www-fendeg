import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hamburger1ButtonComponent } from './hamburger1-button.component';

describe('Hamburger1ButtonComponent', () => {
  let component: Hamburger1ButtonComponent;
  let fixture: ComponentFixture<Hamburger1ButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hamburger1ButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hamburger1ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
