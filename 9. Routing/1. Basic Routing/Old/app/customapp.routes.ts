import { Routes, RouterModule } from '@angular/router';

import { OneComponent } from './Components/one.component';
import { TwoComponent } from './Components/two.component';
import { HomeComponent } from './Components/home.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch:'full' },
  { path: 'one', component: OneComponent },
  { path: 'two', component: TwoComponent }
];

export const routing = RouterModule.forRoot(appRoutes);