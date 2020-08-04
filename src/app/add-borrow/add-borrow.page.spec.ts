import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddBorrowPage } from './add-borrow.page';

describe('AddBorrowPage', () => {
  let component: AddBorrowPage;
  let fixture: ComponentFixture<AddBorrowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBorrowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddBorrowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
