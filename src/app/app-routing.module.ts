import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ColorComponent } from './color/color.component';
import { DepositComponent } from './deposit/deposit.component';
import { HomeComponent } from './home/home.component';
import { SimplecalculatorComponent } from './simplecalculator/simplecalculator.component';

const routes: Routes = [

  // {
  //   path: 'color',
  //   component: ColorComponent
  // },
  // {
  //   path: 'calculator',
  //   component: CalculatorComponent
  // },
  // {
  //   path: 'simplecalculator',
  //   component: SimplecalculatorComponent
  // },
  // {
  //   path:'deposit',
  //   component: DepositComponent
  // }
{
  path :'home',
  component: HomeComponent
},
{
  path :'about',
  component: AboutComponent
}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
