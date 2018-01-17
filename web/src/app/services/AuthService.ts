import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  private static LOCAL_STORAGE_TOKEN = 'jwt';

  public getToken(): string {
    return localStorage.getItem(AuthService.LOCAL_STORAGE_TOKEN);
  }

  public setToken(token: string): void {
    localStorage.setItem(AuthService.LOCAL_STORAGE_TOKEN, token);
  }

  public logout(): void {
    this.clearToken();
  }

  public isLogged(): boolean {
    if (this.getToken()) {
      return true;
    }

    return false;
  }

  private clearToken(): void {
    localStorage.removeItem(AuthService.LOCAL_STORAGE_TOKEN);
  }

}
