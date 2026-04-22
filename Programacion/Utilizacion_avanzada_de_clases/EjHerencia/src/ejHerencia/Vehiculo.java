package ejHerencia;

// Superclase

public class Vehiculo {
	
	// Atributos
	
	public boolean motorizado;
	public int ruedas;
	public String marca;
	public String color;
	public String dueño;
	protected int agnioCompra;
	
	// Constructor por defecto
	public Vehiculo() {
	}

	// Constructor con parametros
	public Vehiculo(boolean motorizado, int ruedas, String marca, String color, String dueño, int agnioCompra) {
		this.motorizado = motorizado;
		this.ruedas = ruedas;
		this.marca = marca;
		this.color = color;
		this.dueño = dueño;
		this.agnioCompra = agnioCompra;
	}
	
	// Metodos de la clase
	public void estacionar() {}

	@Override
	public String toString() {
		return "Vehiculo [motorizado=" + motorizado + ", ruedas=" + ruedas + ", marca=" + marca + ", color=" + color
				+ ", dueño=" + dueño + ", agnioCompra=" + agnioCompra + "]";
	}
	
	
	

}
