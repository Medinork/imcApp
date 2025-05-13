import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabuadaPage } from './tabuada.page';

describe('TabuadaPage', () => {
  let component: TabuadaPage;
  let fixture: ComponentFixture<TabuadaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabuadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});