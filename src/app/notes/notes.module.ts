import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotesPage } from './notes.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { NotesPageRoutingModule } from './notes-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    NotesPageRoutingModule
  ],
  declarations: [NotesPage]
})
export class NotesPageModule {}
