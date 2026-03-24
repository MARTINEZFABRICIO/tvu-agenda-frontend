import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [
		CommonModule,
		FormsModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule
	],
	templateUrl: './login.html',
	styleUrl: './login.css'
})
export class LoginComponent {
	ci: string = '';

	constructor(private router: Router) {}

	ingresar(): void {
		if (this.ci.trim() === '') {
			alert('INGRESE SU C.I');
			return;
		}

		const entrarComoUsuario = confirm('¿ENTRAR COMO USUARIO?');

		if (entrarComoUsuario) {
			this.router.navigate(['/contactos']);
			return;
		}

		this.router.navigate(['/admin']);
	}
}