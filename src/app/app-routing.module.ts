import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexModule } from './pages/pokedex/pokedex.module';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./pages/pokedex/pokedex.module').then((m) => m.PokedexModule),
},
{ path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
