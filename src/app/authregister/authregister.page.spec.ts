import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuthregisterPage } from './authregister.page';

describe('AuthregisterPage', () => {
  let component: AuthregisterPage;
  let fixture: ComponentFixture<AuthregisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthregisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthregisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
