import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VogaisPage } from './vogais.page';

describe('VogaisPage', () => {
  let component: VogaisPage;
  let fixture: ComponentFixture<VogaisPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VogaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});