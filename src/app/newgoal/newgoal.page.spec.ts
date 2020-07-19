import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewgoalPage } from './newgoal.page';

describe('NewgoalPage', () => {
  let component: NewgoalPage;
  let fixture: ComponentFixture<NewgoalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewgoalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewgoalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
