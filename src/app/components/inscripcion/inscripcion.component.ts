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

  getUniversoByParticipanteId(id: number | null): string {
    if (id === null) {
      return '';
    }
    const participante = this.participantes.find((p: IParticipante) => p.id === id);
    const value = participante ? participante.universo.toString() : '';
    return value;
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