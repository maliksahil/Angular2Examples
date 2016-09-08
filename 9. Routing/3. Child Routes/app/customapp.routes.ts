import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Components/home.component';
import { FriendComponent } from './Components/friend.component';
import { FriendsComponent } from './Components/friends.component';
import { OneComponent } from './Components/one.component';
import {FriendsAppComponent} from './Components/friendsapp.component'

export const childRoutes: Routes = [
    { path: '', component: FriendsComponent },  
    { path: 'friend/:id', component: FriendComponent }
];

export const childRouting = RouterModule.forChild(childRoutes);

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },  
    { path: 'one', component: OneComponent },
    { path: 'friendsapp', component: FriendsAppComponent, children: childRoutes}
];

export const routing = RouterModule.forRoot(appRoutes);

