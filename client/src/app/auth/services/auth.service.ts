import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { environment } from "src/environments/environment.prod";
import { RegisterRequestInterface } from "../types/registerRequest.interface";

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {}

    register = (data: RegisterRequestInterface): Observable<CurrentUserInterface> => {
        const url = environment.apiUrl + '/users';
        return this.http.post<CurrentUserInterface>(url, data);
    }

    getCurrentUser(): Observable<CurrentUserInterface> {
        const url = environment.apiUrl + '/user';

        return this.http.get<CurrentUserInterface>(url);
    }
}