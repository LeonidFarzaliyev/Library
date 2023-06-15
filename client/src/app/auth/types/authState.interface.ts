import { BackendErrorsInterface } from "../../shared/types/backendErrors.interface";
import { CurrentUserInterface } from "../../shared/types/currentUser.interface";

export interface AuthStateInterface {
    isSubmitting: boolean,
    isLoading: boolean,
    currentUser: CurrentUserInterface | null
    validationErrors: BackendErrorsInterface | null,
    isLoggedIn: boolean
}