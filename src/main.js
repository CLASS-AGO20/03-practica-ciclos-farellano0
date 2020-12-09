export default class App {

    factorial(numero){
        let fact = 1;

        for(let i = numero; i > 0; i = i - 1){
            fact = i * fact;
        }
        return fact;
    }
    convertirAString(numero){
        let i = 1;
        let resultado = "";
        
        while(i <= numero){
             resultado = "*" + resultado;
            i++;
        }

        return resultado;
    }
    obtenerDivisibles(numero){
        let i = numero;
        let div = 0;
        let a = numero;

        do{
            if(a % i == 0){
                div ++; 
            }
            i --;

        } while (i >= 1);
        return div;
    }
    elevar(numero, potencia){
        let res = 1

        for(let i = 1; i <= potencia; i++){
            res = res * numero;
        }
        return res;
    }

}

let app = new App();

console.log(app.factorial(5));

console.log(app.convertirAString(5));

console.log(app.obtenerDivisibles(6));

console.log(app.elevar(3,4));
