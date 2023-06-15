import { ActionTypes } from "../actionTypes/actionTypes";
import { createAction, props } from '@ngrx/store';
import { RegisterRequestInterface } from "../../types/registerRequest.interface";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";

export const registerAction = createAction(
    ActionTypes.REGISTER,
    props<RegisterRequestInterface>()
)

export const registerActionSuccess = createAction(
    ActionTypes.REGISTER_SUCCESS,
    props<CurrentUserInterface>()
)

export const registerFailureAction = createAction(
    ActionTypes.REGISTER_FAILURE,
    props<BackendErrorsInterface>()
)