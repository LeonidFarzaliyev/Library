import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, map, catchError, of, tap } from "rxjs";
import { PersistanceService } from "src/app/shared/services/persistance.service";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { AuthService } from "../../services/auth.service";
import { getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction } from "../actions/getCurrentUser.action";
import { registerAction, registerActionSuccess, registerFailureAction } from "../actions/register.action";

@Injectable()
export class GetCurrentUserEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,
  ) {}

  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      
      switchMap(() => {
        const token = this.persistanceService.get('accessToken');
        
        if (!token) {
            return of(getCurrentUserFailureAction())
        }
        return this.authService.getCurrentUser().pipe(
            map((currentUser: CurrentUserInterface) => {
              return getCurrentUserSuccessAction(currentUser);
            }),
            catchError((errorResponse: HttpErrorResponse) => {
              return of(
                getCurrentUserFailureAction()
              );
            })
          );
      })

    )
  );
}
