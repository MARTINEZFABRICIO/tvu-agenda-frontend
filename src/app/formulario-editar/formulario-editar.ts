import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

@Component({
	selector: 'app-formulario-editar',
	standalone: true,
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatCardModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule
	],
	templateUrl: './formulario-editar.html',
	styleUrls: ['./formulario-editar.css']
})
export class FormularioEditarComponent {
	formulario: FormGroup;
	datosGuardados: {
		nombre: string;
		institucion: string;
		telefono: string;
		cargo: string;
	} | null = null;

	constructor(private fb: FormBuilder) {
		this.formulario = this.fb.group({
			nombre: ['', [Validators.required, Validators.minLength(3)]],
			institucion: ['', [Validators.required, Validators.minLength(3)]],
			telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{7,12}$/)]],
			cargo: ['', [Validators.required, Validators.minLength(3)]]
		});
	}

	guardarFormulario(): void {
		if (this.formulario.invalid) {
			this.formulario.markAllAsTouched();
			return;
		}

		this.datosGuardados = {
			nombre: this.formulario.value['nombre'] ?? '',
			institucion: this.formulario.value['institucion'] ?? '',
			telefono: this.formulario.value['telefono'] ?? '',
			cargo: this.formulario.value['cargo'] ?? ''
		};
	}

	limpiarFormulario(): void {
		this.formulario.reset();
		this.datosGuardados = null;
	}
}