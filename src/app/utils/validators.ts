import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const noHomeroValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

    if(typeof control.value === 'string' && control.value.toLowerCase().includes('homero')){
        return {
            noHomero: true
        };
    }
     return null; //Si retorno un null, significa que el campo NO TIENE errores, es valido.
}