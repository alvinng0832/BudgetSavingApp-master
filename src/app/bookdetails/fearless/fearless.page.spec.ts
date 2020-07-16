import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FearlessPage } from './fearless.page';

describe('FearlessPage', () => {
  let component: FearlessPage;
  let fixture: ComponentFixture<FearlessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FearlessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FearlessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
