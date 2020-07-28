import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReachedgoaldetailsPage } from './reachedgoaldetails.page';

describe('ReachedgoaldetailsPage', () => {
  let component: ReachedgoaldetailsPage;
  let fixture: ComponentFixture<ReachedgoaldetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReachedgoaldetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReachedgoaldetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
