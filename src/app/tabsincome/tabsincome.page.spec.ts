import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabsincomePage } from './tabsincome.page';

describe('TabsincomePage', () => {
  let component: TabsincomePage;
  let fixture: ComponentFixture<TabsincomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsincomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsincomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
