import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ControlUsuariosComponent} from './control-usuarios';

describe('ControlUsuariosComponent', () => {
	let component: ControlUsuariosComponent;
	let fixture: ComponentFixture<ControlUsuariosComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ControlUsuariosComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(ControlUsuariosComponent);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
