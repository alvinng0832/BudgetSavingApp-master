import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddFaqPage } from './add-faq.page';

describe('AddFaqPage', () => {
  let component: AddFaqPage;
  let fixture: ComponentFixture<AddFaqPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFaqPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddFaqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
