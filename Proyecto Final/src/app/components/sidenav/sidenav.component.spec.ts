import { ComponentFixture, TestBed } from '@angular/core/testing';

import { sidenavComponent } from './sidenav.component';

describe('SidenavComponent', () => {
  let component: sidenavComponent;
  let fixture: ComponentFixture<sidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ sidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(sidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
