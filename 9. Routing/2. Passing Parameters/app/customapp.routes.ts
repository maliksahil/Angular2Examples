import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Components/home.component';
import { FriendComponent } from './Components/friend.component';
import { FriendsComponent } from './Components/friends.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },  
    { path: 'friends', component: FriendsComponent },
    { path: 'friend/:id', component: FriendComponent }
];

export const routing = RouterModule.forRoot(appRoutes);