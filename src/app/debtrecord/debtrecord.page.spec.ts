import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DebtrecordPage } from './debtrecord.page';

describe('DebtrecordPage', () => {
  let component: DebtrecordPage;
  let fixture: ComponentFixture<DebtrecordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtrecordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DebtrecordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
