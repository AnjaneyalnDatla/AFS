import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Injectable({
    providedIn: 'root'
})
export class LoaderInterceptorService implements HttpInterceptor {

    constructor(private spinnerService: Ng4LoadingSpinnerService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.showLoader();

        return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                this.onEnd();
            }
        },
            (err: any) => {
                this.onEnd();
            }));
    }

    private onEnd(): void {
        this.hideLoader();
    }

    private showLoader(): void {
        this.spinnerService.show();
    }

    private hideLoader(): void {
        this.spinnerService.hide();
    }

}