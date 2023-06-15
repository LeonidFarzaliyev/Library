import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/types/appState.interface";
import { AuthStateInterface } from "../../types/authState.interface";

export const authFeatureSelector = (
    state: AppStateInterface
  ): AuthStateInterface => state.auth;
    
export const isSubmittingSelector = createSelector(
    authFeatureSelector,
    (authState: AuthStateInterface) => authState.isSubmitting
);
  
export const validationErrorsSelector = createSelector(
    authFeatureSelector, (authState) => authState.validationErrors
);

export const isLoggedInSelector = createSelector(
    authFeatureSelector, (authState) => authState.isLoggedIn
);

export const currentUserSelector = createSelector(
    authFeatureSelector, (authState) => authState.currentUser
);