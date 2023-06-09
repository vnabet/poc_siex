import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CueListComponent } from './pages/cue-list/cue-list.component';
import { CueDetailComponent } from './pages/cue-detail/cue-detail.component';

const routes: Routes = [
  {path:'', component: CueListComponent },
  {path:'detail', component: CueDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
