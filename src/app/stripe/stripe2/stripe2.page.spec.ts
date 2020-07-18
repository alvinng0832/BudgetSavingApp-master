import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Stripe2Page } from './stripe2.page';

describe('Stripe2Page', () => {
  let component: Stripe2Page;
  let fixture: ComponentFixture<Stripe2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stripe2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Stripe2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
