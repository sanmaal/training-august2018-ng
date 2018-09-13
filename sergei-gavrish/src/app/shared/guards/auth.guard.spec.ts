import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGuard } from './auth.guard';
import { SignInUpComponent } from '../../auth/sign-in-up/sign-in-up.component';
import { PokemonsListComponent } from '../../pokemons/pokemons-list/pokemons-list.component';

describe('AuthGuard', () => {
  // let router = {
  //   navigate: jasmine.createSpy('navigate')
  // };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      //   RouterTestingModule.withRoutes(
      //     [
      //       {
      //         path: 'signIn',
      //         component: SignInUpComponent,
      //         data: { form: 'signIn' }
      //       },
      //       {
      //         path: 'pokemons/cathced',
      //         component: PokemonsListComponent,
      //         data: { page: 'catched' },
      //         canActivate: [AuthGuard]
      //       }
      //     ]
      //   )
      ],
      providers: [AuthGuard]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));

  // it('not be able to hit route when user is not logged in', () => {
  //   expect(AuthGuard.canActivate()).toBe(false);
  // })
});
