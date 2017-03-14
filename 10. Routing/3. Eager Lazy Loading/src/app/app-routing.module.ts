import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/about' },
    { path: 'about', pathMatch: 'full', component: AboutComponent },
    { path: 'friendsApp', loadChildren: './friendsApp/app.module#AppModule' },
    { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routableComponents = [PageNotFoundComponent, AboutComponent];
