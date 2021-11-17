import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalTransactionComponent } from './total-transaction.component';

describe('TotalTransactionComponent', () => {
  let component: TotalTransactionComponent;
  let fixture: ComponentFixture<TotalTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
