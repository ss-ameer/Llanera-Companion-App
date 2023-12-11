import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovernmentPage } from './government.page';

describe('GovernmentPage', () => {
  let component: GovernmentPage;
  let fixture: ComponentFixture<GovernmentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GovernmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
