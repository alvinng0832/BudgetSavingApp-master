import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FinanciallifePage } from './financiallife.page';

describe('FinanciallifePage', () => {
  let component: FinanciallifePage;
  let fixture: ComponentFixture<FinanciallifePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanciallifePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FinanciallifePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
