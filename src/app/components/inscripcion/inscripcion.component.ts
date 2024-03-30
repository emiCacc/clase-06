import { Component } from '@angular/core';
import { participantes, IParticipante } from '../../utils/db-participantes';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.scss']
})

export class InscripcionComponent {
  option: boolean = false;
  participantes = participantes;
  participanteSeleccionadoId: number | null = null;

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
  
}