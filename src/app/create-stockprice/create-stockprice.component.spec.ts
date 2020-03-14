import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStockpriceComponent } from './create-stockprice.component';

describe('CreateStockpriceComponent', () => {
  let component: CreateStockpriceComponent;
  let fixture: ComponentFixture<CreateStockpriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStockpriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStockpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
