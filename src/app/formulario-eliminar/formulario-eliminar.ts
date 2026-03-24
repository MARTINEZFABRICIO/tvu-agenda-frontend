import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@Component({
	selector: 'app-formulario-eliminar',
	standalone: true,
	imports: [
		CommonModule,
		MatButtonModule,
		MatCardModule,
		MatIconModule
	],
	templateUrl: './formulario-eliminar.html',
	styleUrls: ['./formulario-eliminar.css']
})
export class FormularioEliminarComponent {
	contacto = {
		nombre: 'María Pérez',
		institucion: 'TVU',
		telefono: '77712345',
		cargo: 'Directora'
	};

	eliminado: boolean = false;

	cancelarEliminacion(): void {
		console.log('Eliminación cancelada');
	}

	confirmarEliminacion(): void {
		this.eliminado = true;
		console.log('Contacto eliminado', this.contacto);
	}
}