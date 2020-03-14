import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockexchangeListComponent } from './stockexchange-list.component';

describe('StockexchangeListComponent', () => {
  let component: StockexchangeListComponent;
  let fixture: ComponentFixture<StockexchangeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockexchangeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockexchangeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
