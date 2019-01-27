import { Injectable, ErrorHandler, Injector} from '@angular/core';
import {UNAUTHORIZED, BAD_REQUEST, FORBIDDEN} from "http-status-codes";
import {Router} from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {

  static readonly REFRESH_PAGE_ON_TOAST_CLICK_MESSAGE: string = "An error occurred: Please click this message to refresh";
  static readonly DEFAULT_ERROR_TITLE: string = "Something went wrong";
  
  constructor(private injector: Injector,private toastrService:ToastrService){};
               
  
  public handleError(error: any) {
    let router = this.injector.get(Router);
    let httpErrorCode = error.status;
    switch (httpErrorCode) {
      case UNAUTHORIZED:
          router.navigateByUrl("/login");
          break;
      case FORBIDDEN:
          router.navigateByUrl("/unauthorized");
          break;
      case BAD_REQUEST:
         this.showError(error.message);
          break;
      default:
      console.log(error);
         //this.showError(GlobalErrorHandlerService.REFRESH_PAGE_ON_TOAST_CLICK_MESSAGE);
    }
  }
  
  private showError(message:string){
    this.toastrService.error(
        GlobalErrorHandlerService.DEFAULT_ERROR_TITLE,
        message,
        {
          closeButton: true,
          timeOut: 5000
        }
      )
  }
}