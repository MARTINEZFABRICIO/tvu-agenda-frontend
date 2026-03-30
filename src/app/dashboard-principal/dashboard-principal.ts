import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {ControlUsuariosComponent} from '../control-usuarios/control-usuarios';
import {DashboardComponent} from '../dashboard/dashboard';

@Component({
	selector: 'app-dashboard-principal',
	standalone: true,
	imports: [
		CommonModule,
		MatButtonModule,
		MatCardModule,
		MatIconModule,
		ControlUsuariosComponent,
		DashboardComponent
	],
	templateUrl: './dashboard-principal.html',
	styleUrls: ['./dashboard-principal.css']
})
export class DashboardPrincipalComponent {
	vistaActiva: 'principal' | 'usuarios' | 'contactos' = 'principal';

	abrirControlUsuarios(): void {
		this.vistaActiva = 'usuarios';
	}

	abrirContactos(): void {
		this.vistaActiva = 'contactos';
	}

	volverInicio(): void {
		this.vistaActiva = 'principal';
	}
}

