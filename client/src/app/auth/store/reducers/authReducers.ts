import { AuthStateInterface } from "src/app/auth/types/authState.interface";
import {createReducer, on, Action} from '@ngrx/store'
import { registerAction, registerActionSuccess, registerFailureAction } from "../actions/register.action";
import { loginAction, loginActionFailure, loginActionSuccess } from "../actions/login.action";
import { getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction } from "../actions/getCurrentUser.action";

const initialState: AuthStateInterface = {
    isSubmitting: false,
    isLoading: false,
    currentUser: null,
    validationErrors: null,
    isLoggedIn: false
}

const authReducers = createReducer(
    initialState,
    on(
       registerAction,
       (state): AuthStateInterface => ({
          ...state,
          isSubmitting: true,
          validationErrors: null
    })
    ),
    on(
        registerActionSuccess,
        (state, action): AuthStateInterface => ({
          ...state,
          isSubmitting: false,
          isLoggedIn: true,
          currentUser: action
        })
      ),
      on(
        registerFailureAction,
        (state, action): AuthStateInterface => ({
          ...state,
          isSubmitting: false,
          validationErrors: action
        })
      ),
      on(
        loginAction,
        (state): AuthStateInterface => ({
          ...state,
          isSubmitting: true,
          validationErrors: null
        })
      ),
      on(
        loginActionSuccess,
        (state, action): AuthStateInterface => ({
          ...state,
          isSubmitting: false,
          isLoggedIn: true,
          currentUser: action
        })
      ),
      on(
        loginActionFailure,
        (state, action): AuthStateInterface => ({
          ...state,
          isSubmitting: false,
          validationErrors: action
        })
      ),
      on(getCurrentUserAction,
        (state): AuthStateInterface => ({
          ...state,
          isSubmitting: true
        })
      ),
      on(getCurrentUserSuccessAction,
        (state, action): AuthStateInterface => ({
          ...state,
          isLoading: false,
          isLoggedIn: true,
          currentUser: action
        })
      ),
      on(getCurrentUserFailureAction,
        (state): AuthStateInterface => ({
          ...state,
          isLoading: false,
          isLoggedIn: false,
          currentUser: null
        })
      )
)

export function reducers(state: AuthStateInterface, action: Action) {
    return authReducers(state, action)
}