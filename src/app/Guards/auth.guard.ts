import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthUserService } from '../services/auth-user.service';

export const authGuard: CanActivateFn = (route, state) => {
  let userAuth = inject(AuthUserService);
  let router = inject(Router);

  if (userAuth.isUserLogged) {
    return true;
  } else {
    alert('please login first');
    router.navigate(['/login']);

    return false;
  }
};
