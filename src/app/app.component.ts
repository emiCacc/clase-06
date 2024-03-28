import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

// myForm = this.formBuilder.group({
//   name: this.formBuilder.control(''),
//   lastName: this.formBuilder.control(''),
// })
  constructor(private formBuilder: FormBuilder){}
}
