import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckShowComponent } from './deck-show.component';

describe('DeckShowComponent', () => {
  let component: DeckShowComponent;
  let fixture: ComponentFixture<DeckShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeckShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeckShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
