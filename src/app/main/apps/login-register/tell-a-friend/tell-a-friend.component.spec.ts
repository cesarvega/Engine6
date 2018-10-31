import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TellAFriendComponent } from './tell-a-friend.component';

describe('TellAFriendComponent', () => {
  let component: TellAFriendComponent;
  let fixture: ComponentFixture<TellAFriendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TellAFriendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TellAFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
