import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './Components/app.component';
import { OneComponent } from './Components/one.component';
import { TwoComponent } from './Components/two.component';
import { HomeComponent } from './Components/home.component';

export const appRoutes: Routes = [
    {
        path: 'onetwoapp', component: AppComponent,
        children: [
            { path: 'one', component: OneComponent },
            { path: 'two', component: TwoComponent }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(appRoutes);
