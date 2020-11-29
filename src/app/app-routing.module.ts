import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponentComponent } from './table-component/table-component.component';
import { ExamplePageComponent } from './example-page/example-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TreeComponent } from './tree/tree.component';
import { DragNDropComponent } from './drag-ndrop/drag-ndrop.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'table',
    pathMatch: 'full',
  },
  {
    path: 'table',
    component: TableComponentComponent
  },
  {
    path: 'tree',
    component: TreeComponent
  },
  {
    path: 'drag',
    component: DragNDropComponent
  },
  {
    path: 'example',
    component: ExamplePageComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'page-2',
    component: Page2Component
  }, {
    path: 'page-3',
    component: Page3Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
