import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';

interface UsuarioSistema {
	nombre: string;
	rol: string;
	fecha: string;
	hora: string;
	estado: string;
}

@Component({
	selector: 'app-control-usuarios',
	standalone: true,
	imports: [
		CommonModule,
		FormsModule,
		MatButtonModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatTableModule
	],
	templateUrl: './control-usuarios.html',
	styleUrls: ['./control-usuarios.css']
})
export class ControlUsuariosComponent {
	busqueda: string = '';

	displayedColumns: string[] = ['nombre', 'rol', 'fecha', 'hora', 'estado', 'acciones'];

	usuarios: UsuarioSistema[] = [
		{
			nombre: 'Juan Pérez',
			rol: 'Administrador',
			fecha: '22/03/2026',
			hora: '08:15',
			estado: 'Activo'
		},
		{
			nombre: 'María López',
			rol: 'Editor',
			fecha: '22/03/2026',
			hora: '09:05',
			estado: 'Activo'
		},
		{
			nombre: 'Carlos Vargas',
			rol: 'Supervisor',
			fecha: '22/03/2026',
			hora: '09:40',
			estado: 'Inactivo'
		},
		{
			nombre: 'Ana Flores',
			rol: 'Administrador',
			fecha: '22/03/2026',
			hora: '10:12',
			estado: 'Activo'
		},
		{
			nombre: 'Luis Medina',
			rol: 'Editor',
			fecha: '22/03/2026',
			hora: '11:00',
			estado: 'Inactivo'
		}
	];

	get usuariosFiltrados(): UsuarioSistema[] {
		const texto = this.busqueda.trim().toLowerCase();

		if (!texto) {
			return this.usuarios;
		}

		return this.usuarios.filter((usuario) =>
			usuario.nombre.toLowerCase().includes(texto) ||
			usuario.rol.toLowerCase().includes(texto) ||
			usuario.fecha.toLowerCase().includes(texto) ||
			usuario.estado.toLowerCase().includes(texto)
		);
	}

	limpiarBusqueda(): void {
		this.busqueda = '';
	}

	cambiarEstado(usuario: UsuarioSistema): void {
		usuario.estado = usuario.estado === 'Activo' ? 'Inactivo' : 'Activo';
	}
}