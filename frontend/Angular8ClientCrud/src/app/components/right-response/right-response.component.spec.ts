import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightResponseComponent } from './right-response.component';

describe('RightResponseComponent', () => {
  let component: RightResponseComponent;
  let fixture: ComponentFixture<RightResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
