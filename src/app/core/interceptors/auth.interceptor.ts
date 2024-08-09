import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  // Get userData from localStorage
  const userDataString = localStorage.getItem('userData');
  let userData;

  // Check if userDataString is not null or empty before parsing
  if (userDataString) {
    try {
      userData = JSON.parse(userDataString);
    } catch (error) {
      console.error('Error parsing userData from localStorage:', error);
      userData = null;
    }
  } else {
    userData = null;
  }

  // If userData is not null, clone the request and set the Authorization header
  if (userData && userData.responceData && userData.responceData.jwtToken) {
    const reqClone = req.clone({
      setHeaders: {
        Authorization: `Bearer ${userData.responceData.jwtToken}`
      }
    });
    return next(reqClone);
  }

  // If no userData or token, proceed with the original request
  return next(req);

};
