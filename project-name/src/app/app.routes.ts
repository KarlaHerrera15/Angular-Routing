import { Routes } from '@angular/router';
import {Animals} from './animals/animals';
import {Fruits} from './fruits/fruits';
import { Generic } from './generic/generic';

export const routes: Routes = [
  { path: 'animals', component: Animals},
  { path: 'fruits', component: Fruits},
  { path: '', redirectTo: '/animals', pathMatch: 'full'},
  { path: '', redirectTo: '/fruits', pathMatch: 'full'},
  { path: 'generic/:id', component: Generic }
];