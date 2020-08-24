import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuStandaardComponent } from './menu-standaard.component';

describe('MenuStandaardComponent', () => {
  let component: MenuStandaardComponent;
  let fixture: ComponentFixture<MenuStandaardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuStandaardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuStandaardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
