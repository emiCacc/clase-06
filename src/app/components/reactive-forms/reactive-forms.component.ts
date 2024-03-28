import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {

  /** 
 * Entidades que manipulan los formularios de Angular: 
 * 
 * FormGroup - Agrupa otros controles y define objetos 
 * FormControl - Manipula el valor de los campos (inputs, selects, checkbox) 
 * FormArray - Maneja arrays de otros controles * 
 * FormBuilder:
 * Si tengo un objeto como este y quiero manejarlo de alguna manera 
 * Modelo de formulario
 * 
 * {
 *    name: 'Matias',
 *    lastName: 'Gonzalez,
 *    email: 'mati@gmail.com 
 * } 
 * voy a usar el FormBuilder
 * 
*/

userForm = this.formBuilder.group({
  name: this.formBuilder.control(''),
  lastName: this.formBuilder.control(''),
  email: this.formBuilder.control('', [
    Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}'), 
    Validators.required
  ]),
  password: [''],
})

get emailControl() {
  return this.userForm.get('email');
}

get paswordControl() {
  return this.userForm.get('password');
}

  constructor(private formBuilder: FormBuilder) {}

onSubmit(): void{
  //alert('Usuario creado!' + JSON.stringify(this.userForm.value));
  Swal.fire({
    icon: 'success',
    title: 'Realizado',
    text: 'Usuario registrado'
  })
}

}
