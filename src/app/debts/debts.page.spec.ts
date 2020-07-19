import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DebtsPage } from './debts.page';

describe('DebtsPage', () => {
  let component: DebtsPage;
  let fixture: ComponentFixture<DebtsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DebtsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
