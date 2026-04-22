package ejHerencia;

public class Bicicleta extends Vehiculo {
	
	// Atributos propios de la subclase
	
	public boolean electrico;
	public int platos;
	public int piñones;
	
	// Constructor por defecto
	public Bicicleta() {
		super();
	}

	// Constructor con parametros
	public Bicicleta(boolean motorizado, int ruedas, String marca, String color, String dueño, int agnioCompra,
			boolean electrico, int platos, int piñones) {
		super(motorizado, ruedas, marca, color, dueño, agnioCompra);
		this.electrico = electrico;
		this.platos = platos;
		this.piñones = piñones;
	}
	
	// Metodos propios
	public void subirse() {}

	@Override
	public String toString() {
		return "Bicicleta [motorizado=" + motorizado + ", ruedas=" + ruedas + ", marca=" + marca + ", color=" + color
				+ ", dueño=" + dueño + ", agnioCompra=" + agnioCompra + ", electrico=" + electrico + ", platos=" + platos
				+ ", piñones=" + piñones + "]";
	}

}
