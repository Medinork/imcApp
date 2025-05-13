import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NumericasPage } from './numericas.page';

describe('NumericasPage', () => {
  let component: NumericasPage;
  let fixture: ComponentFixture<NumericasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NumericasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});