import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Stripe4Page } from './stripe4.page';

describe('Stripe4Page', () => {
  let component: Stripe4Page;
  let fixture: ComponentFixture<Stripe4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stripe4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Stripe4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
