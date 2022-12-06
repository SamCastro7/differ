import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscosComponent } from './Components/discos/discos.component';
import { AlbumSpecialComponent } from './Components/album-special/album-special.component';

const routes: Routes = [
 {path: 'musica', component: DiscosComponent },
 {path: 'albumSpecial', component:AlbumSpecialComponent}
];
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
