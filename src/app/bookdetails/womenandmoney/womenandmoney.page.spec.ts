import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WomenandmoneyPage } from './womenandmoney.page';

describe('WomenandmoneyPage', () => {
  let component: WomenandmoneyPage;
  let fixture: ComponentFixture<WomenandmoneyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenandmoneyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WomenandmoneyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
