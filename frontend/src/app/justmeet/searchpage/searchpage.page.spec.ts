import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchpagePage } from './searchpage.page';

describe('SearchpagePage', () => {
  let component: SearchpagePage;
  let fixture: ComponentFixture<SearchpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
