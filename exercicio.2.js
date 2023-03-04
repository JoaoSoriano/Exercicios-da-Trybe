// Exercício do Triângulo
// Utilize if/else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

let anguloA = 50;
let anguloB = 100;
let anguloC = 30;
let triangulo;

if (anguloA + anguloB + anguloC === 180) {
    triangulo = true;

} else if (anguloA + anguloB + anguloC !== 180 && anguloA >= 0 && anguloB >= 0 && anguloC >= 0 ) {
    triangulo = false;

} else {
    triangulo = 'Inválido, ângulo deve possuir número positivo'
}

console.log(triangulo)