import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioRegistrarComponent } from './formulario-registrar';

describe('FormularioRegistrarComponent', () => {
	let component: FormularioRegistrarComponent;
	let fixture: ComponentFixture<FormularioRegistrarComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [FormularioRegistrarComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(FormularioRegistrarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('debe crearse correctamente', () => {
		expect(component).toBeTruthy();
	});
});

