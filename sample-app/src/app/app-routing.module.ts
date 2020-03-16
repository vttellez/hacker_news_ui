import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    redirectTo: 'new-stories',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'new-stories',
    pathMatch: 'full'
  },
  {
    path: 'new-stories',
    loadChildren: () => import('./new-stories/new-stories.module').then( m => m.NewStoriesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
