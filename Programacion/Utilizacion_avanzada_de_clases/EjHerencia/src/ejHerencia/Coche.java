package ejHerencia;

public class Coche extends Vehiculo {

	// Atributos propios de la subclase
	
	public String matricula;
	public String conduccion;
	public String combustible;
	public int caballos;
	
	// Constructor por defecto
	public Coche() {
		super();
	}

	// Constructor con parametros
	public Coche(boolean motorizado, int ruedas, String marca, String color, String dueño, int agnioCompra,
			String matricula, String conduccion, String combustible, int caballos) {
		super(motorizado, ruedas, marca, color, dueño, agnioCompra);
		this.matricula = matricula;
		this.conduccion = conduccion;
		this.combustible = combustible;
		this.caballos = caballos;
	}
		
	// Metodos propios
	public void arrancar() {}
	public void cambiarMarcha(int marcha) {
	
	}

	@Override
	public String toString() {
		return "Coche [motorizado=" + motorizado + ", ruedas=" + ruedas + ", marca=" + marca + ", color=" + color
				+ ", dueño=" + dueño + ", agnioCompra=" + agnioCompra + ", matricula=" + matricula + ", conduccion="
				+ conduccion + ", combustible=" + combustible + ", caballos=" + caballos + "]";
	}
}
