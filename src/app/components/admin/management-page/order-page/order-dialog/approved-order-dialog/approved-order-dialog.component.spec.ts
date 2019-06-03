import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedOrderDialogComponent } from './approved-order-dialog.component';

describe('ApprovedOrderDialogComponent', () => {
  let component: ApprovedOrderDialogComponent;
  let fixture: ComponentFixture<ApprovedOrderDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedOrderDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedOrderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
