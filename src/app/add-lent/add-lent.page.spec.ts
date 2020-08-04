import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddLentPage } from './add-lent.page';

describe('AddLentPage', () => {
  let component: AddLentPage;
  let fixture: ComponentFixture<AddLentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddLentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
