
class Rectangulo{
    #area = 0;      // El hash antes del nombre de la variable la hace privada pero no es un estandar aun en JS
                    // Aún no hay métodos privados

    constructor(base = 0, altura = 0){
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }

    calcularArea(){
        console.log(this.#area * 2);
    }
}

const rectangulo = new Rectangulo(10, 15);
// rectangulo.#area = 100;  // Esto no debería ser posible ya que no tiene sentido lógico poder modificar el área
rectangulo.calcularArea();

console.log(rectangulo);

