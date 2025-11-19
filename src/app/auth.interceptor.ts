import { HttpInterceptorFn } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { jwtDecode } from 'jwt-decode';
import { CommonService } from './services/common.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem("Access Token:");
  const loader = inject(CommonService);
  const router = inject(Router);

  // ✅ Loader start
  loader.show();

  if (token) {
    try {
      const decoded: any = jwtDecode(token);
      const expiry = decoded.exp * 1000; // convert to ms

      if (Date.now() > expiry) {
        // Token expired → logout + redirect
        localStorage.removeItem('Access Token:');
        loader.hide();
        router.navigate(['/login']);
        return next(req); // stop API call
      }
    } catch (error) {
      console.log("Invalid token");
      localStorage.removeItem('Access Token:');
      loader.hide();
      router.navigate(['/login']);
      return next(req);
    }
  }
  // ✅ Set header only if token exists
  const clonedReq = token
    ? req.clone({
      setHeaders: {
        'Authorization': token,
        'Content-Type': 'application/json',
      }
    })
    : req;

  // ✅ Send request and hide loader after response
  return next(clonedReq).pipe(
    finalize(() => loader.hide())
  );

};
