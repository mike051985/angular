import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheSectionComponent } from './the-section.component';

describe('TheSectionComponent', () => {
  let component: TheSectionComponent;
  let fixture: ComponentFixture<TheSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
