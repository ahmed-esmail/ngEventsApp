import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, of, tap} from "rxjs";
import {IUser} from "../models/IUser";
import {TokenStorageService} from "../common/token-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser!: IUser;

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) {
    if (this.tokenStorage.getUser().userName) {
      this.currentUser = this.tokenStorage.getUser();
    }
  }

  loginUser(username: string, password: string) {

    let options = {headers: new HttpHeaders({'Content-type': 'application/json'})}
    return this.http.post<any>('/api/login', {username, password}, options).pipe(
      tap(data => {
        this.currentUser = <IUser>data['user'];
        this.tokenStorage.saveUser(this.currentUser)
      })).pipe(
        catchError(err => {
          return of(false);
        })
    )

  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
