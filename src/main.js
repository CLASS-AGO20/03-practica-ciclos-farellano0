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

}

let app = new App();

console.log(app.factorial(5));

console.log(app.convertirAString(5));
