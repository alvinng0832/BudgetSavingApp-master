import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocationApiPage } from './location-api.page';

describe('LocationApiPage', () => {
  let component: LocationApiPage;
  let fixture: ComponentFixture<LocationApiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationApiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocationApiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
