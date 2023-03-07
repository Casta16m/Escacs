import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { EntrarEquipComponent } from './components/entrar-equip/entrar-equip.component';
import { JugarComponent } from './components/jugar/jugar.component';
import { TaulellComponent } from './components/taulell/taulell.component';

const routes: Routes = [
  { path: 'entrar-equip', component: EntrarEquipComponent },
  { path: 'jugar', component: JugarComponent },
  { path: 'taulell', component: TaulellComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
