import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticsComponent } from './statistics/statistics.component';
import { ItemsComponent } from './items/items.component';
import { ViewsHomeComponent } from './views-home/views-home.component';

const routes: Routes = [
  {
    path: '',
    component: ViewsHomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
