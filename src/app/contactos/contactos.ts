import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';

interface Contacto {
	nombre: string;
	institucion: string;
	telefono: string;
	cargo: string;
}

@Component({
	selector: 'app-contactos',
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
	templateUrl: './contactos.html',
	styleUrls: ['./contactos.css']
})
export class ContactosComponent {
	busqueda: string = '';
	filtroActivo: 'nombre' | 'institucion' | 'cargo' = 'nombre';

	displayedColumns: string[] = ['nombre', 'institucion', 'telefono', 'cargo'];

	contactos: Contacto[] = [
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
	];

	get contactosFiltrados(): Contacto[] {
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
}