import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CueDetailComponent } from './cue-detail.component';

describe('CueDetailComponent', () => {
  let component: CueDetailComponent;
  let fixture: ComponentFixture<CueDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CueDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CueDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
