import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../tab2/tab2.module#Tab2PageModule'
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
          }
        ]
      },
      {
        path: 'nasigoreng',
        children: [
          {
            path: '',
            loadChildren: '../nasigoreng/nasigoreng.module#NasigorengPageModule'
          }
        ]
      },
      {
        path: 'sate',
        children: [
          {
            path: '',
            loadChildren: '../sate/sate.module#SatePageModule'
          }
        ]
      },
      {
        path: 'soto',
        children: [
          {
            path: '',
            loadChildren: '../soto/soto.module#SotoPageModule'
          }
        ]
      },
      {
        path: 'lumpia',
        children: [
          {
            path: '',
            loadChildren: '../lumpia/lumpia.module#LumpiaPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
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
