import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewStoriesRoutingModule } from './new-stories-routing.module';
import { NewStoriesListComponent } from './new-stories-list/new-stories-list.component';
import { AppMaterialModule } from '../shared/modules/material.module';
import { FilterPipe } from '../shared/pipes/filter.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [NewStoriesListComponent, FilterPipe],
  imports: [
    CommonModule,
    NewStoriesRoutingModule,
    AppMaterialModule,
    FormsModule
  ]
})
export class NewStoriesModule { }
