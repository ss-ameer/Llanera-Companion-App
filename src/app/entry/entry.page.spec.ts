import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntryPage } from './entry.page';

describe('EntryPage', () => {
  let component: EntryPage;
  let fixture: ComponentFixture<EntryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EntryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
