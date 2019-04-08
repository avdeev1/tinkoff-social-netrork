import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostWCommentsComponent } from './post-w-comments.component';

describe('PostWCommentsComponent', () => {
  let component: PostWCommentsComponent;
  let fixture: ComponentFixture<PostWCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostWCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostWCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
