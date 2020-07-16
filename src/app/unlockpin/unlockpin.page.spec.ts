import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnlockpinPage } from './unlockpin.page';

describe('UnlockpinPage', () => {
  let component: UnlockpinPage;
  let fixture: ComponentFixture<UnlockpinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnlockpinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnlockpinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
