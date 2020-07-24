import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageYoutubeComponent } from './homepage-youtube.component';

describe('HomepageYoutubeComponent', () => {
  let component: HomepageYoutubeComponent;
  let fixture: ComponentFixture<HomepageYoutubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageYoutubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
