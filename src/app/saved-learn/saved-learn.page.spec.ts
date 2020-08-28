import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SavedLearnPage } from './saved-learn.page';

describe('SavedLearnPage', () => {
  let component: SavedLearnPage;
  let fixture: ComponentFixture<SavedLearnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedLearnPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SavedLearnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
