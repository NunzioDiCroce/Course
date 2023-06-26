package it.epicode.be;

import java.util.*; // import

public class Helloworld {

public static void main (String[] args)
		{
	
		// - - - - - - - - - - - - - - - - - - - - ESERCIZIO 1 - - - - - - - - - - - - - - - - - - - -
		System.out.println("");
		System.out.println("- - - - - - - - - - - - - - - - - - - - ESERCIZIO 1 - - - - - - - - - - - - - - - - - - - -");
		// Stampa a console  la frase
		System.out.println("This is my first Epicode Java Project!");
		
		
		// - - - - - - - - - - - - - - - - - - - - ESERCIZIO 2 - - - - - - - - - - - - - - - - - - - -
		System.out.println("");
		System.out.println("- - - - - - - - - - - - - - - - - - - - ESERCIZIO 2 - - - - - - - - - - - - - - - - - - - -");
		int firstNumber = 2;
		int secondNumber = 10;
		System.out.println("Il primo numero è: " + firstNumber);
		System.out.println("Il secondo numero è: " + secondNumber);
		System.out.println("Il loro prodotto è: " + multiplication(firstNumber, secondNumber));
		
		System.out.println("");
		String word = "Stringa";
		int number = 10;
		System.out.println("La stringa è: " + word);
		System.out.println("Il numero è: " + number);
		System.out.println("La loro concatenazione è: " + concatenate(word, number));
		
		
		System.out.println("");
		String[] myArray = new String[5];
		myArray[0] = "stringa1";
		myArray[1] = "stringa2";
		myArray[2] = "stringa3";
		myArray[3] = "stringa4";
		myArray[4] = "stringa5";
		
		String myString = "stringaNuova";
		
		System.out.println("myArray è: " + Arrays.toString(myArray));
		System.out.println("La stringa da inserire al quarto posto è: " + myString);
		pushIntoArray(myArray, myString);
		
		
		// - - - - - - - - - - - - - - - - - - - - ESERCIZIO 3 - - - - - - - - - - - - - - - - - - - -
		System.out.println("");
		System.out.println("- - - - - - - - - - - - - - - - - - - - ESERCIZIO 3 - - - - - - - - - - - - - - - - - - - -");
		
		Scanner esercizioTre = new Scanner(System.in);
		
		System.out.println("Inserire la prima stringa");
		String primaStringa = esercizioTre.nextLine();
		System.out.println("Inserire la seconda stringa");
		String secondaStringa = esercizioTre.nextLine();
		System.out.println("Inserire la terza stringa");
		String terzaStringa = esercizioTre.nextLine();
		
		System.out.println("L'ordine delle tre stringhe é: " + primaStringa + " " + secondaStringa + " " + terzaStringa);
		System.out.println("L'ordine invertito é: " + terzaStringa + " " + secondaStringa + " " + primaStringa);

		
		// - - - - - - - - - - - - - - - - - - - - ESERCIZIO 4 - - - - - - - - - - - - - - - - - - - -
		System.out.println("");
		System.out.println("- - - - - - - - - - - - - - - - - - - - ESERCIZIO 4 - - - - - - - - - - - - - - - - - - - -");
		
		System.out.println("Calcoliamo il perimetro di un rettangolo");
		
		Scanner rettangolo = new Scanner(System.in);
		System.out.println("Indicare la lunghezza della base");
		String base = rettangolo.nextLine();
		int baseInt = Integer.parseInt(base);
		System.out.println("Indicare la lunghezza dell'altezza");
		String altezza = rettangolo.nextLine();
		int altezzaInt = Integer.parseInt(altezza);
		System.out.println("Il perimetro del rettangolo è: " + perimetroRettangolo(baseInt, altezzaInt));
		
		
		System.out.println("");
		System.out.println("Verifichiamo se un numero è pari o dispari");
		
		Scanner pari = new Scanner(System.in);
		System.out.println("Indicare un numero");
		String numero = pari.nextLine();
		int numeroInt = Integer.parseInt(numero);
		pariDispari(numeroInt);
		
		
		System.out.println("");
		System.out.println("Calcoliamo l'area di un triangolo con la formula di Erone");
		
		Scanner triangolo = new Scanner(System.in);
		System.out.println("Indicare il primo lato");
		String primoLato = triangolo.nextLine();
		int primoLatoInt = Integer.parseInt(primoLato);
		
		System.out.println("Indicare il secondo lato");
		String secondoLato = triangolo.nextLine();
		int secondoLatoInt = Integer.parseInt(secondoLato);
		
		System.out.println("Indicare il terzo lato");
		String terzoLato = triangolo.nextLine();
		int terzoLatoInt = Integer.parseInt(terzoLato);
		
		//System.out.println("L'area del triangolo è: " + areaTriangolo(primoLatoInt, secondoLatoInt, terzoLatoInt));
		
		}


//- - - - - - - - - - - - - - - - - - - - ESERCIZIO 2 - - - - - - - - - - - - - - - - - - - -
public static int multiplication(int _firstNumber, int _secondNumber) {
	return _firstNumber * _secondNumber;
}

public static String concatenate(String _word, int _number) {
	return _word + _number;
}

public static void pushIntoArray(String[] _myArray, String _myString) {
	int n = _myArray.length;
	String[] myNewArray;
	myNewArray = Arrays.copyOf(_myArray, n+1);
	myNewArray[3] = _myString;
	myNewArray[4] = _myArray[3];
	myNewArray[5] = _myArray[4];
	System.out.println("myArray modificato è " + Arrays.toString(myNewArray));
}


//- - - - - - - - - - - - - - - - - - - - ESERCIZIO 4 - - - - - - - - - - - - - - - - - - - -
public static void pariDispari(int _numero) {
	int a = _numero;
	int b = 2;
	int resto = a%b;
	if(resto == 0) {
		System.out.println("Il numero indicato è pari");
	} else {
		System.out.println("Il numero indicato è dispari");
	}
}

public static int perimetroRettangolo(int _base, int _altezza) {
	return _base *2 + _altezza *2;
}

/*public static double areaTriangolo(int _a, int _b, int _c) {
	return Math.sqrt((_a+_b+_c)*((-1*_a)+_b+_c)*((_a-_b+_c)*(_a+_b-_c))/(4);
}*/


}



