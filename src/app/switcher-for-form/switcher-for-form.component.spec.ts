import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitcherForFormComponent } from './switcher-for-form.component';

describe('SwitcherForFormComponent', () => {
  let component: SwitcherForFormComponent;
  let fixture: ComponentFixture<SwitcherForFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitcherForFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitcherForFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
