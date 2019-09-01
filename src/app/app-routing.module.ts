import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'newsfeed', loadChildren: './newsfeed/newsfeed.module#NewsfeedPageModule' },
  { path: 'radar', loadChildren: './radar/radar.module#RadarPageModule' },
  { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' },
  { path: 'user-profile', loadChildren: './user-profile/user-profile.module#UserProfilePageModule' },
  { path: 'rides', loadChildren: './rides/rides.module#RidesPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
