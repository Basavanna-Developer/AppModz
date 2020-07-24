import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRouteNavComponent } from './header-route-nav.component';

describe('HeaderRouteNavComponent', () => {
  let component: HeaderRouteNavComponent;
  let fixture: ComponentFixture<HeaderRouteNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderRouteNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderRouteNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
