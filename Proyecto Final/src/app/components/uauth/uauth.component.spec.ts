import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UAuthComponent } from './uauth.component';

describe('UAuthComponent', () => {
  let component: UAuthComponent;
  let fixture: ComponentFixture<UAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
