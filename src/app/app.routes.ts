import { Routes } from '@angular/router';
import { MainSide } from './_pages/Side/main-side/main-side';
import { Home } from './_pages/home/home';
import { Docs } from './_pages/docs/docs';
import { Tutorials } from './_pages/tutorials/tutorials';
import { Payground } from './_pages/payground/payground';
import { Reference } from './_pages/reference/reference';

export const routes: Routes = [
  {
    path: '',
    component: MainSide,
    children: [
      {
        path: 'home',
        component: Home,
        outlet: 'rightSize'
      },
      {
        path: 'docs',
        component: Docs,
        outlet: 'rightSize'
      },
      {
        path: 'tutorials',
        component: Tutorials,
        outlet: 'rightSize'
      },
      {
        path: 'playground',
        component: Payground,
        outlet: 'rightSize'
      },
      {
        path: 'reference',
        component: Reference,
        outlet: 'rightSize'
      }
    ]
  }
];
