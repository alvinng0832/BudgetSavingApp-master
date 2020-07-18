import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Stripe5Page } from './stripe5.page';

describe('Stripe5Page', () => {
  let component: Stripe5Page;
  let fixture: ComponentFixture<Stripe5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stripe5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Stripe5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
