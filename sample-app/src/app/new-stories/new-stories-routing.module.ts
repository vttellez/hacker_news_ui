import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewStoriesListComponent } from './new-stories-list/new-stories-list.component';


const routes: Routes = [
  {
    path: '',
    component: NewStoriesListComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewStoriesRoutingModule { }
