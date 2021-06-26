class Imc {
    constructor(altura, peso, resultado) {
        this.altura = altura
        this.peso = peso
        this.resultado = resultado
        
    }
}

function calcular() {
    
    const imc = new Imc(
        altura = document.getElementById('altura').value,
        peso = document.getElementById('peso').value,
        resultado = document.getElementById('resultado')
    
    )

    if (imc.altura !== '' && imc.peso !== '') {
        
        const valor = (imc.peso / (imc.altura * imc.altura)).toFixed(1)

        let medida = ''

        if (valor < 18.5) {
            medida = 'você esta abaixo do peso.'
        }else if(valor < 24.9){
            medida = 'você está no seu peso ideal. Parabéns !!'
        }else if (valor < 30 ){
            medida = 'você esta com sobre peso.'
        }else if (valor > 30) {
            medida = ' você esta com obesidade. Cuidado !!'
        }
        resultado.textContent = `Seu IMC é ${valor} e  ${medida} `
    }else{
        resultado.textContent = `Preencha todos os campos !!!`
    }
}


