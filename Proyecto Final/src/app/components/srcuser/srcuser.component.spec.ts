import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrcuserComponent } from './srcuser.component';

describe('SrcuserComponent', () => {
  let component: SrcuserComponent;
  let fixture: ComponentFixture<SrcuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrcuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SrcuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
