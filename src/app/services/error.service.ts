import { Injectable } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private toastr: ToastrService) { }

  msgError(e: HttpErrorResponse){
    if (e.error.msg){
      this.toastr.error(e.error.msg, 'Error');
    } else{
      this.toastr.error('Upss ocurrio un error, comuniquese con el administrador', 'Error');
    }
  }
}
