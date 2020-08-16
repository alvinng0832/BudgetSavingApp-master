import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalculatedbudgetPage } from './calculatedbudget.page';

describe('CalculatedbudgetPage', () => {
  let component: CalculatedbudgetPage;
  let fixture: ComponentFixture<CalculatedbudgetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatedbudgetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatedbudgetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
