import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockpriceListComponent } from './stockprice-list.component';

describe('StockpriceListComponent', () => {
  let component: StockpriceListComponent;
  let fixture: ComponentFixture<StockpriceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockpriceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockpriceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
