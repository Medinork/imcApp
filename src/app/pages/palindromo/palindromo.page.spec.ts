import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PalindromoPage } from './palindromo.page';

describe('PalindromoPage', () => {
  let component: PalindromoPage;
  let fixture: ComponentFixture<PalindromoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PalindromoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
