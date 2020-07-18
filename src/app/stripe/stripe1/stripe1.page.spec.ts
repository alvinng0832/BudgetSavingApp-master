import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Stripe1Page } from './stripe1.page';

describe('Stripe1Page', () => {
  let component: Stripe1Page;
  let fixture: ComponentFixture<Stripe1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stripe1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Stripe1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
