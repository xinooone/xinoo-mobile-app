import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'newsfeed',
        children: [
          {
            path: '',
            loadChildren: '../newsfeed/newsfeed.module#NewsfeedPageModule'
          }
        ]
      },
      {
        path: 'radar',
        children: [
          {
            path: '',
            loadChildren: '../radar/radar.module#RadarPageModule'
          }
        ]
      },
      {
        path: 'chat',
        children: [
          {
            path: '',
            loadChildren: '../chat/chat.module#ChatPageModule'
          }
        ]
      },
      {
        path: 'rides',
        children: [
          {
            path: '',
            loadChildren: '../rides/rides.module#RidesPageModule'
          }
        ]
      },
      {
        path: 'user-profile',
        children: [
          {
            path: '',
            loadChildren: '../user-profile/user-profile.module#UserProfilePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/newsfeed',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/newsfeed',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
