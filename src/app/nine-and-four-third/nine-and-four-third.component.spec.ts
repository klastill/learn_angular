import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NineAndFourThirdComponent } from './nine-and-four-third.component';

describe('NineAndFourThirdComponent', () => {
  let component: NineAndFourThirdComponent;
  let fixture: ComponentFixture<NineAndFourThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NineAndFourThirdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NineAndFourThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
