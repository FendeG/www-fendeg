import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileStandaardComponent } from './mobile-standaard.component';

describe('MobileStandaardComponent', () => {
  let component: MobileStandaardComponent;
  let fixture: ComponentFixture<MobileStandaardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileStandaardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileStandaardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
