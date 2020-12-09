export default class App {

    factorial(numero){
        let fact = 1;

        for(let i = numero; i > 0; i = i - 1){
            fact = i * fact;
        }
        return fact;
    }
}

let app = new App();

console.log(app.factorial(5));
