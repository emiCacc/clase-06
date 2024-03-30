import { AfterViewChecked, Component, ElementRef, ViewChild } from '@angular/core';
import { participantes, IParticipante } from '../../utils/db-participantes';
import { FormBuilder, Validators } from '@angular/forms';
import { noSymbolsValidator, onlyNumbersValidator, powerLevelValidator } from 'src/app/utils/validators';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.scss']
})


export class InscripcionComponent implements AfterViewChecked {

  constructor (private formBuilder: FormBuilder){}
  @ViewChild('inputParticipanteAntiguo') inputParticipanteAntiguo!: ElementRef;
  @ViewChild('inputNombreNuevo') inputNombreNuevo!: ElementRef;
  @ViewChild('inputUniverso') inputUniverso!: ElementRef;
  @ViewChild('inputPlaneta') inputPlaneta!: ElementRef;
  @ViewChild('inputPoderPelea') inputPoderPelea!: ElementRef;
  
  option: boolean = false;
  participantes = participantes;
  participanteSeleccionadoId: number | null = null;

  inscripcionForm = this.formBuilder.group({
    participante: [null], 
    nombre: ['', [noSymbolsValidator]],
    universo: ['', [onlyNumbersValidator]],
    planeta: [''],
    poderPelea: ['', [powerLevelValidator]]
  });

  get nameControl() {
    return this.inscripcionForm.get('nombre');
  }

  get universoControl() {
    return this.inscripcionForm.get('universo');
  }

  get planetaControl() {
    return this.inscripcionForm.get('planeta');
  }

  get poderPeleaControl() {
    return this.inscripcionForm.get('poderPelea');
  }

  ngAfterViewChecked(): void {
  }

  getUniversoById(): string {
    const id = this.inscripcionForm.get('participante')?.value;
    if (id === null) {
      return '';
    }
    const participante = this.participantes.find((p: IParticipante) => p.id === id);
    const universo = participante ? participante.universo.toString() : '';
    return universo;
  }

  getPlanetaById(): string {
    const id = this.inscripcionForm.get('participante')?.value;
  if (id === null) {
    return '';
  }
  const participante = this.participantes.find((p: IParticipante) => p.id === id);
  const planeta = participante ? participante.planeta.toString() : '';
  return planeta;
  }

  getPoderById(): string {
    const id = this.inscripcionForm.get('participante')?.value;
    if (id === null) {
      return '';
    }
    const participante = this.participantes.find((p: IParticipante) => p.id === id);
    const poder = participante ? participante.poderPelea.toString() : '';
    return poder;
  }

  getFotoByParticipanteId(): string {
    const id = this.inscripcionForm.get('participante')?.value;
    if (id === null) {
      return '../../assets/img/logo_budokai_empty.svg';
    }
    const participante = this.participantes.find((p: IParticipante) => p.id === id);
    const value = participante ? participante.imgUrl.toString() : '';
    return value;
  }

  updateFormValues(): void {
    if (this.option) {
      const participante = this.participantes.find(p => p.id === this.participanteSeleccionadoId);
      if (participante) {
        this.inscripcionForm.patchValue({
          universo: participante.universo.toString(),
          planeta: participante.planeta,
          poderPelea: participante.poderPelea
        });
      }
    } else {
      this.inscripcionForm.patchValue({
        nombre: '',
        universo: null,
        planeta: '',
        poderPelea: ''
      });
    }
  }

  onOptionChange(): void {
    this.updateFormValues();
  }

  clear() {
    this.participanteSeleccionadoId = null;
    this.inscripcionForm.reset({
      nombre: '',
      universo: null,
      planeta: '',
      poderPelea: ''
    });
  }
  
}