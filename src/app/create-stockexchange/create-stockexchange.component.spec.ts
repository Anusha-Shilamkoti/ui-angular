import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStockexchangeComponent } from './create-stockexchange.component';

describe('CreateStockexchangeComponent', () => {
  let component: CreateStockexchangeComponent;
  let fixture: ComponentFixture<CreateStockexchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStockexchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStockexchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
