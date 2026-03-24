import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
	selector: 'app-admin',
	standalone: true,
	imports: [
		CommonModule,
		FormsModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
		MatIconModule
	],
	templateUrl: './admin.html',
	styleUrl: './admin.css'
})
export class AdminComponent {
	rol: string = '';
	password: string = '';
	hidePassword: boolean = true;

	roles: string[] = [
		'Administrador',
		'Jefe de Prensa',
		'Soporte tecnico'
	];

	constructor(private router: Router) {}

	ingresar(): void {
		if (this.rol === 'Administrador' && this.password.trim() !== '') {
			this.router.navigate(['/dashboard']);
			return;
		}

		alert('Seleccione un rol válido e ingrese la contraseña');
	}
}