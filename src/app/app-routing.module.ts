import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'nasigoreng', loadChildren: './nasigoreng/nasigoreng.module#NasigorengPageModule' },
  { path: 'sate', loadChildren: './sate/sate.module#SatePageModule' },
  { path: 'soto', loadChildren: './soto/soto.module#SotoPageModule' },
  { path: 'lumpia', loadChildren: './lumpia/lumpia.module#LumpiaPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
