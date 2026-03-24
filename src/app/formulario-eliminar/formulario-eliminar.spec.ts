import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormularioEliminarComponent} from './formulario-eliminar';

describe('FormularioEliminarComponent', () => {
	let component: FormularioEliminarComponent;
	let fixture: ComponentFixture<FormularioEliminarComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [FormularioEliminarComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(FormularioEliminarComponent);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});