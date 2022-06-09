import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }
  
  showSuccess(texto){
    return Swal.fire({
      buttonsStyling: false,
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      icon: 'success',
      //title: 'Muito bem',
      html: texto,
      //showConfirmButton: false,
      //timer: 30000,
      backdrop: false,
      focusConfirm: true
    })
  }

  showErro(texto){
    return Swal.fire({
      buttonsStyling: false,
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      icon: 'error',
      title: 'Oops...',
      html: texto,
      //showConfirmButton: false,
      //timer: 3000,
      backdrop: false,
      focusConfirm: true
    })
  }
}
