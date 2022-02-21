import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreUserService {

  constructor() { }


  /**
   * getStoredUser
   */
  public getStoredUser() {
    const storedUser = sessionStorage.getItem('userName');
    return storedUser ? storedUser : '';
  }

  /**
   * storeUser
   */
  public storeUser(userName: any) {
    sessionStorage.setItem('userName', userName);
  }



}
