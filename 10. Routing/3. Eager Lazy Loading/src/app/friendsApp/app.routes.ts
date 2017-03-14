import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './Components/app.component';
import { HomeComponent } from './Components/home.component';
import { FriendComponent } from './Components/friend.component';
import { FriendsComponent } from './Components/friends.component';

export const appRoutes: Routes = [
    { path: '', pathMatch: 'full', component: AppComponent },
    { path: 'friends', component: FriendsComponent },
    { path: 'friends/:id', component: FriendComponent }
];

export const routing = RouterModule.forChild(appRoutes);
