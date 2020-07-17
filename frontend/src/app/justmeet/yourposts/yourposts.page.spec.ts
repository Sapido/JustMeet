import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YourpostsPage } from './yourposts.page';

describe('YourpostsPage', () => {
  let component: YourpostsPage;
  let fixture: ComponentFixture<YourpostsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourpostsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YourpostsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
