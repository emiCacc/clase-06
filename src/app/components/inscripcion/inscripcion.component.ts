import { AfterViewChecked, AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { participantes, IParticipante } from '../../utils/db-participantes';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.scss']
})

export class InscripcionComponent implements AfterViewChecked {
  @ViewChild('inputNombreNuevo') inputNombreNuevo!: ElementRef;
  @ViewChild('inputUniverso') inputUniverso!: ElementRef;
  @ViewChild('inputPlaneta') inputPlaneta!: ElementRef;
  @ViewChild('inputPoderPelea') inputPoderPelea!: ElementRef;
  
  option: boolean = false;
  participantes = participantes;
  participanteSeleccionadoId: number | null = null;

  ngAfterViewChecked(): void {
    this.clear();
  }

  getUniversoById(id: number | null): string {
    if (id === null) {
      return '';
    }
    const participante = this.participantes.find((p: IParticipante) => p.id === id);
    const universo = participante ? participante.universo.toString() : '';
    return universo;
  }

  getPlanetaById(id: number | null): string {
    if (id === null) {
      return '';
    }
    const participante = this.participantes.find((p: IParticipante) => p.id === id);
    const planeta = participante ? participante.planeta.toString() : '';
    return planeta;
  }

  getPoderById(id: number | null): string {
    if (id === null) {
      return '';
    }
    const participante = this.participantes.find((p: IParticipante) => p.id === id);
    const poder = participante ? participante.poderPelea.toString() : '';
    return poder;
  }

  getFotoByParticipanteId(id: number | null): string{
    if (id === null) {
      return '../../assets/img/logo_budokai_empty.svg';
    }
    const participante = this.participantes.find((p: IParticipante) => p.id === id);
    const value = participante ? participante.imgUrl.toString() : '';
    return value;
  }

  clear() {
    this.inputNombreNuevo.nativeElement.value = '';
    this.inputUniverso.nativeElement.value = '';
    this.inputPlaneta.nativeElement.value = '';
    this.inputPoderPelea.nativeElement.value = '';
  }
  
}