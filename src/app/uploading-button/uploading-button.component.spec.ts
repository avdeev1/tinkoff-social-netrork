import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadingButtonComponent } from './uploading-button.component';

describe('UploadingButtonComponent', () => {
  let component: UploadingButtonComponent;
  let fixture: ComponentFixture<UploadingButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadingButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
