import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';

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
	styleUrls: ['./admin.css']
})
export class AdminComponent {
	rol: string = '';
	password: string = '';
	hidePassword: boolean = true;
	errorMensaje: string = '';

	roles: string[] = [
		'Administrador',
		'Supervisor',
		'Editor'
	];

	constructor(private router: Router) {}

	ingresar(): void {
		if (this.rol === 'Administrador' && this.password === 'admin123') {
			this.errorMensaje = '';
			this.router.navigate(['/dashboard-principal']);
			return;
		}

		this.errorMensaje = 'Rol o contraseña incorrectos';
	}
}
