import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageModule } from './homepage/homepage.module';
import { HomepageComponent } from './homepage/homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'contact', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' }), HomepageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
