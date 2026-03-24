import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';

interface ContactoDashboard {
	nombre: string;
	institucion: string;
	telefono: string;
	cargo: string;
}

@Component({
	selector: 'app-dashboard',
	standalone: true,
	imports: [
		CommonModule,
		FormsModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatTableModule
	],
	templateUrl: './dashboard.html',
	styleUrl: './dashboard.css'
})
export class DashboardComponent {
	busqueda: string = '';
	filtroActivo: 'nombre' | 'institucion' | 'cargo' = 'nombre';

	displayedColumns: string[] = ['nombre', 'institucion', 'telefono', 'cargo', 'acciones'];

	contactos: ContactoDashboard[] = [
		{
			nombre: 'María Pérez',
			institucion: 'TVU',
			telefono: '77712345',
			cargo: 'Directora'
		},
		{
			nombre: 'Carlos Rojas',
			institucion: 'Radio Universitaria',
			telefono: '71234567',
			cargo: 'Periodista'
		},
		{
			nombre: 'Ana Flores',
			institucion: 'Comunicación',
			telefono: '78945612',
			cargo: 'Productora'
		},
		{
			nombre: 'Luis Medina',
			institucion: 'TVU',
			telefono: '74561238',
			cargo: 'Camarógrafo'
		},
		{
			nombre: 'Paola Vargas',
			institucion: 'Universidad',
			telefono: '70114589',
			cargo: 'Coordinadora'
		}
	];

	constructor(private router: Router) {}

	get contactosFiltrados(): ContactoDashboard[] {
		const texto = this.busqueda.trim().toLowerCase();

		if (!texto) {
			return this.contactos;
		}

		return this.contactos.filter((contacto) => {
			const valor = contacto[this.filtroActivo].toLowerCase();
			return valor.includes(texto);
		});
	}

	setFiltro(filtro: 'nombre' | 'institucion' | 'cargo'): void {
		this.filtroActivo = filtro;
	}

	limpiarBusqueda(): void {
		this.busqueda = '';
	}

	nuevoContacto(): void {
		this.router.navigate(['/formulario-registrar']);
	}

	editarContacto(contacto: ContactoDashboard): void {
		this.router.navigate(['/formulario-editar']);
	}

	eliminarContacto(contacto: ContactoDashboard): void {
		this.router.navigate(['/formulario-eliminar']);
	}
}