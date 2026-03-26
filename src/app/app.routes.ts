import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { AdminComponent } from './admin/admin';
import { ContactosComponent } from './contactos/contactos';
import { DashboardPrincipalComponent } from './dashboard-principal/dashboard-principal';
import {ControlUsuariosComponent} from './control-usuarios/control-usuarios';
import { DashboardComponent } from './dashboard/dashboard';
import { FormularioEditarComponent } from './formulario-editar/formulario-editar';
import { FormularioEliminarComponent } from './formulario-eliminar/formulario-eliminar';
import { FormularioRegistrarComponent } from './formulario-registrar/formulario-registrar';

export const routes: Routes = [
	{ path: '', component: LoginComponent },
	{ path: 'admin', component: AdminComponent },
	{ path: 'contactos', component: ContactosComponent },
	{ path: 'dashboard-principal', component: DashboardPrincipalComponent },
	{ path: 'ControlUsuariosComponent', component: ControlUsuariosComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'formulario-editar', component: FormularioEditarComponent },
	{ path: 'formulario-eliminar', component: FormularioEliminarComponent },
	{ path: 'formulario-registrar', component: FormularioRegistrarComponent },
	{ path: '**', redirectTo: '' }

];







