import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPostLinksComponent } from './info-post-links.component';

describe('InfoPostLinksComponent', () => {
  let component: InfoPostLinksComponent;
  let fixture: ComponentFixture<InfoPostLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPostLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPostLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
