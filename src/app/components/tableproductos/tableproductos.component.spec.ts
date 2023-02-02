import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableproductosComponent } from './tableproductos.component';

describe('TableproductosComponent', () => {
  let component: TableproductosComponent;
  let fixture: ComponentFixture<TableproductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableproductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
