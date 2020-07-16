import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServicesAuthPage } from './services-auth.page';

describe('ServicesAuthPage', () => {
  let component: ServicesAuthPage;
  let fixture: ComponentFixture<ServicesAuthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesAuthPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServicesAuthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
