package ejHerencia;

public class Main {

	public static void main(String[] args) {
		// Creo un array de 5 vehiculos con los objetos que pide el ejercicio.
		Vehiculo[] vehiculos = new Vehiculo[5];

		Coche coche1 = new Coche(true, 4, "Seat", "Rojo", "Francisco", 2020, "1234-ABC", "Manual", "Gasolina", 110);

		Coche coche2 = new Coche(true, 4, "Renault", "Azul", "Lucia", 2022, "5678-DEF", "Automatica", "Diesel", 130);

		Bicicleta bicicleta = new Bicicleta(false, 2, "Orbea", "Verde", "Marta", 2023, false, 3, 7);

		Motocicleta motocicleta = new Motocicleta(true, 2, "Yamaha", "Negra", "Carlos", 2021, "9012-GHI",
				"Gasolina", 95);

		Vehiculo vehiculo = new Vehiculo(false, 4, "Generico", "Blanco", "Empresa", 2019);

		vehiculos[0] = coche1;
		vehiculos[1] = coche2;
		vehiculos[2] = bicicleta;
		vehiculos[3] = motocicleta;
		vehiculos[4] = vehiculo;
		
		// Recorro el array y muestro la informacion de cada objeto por pantalla.
		for (int i = 0; i < vehiculos.length; i++) {
			System.out.println(vehiculos[i]);
		}
	}
}
