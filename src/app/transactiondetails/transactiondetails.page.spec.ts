import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransactiondetailsPage } from './transactiondetails.page';

describe('TransactiondetailsPage', () => {
  let component: TransactiondetailsPage;
  let fixture: ComponentFixture<TransactiondetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactiondetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransactiondetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
