import { Routes } from '@angular/router';
import { SpecieDetails1 } from './specie-details1/specie-details1';
import { Ngmain3 } from './authority-details/authority-details';

export const routes: Routes = [
  {
    path:'specie',
    component:SpecieDetails1
  },
  {
    path:'authority',
    component:Ngmain3
  }
];
