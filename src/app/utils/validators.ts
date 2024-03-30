import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

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
    const value = control.value;
  
    if (!value) {
      return { required: true };
    }
  
    const notNumbersRegex = /[^0-9]/;
    const parsedValue = parseInt(value, 10);
  
    if (notNumbersRegex.test(value)) {
      return { powerLevel: true };
    }
  
    if (parsedValue < 500) {
      return { powerLevel: true };
    }
  
    return null;
  };
  

