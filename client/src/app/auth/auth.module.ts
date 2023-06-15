import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers/authReducers';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { EffectsModule } from '@ngrx/effects';
import { GetCurrentUserEffect } from './store/effects/getCurrentUser.effect';
import { RegisterEffect } from './store/effects/register.effect';

const routes: Routes = [
  { path: 'registration', component: RegisterPageComponent },
  { path: 'login', component: LoginPageComponent },
];

@NgModule({
  declarations: [RegisterPageComponent, LoginPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forRoot([RegisterEffect, GetCurrentUserEffect])
  ],
})
export class AuthModule {}
