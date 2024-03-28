import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent {

  myFormModel = {
    name: '',
    lastName: '',
    email: '',
    password: '',
  };

  onSubmit(ngForm: NgForm):void {
    console.log(ngForm);
  if (ngForm.valid){
    Swal.fire({
      title: 'Enviado',
      icon: 'success',
    });
    console.log(ngForm.form.value);
  }else {
    ngForm.form.markAllAsTouched();
      // Swal.fire({
      // title: 'Error',
      // icon: 'error',
      // })
  }
  }

}
