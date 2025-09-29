import { Routes } from '@angular/router';
import {Animals} from './animals/animals';
import {Fruits} from './fruits/fruits';

export const routes: Routes = [
  { path: 'animals', component: Animals},
  { path: 'fruits', component: Fruits}
];