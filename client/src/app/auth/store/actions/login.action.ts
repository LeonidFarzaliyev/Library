import { ActionTypes } from "../actionTypes/actionTypes";
import {createAction, props} from '@ngrx/store'
import { LoginRequestInterface } from "../../types/loginRequest.interface";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";

export const loginAction = createAction(
    ActionTypes.LOGIN,
    props<LoginRequestInterface>()
)

export const loginActionSuccess = createAction(
    ActionTypes.LOGIN_SUCCESS,
    props<CurrentUserInterface>()
)

export const loginActionFailure = createAction(
    ActionTypes.LOGIN_FAILURE,
    props<BackendErrorsInterface>()
)