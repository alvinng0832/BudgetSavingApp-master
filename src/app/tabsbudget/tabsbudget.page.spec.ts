import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabsbudgetPage } from './tabsbudget.page';

describe('TabsbudgetPage', () => {
  let component: TabsbudgetPage;
  let fixture: ComponentFixture<TabsbudgetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsbudgetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsbudgetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
