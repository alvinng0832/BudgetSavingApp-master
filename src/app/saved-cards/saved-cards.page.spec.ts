import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SavedCardsPage } from './saved-cards.page';

describe('SavedCardsPage', () => {
  let component: SavedCardsPage;
  let fixture: ComponentFixture<SavedCardsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedCardsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SavedCardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
