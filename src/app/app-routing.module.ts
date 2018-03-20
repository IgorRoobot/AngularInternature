import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { FormsComponent } from './forms/forms.component';
import { FormViewComponent } from './form-view/form-view.component';
import { FormDelateComponent } from './form-delate/form-delate.component';

const routes: Routes = [
  { path: '', component: CartComponent },
  { path: 'form/add', component: FormsComponent },
  { path: 'form/delete/:id', component: FormDelateComponent },
  { path: 'form/view/:id', component: FormViewComponent },
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
