import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FinancialdietPage } from './financialdiet.page';

describe('FinancialdietPage', () => {
  let component: FinancialdietPage;
  let fixture: ComponentFixture<FinancialdietPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialdietPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FinancialdietPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
