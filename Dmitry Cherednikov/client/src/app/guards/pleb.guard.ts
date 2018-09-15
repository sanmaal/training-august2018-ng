import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class PlebGuard implements CanActivate {
    constructor(
      private router: Router,
    ) { }

    canActivate() {
        if (!localStorage.getItem('user')) {
            return true;
        }

        this.router.navigate(['/all-pokemons']);
        return false;
    }
}