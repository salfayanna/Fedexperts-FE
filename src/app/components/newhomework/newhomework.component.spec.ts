import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewhomeworkComponent } from './newhomework.component';

describe('NewhomeworkComponent', () => {
  let component: NewhomeworkComponent;
  let fixture: ComponentFixture<NewhomeworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewhomeworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewhomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
