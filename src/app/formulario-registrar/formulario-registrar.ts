import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
	selector: 'app-formulario-registrar',
	standalone: true,
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		MatIconModule,
		MatCardModule
	],
	templateUrl: './formulario-registrar.html',
	styleUrl: './formulario-registrar.css'
})
export class FormularioRegistrarComponent {
	formulario: FormGroup;
	datosGuardados: any = null;

	constructor(private fb: FormBuilder) {
		this.formulario = this.fb.group({
			nombre: ['', [Validators.required, Validators.minLength(2)]],
			institucion: ['', [Validators.required, Validators.minLength(2)]],
			telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{7,10}$/)]],
			cargo: ['', [Validators.required, Validators.minLength(2)]]
		});
	}

	guardarContacto(): void {
		if (this.formulario.invalid) {
			this.formulario.markAllAsTouched();
			return;
		}

		this.datosGuardados = {
			nombre: this.formulario.value.nombre,
			institucion: this.formulario.value.institucion,
			telefono: this.formulario.value.telefono,
			cargo: this.formulario.value.cargo
		};

		console.log('Nuevo contacto guardado:', this.datosGuardados);
	}

	limpiarFormulario(): void {
		this.formulario.reset({
			nombre: '',
			institucion: '',
			telefono: '',
			cargo: ''
		});
		this.datosGuardados = null;
	}
}