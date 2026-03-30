import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
	selector: 'app-registrarse',
	standalone: true,
	imports: [
		CommonModule,
		FormsModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatCardModule
	],
	templateUrl: './registrarse.html',
	styleUrls: ['./registrarse.css']
})
export class RegistrarseComponent {
	nombre: string = '';
	apellido: string = '';
	ci: string = '';

	registroExitoso: boolean = false;
	nombreGuardado: string = '';
	apellidoGuardado: string = '';
	ciGuardado: string = '';

	constructor(private router: Router) {}

	registrar(): void {
		if (
			this.nombre.trim() === '' ||
			this.apellido.trim() === '' ||
			this.ci.trim() === ''
		) {
			alert('COMPLETE TODOS LOS CAMPOS');
			return;
		}

		this.nombreGuardado = this.nombre;
		this.apellidoGuardado = this.apellido;
		this.ciGuardado = this.ci;
		this.registroExitoso = true;
	}

	limpiarFormulario(): void {
		this.nombre = '';
		this.apellido = '';
		this.ci = '';
		this.registroExitoso = false;
		this.nombreGuardado = '';
		this.apellidoGuardado = '';
		this.ciGuardado = '';
	}
}