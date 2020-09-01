import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectCardPage } from './select-card.page';

describe('SelectCardPage', () => {
  let component: SelectCardPage;
  let fixture: ComponentFixture<SelectCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
