import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewStoriesRoutingModule } from './new-stories-routing.module';
import { NewStoriesListComponent } from './new-stories-list/new-stories-list.component';
import { AppMaterialModule } from '../shared/modules/material.module';


@NgModule({
  declarations: [NewStoriesListComponent],
  imports: [
    CommonModule,
    NewStoriesRoutingModule,
    AppMaterialModule
  ]
})
export class NewStoriesModule { }
