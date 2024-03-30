import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const noHomeroValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

    if(typeof control.value === 'string' && control.value.toLowerCase().includes('homero')){
        return {
            noHomero: true
        };
    }
     return null; 
}

export function noSymbolsValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (!control.value) {
      return null; 
    }
  
    const simbolosRegex = /[!@#$%^&*(),.?":{}|<>]/; 
    if (simbolosRegex.test(control.value)) {
      return { noSymbols: true };
    }
  
    return null; 
  }

  export const onlyNumbersValidator: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } | null => {
    if (!control.value) {
      return null;
    }
  
    const notNumbersRegex = /[^0-9]/;
    const value = parseInt(control.value, 10);
  
    if (notNumbersRegex.test(control.value)) {
      return { onlyNumbers: true };
    }
  
    if (value < 1 || value > 12) {
      return { onlyNumbers: true };
    }
  
    return null;
  };

  export const powerLevelValidator: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } | null => {
    if (!control.value) {
      return null;
    }
  
    const notNumbersRegex = /[^0-9]/;
    const value = parseInt(control.value, 10);
  
    if (notNumbersRegex.test(control.value)) {
      return { powerLevel: true };
    }
  
    if (value < 500) {
      return { powerLevel: true };
    }
  
    return null;
  };