import { Routes, RouterModule } from '@angular/router';

import { OneComponent } from './Components/one.component';
import { TwoComponent } from './Components/two.component';
import { HomeComponent } from './Components/home.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'one', component: OneComponent },
  { path: 'two', component: TwoComponent },
  {
    path: 'friendsApp',
    loadChildren: './app/friendsApp/app.module#AppModule'
  }
];

export const routing = RouterModule.forRoot(appRoutes);