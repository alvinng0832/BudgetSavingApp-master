import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoneyorlifePage } from './moneyorlife.page';

describe('MoneyorlifePage', () => {
  let component: MoneyorlifePage;
  let fixture: ComponentFixture<MoneyorlifePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyorlifePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoneyorlifePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
