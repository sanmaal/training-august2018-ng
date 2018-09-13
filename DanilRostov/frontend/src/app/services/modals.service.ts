import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalsService {

  constructor() { }

  singInModalToggle() {
    const modalSignInElement = document.getElementById('modal-sign-in');
    modalSignInElement.classList.toggle('modal-sign-in-active');
  }
}
