import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Stripe3Page } from './stripe3.page';

describe('Stripe3Page', () => {
  let component: Stripe3Page;
  let fixture: ComponentFixture<Stripe3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stripe3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Stripe3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
