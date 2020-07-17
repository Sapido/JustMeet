import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YourgroupsPage } from './yourgroups.page';

describe('YourgroupsPage', () => {
  let component: YourgroupsPage;
  let fixture: ComponentFixture<YourgroupsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourgroupsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YourgroupsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
