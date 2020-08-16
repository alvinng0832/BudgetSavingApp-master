import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddCalendarPage } from './add-calendar.page';

describe('AddCalendarPage', () => {
  let component: AddCalendarPage;
  let fixture: ComponentFixture<AddCalendarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCalendarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddCalendarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
