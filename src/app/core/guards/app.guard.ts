import { inject } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router'
import { AuthFacade } from '@features/auth/auth.facade'
import { catchError, map, of } from 'rxjs'

export const appGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
	const authFacade = inject(AuthFacade)
	const router = inject(Router)
	const urlTree = router.createUrlTree([authFacade.LOGIN_PATH])
	return authFacade.isLoggedIn$().pipe(map(isLoggedIn => isLoggedIn ? true : urlTree), catchError(() => of(urlTree)))
}
