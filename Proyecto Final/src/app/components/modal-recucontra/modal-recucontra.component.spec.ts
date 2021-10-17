import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRecucontraComponent } from './modal-recucontra.component';

describe('ModalRecucontraComponent', () => {
  let component: ModalRecucontraComponent;
  let fixture: ComponentFixture<ModalRecucontraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRecucontraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRecucontraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
