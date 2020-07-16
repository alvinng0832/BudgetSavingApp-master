import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OurstorePage } from './ourstore.page';

describe('OurstorePage', () => {
  let component: OurstorePage;
  let fixture: ComponentFixture<OurstorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurstorePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OurstorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
