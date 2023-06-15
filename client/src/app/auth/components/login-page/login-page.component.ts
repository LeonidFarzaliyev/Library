import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { loginAction } from '../../store/actions/login.action';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors/authSelectors';
import { LoginRequestInterface } from '../../types/loginRequest.interface';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form!: UntypedFormGroup;
  isSubmitting$!: Observable<boolean>;
  backendErrors$!: Observable<BackendErrorsInterface | null>

  constructor(private fb: UntypedFormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.initializeForm();
    // this.initializeValues();
  }

  initializeForm = (): void => {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ''
    })
  }

  // initializeValues = (): void => {
  //   this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
  //   this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  // }

  onSubmit = (): void => {
    const request: LoginRequestInterface = this.form.value;
    
    this.store.dispatch(loginAction(request));
  } 
}
