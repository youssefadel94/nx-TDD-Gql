import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('@yadel/rockets/list/feature').then(m => m.RocketsListFeatureModule) },
  { path: 'rocket', loadChildren: () => import('@yadel/rockets/detail/feature').then(m => m.RocketDetailFeatureModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RocketsShellRoutingModule { }
