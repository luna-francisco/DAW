package ejHerencia;

public class Motocicleta extends Vehiculo {
	// Atributos propios de la subclase
	public String matricula;
	public String combustible;
	public int caballos;
	
	// Constructor por defecto
	public Motocicleta() {
		super();
	}

	// Constructor con parametros
	public Motocicleta(boolean motorizado, int ruedas, String marca, String color, String dueño, int agnioCompra,
			String matricula, String combustible, int caballos) {
		super(motorizado, ruedas, marca, color, dueño, agnioCompra);
		this.matricula = matricula;
		this.combustible = combustible;
		this.caballos = caballos;
	}
	
	// Metodos propios
	public void arrancar() {}
	public void subirMarcha() {}
	private void bajarMarcha() {}

	@Override
	public String toString() {
		return "Motocicleta [motorizado=" + motorizado + ", ruedas=" + ruedas + ", marca=" + marca + ", color=" + color
				+ ", dueño=" + dueño + ", agnioCompra=" + agnioCompra + ", matricula=" + matricula + ", combustible="
				+ combustible + ", caballos=" + caballos + "]";
	}
}
