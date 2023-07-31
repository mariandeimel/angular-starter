import { inject } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router'
import { AuthFacade } from '@features/auth/auth.facade'
import { map, catchError, of } from 'rxjs'

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authFacade = inject(AuthFacade)
  const router = inject(Router)
  return authFacade.isLoggedIn$().pipe(map(isLoggedIn => !isLoggedIn ? true : router.createUrlTree([''])), catchError(() => of(true)))
}
