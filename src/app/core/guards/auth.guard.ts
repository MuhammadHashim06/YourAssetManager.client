import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const userData = sessionStorage.getItem('userData')
const router = inject(Router)
  if(userData){
    return true
  }
  else {
    router.navigate(['auth/login'])
    return false
  }
};
