import { Routes, RouterModule } from '@angular/router';
import { FriendComponent } from './Components/friend.component';
import { FriendsComponent } from './Components/friends.component';

export const appRoutes: Routes = [
    { path: '', redirectTo:'friends', pathMatch:'full' },
    { path: 'friends', component: FriendsComponent },
    { path: 'friends/friend/:id', component: FriendComponent }
];

// export const routing = RouterModule.forRoot(appRoutes);
export const routing = RouterModule.forChild(appRoutes);