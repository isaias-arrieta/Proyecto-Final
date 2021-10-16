import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalRegisComponent } from './modal-regis.component';

describe('ModalRegisComponent', () => {
  let component: ModalRegisComponent;
  let fixture: ComponentFixture<ModalRegisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRegisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRegisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
