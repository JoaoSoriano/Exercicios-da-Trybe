let notaJoao = 100

if (notaJoao >= 80) {
    notaJoao = 'Parabéns você faz parte das pessoas aprovadas!'
} else if (notaJoao < 80 && notaJoao >= 60) {
    notaJoao = 'Você está na lista de espera.'
} else {
    notaJoao = 'Infelizmente, você reprovou.'
}

console.log(notaJoao)