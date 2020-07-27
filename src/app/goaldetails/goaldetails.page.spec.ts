import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoaldetailsPage } from './goaldetails.page';

describe('GoaldetailsPage', () => {
  let component: GoaldetailsPage;
  let fixture: ComponentFixture<GoaldetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoaldetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GoaldetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
