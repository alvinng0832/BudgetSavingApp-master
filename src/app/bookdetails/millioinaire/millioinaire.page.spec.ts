import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MillioinairePage } from './millioinaire.page';

describe('MillioinairePage', () => {
  let component: MillioinairePage;
  let fixture: ComponentFixture<MillioinairePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MillioinairePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MillioinairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
