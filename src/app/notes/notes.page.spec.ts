import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { NotesPage } from './notes.page';

describe('NotesPage', () => {
  let component: NotesPage;
  let fixture: ComponentFixture<NotesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotesPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(NotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
