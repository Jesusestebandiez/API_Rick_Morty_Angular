import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'home',
     loadChildren:()=> import('./pages/home/home.module').then(m=> m.HomeModule)
  },
  {
    path: 'characters',
     loadChildren:()=> import('./pages/characters/characters.module').then(m=> m.CharactersModule)
  },
  {
    path: 'about',
     loadChildren:()=> import('./pages/about/about.module').then(m=> m.AboutModule)
  },
  {
    path: 'character/:id',
    loadChildren:()=> import('./pages/characters-detail/characters-detail.module').then(m=> m.CharactersDetailModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
