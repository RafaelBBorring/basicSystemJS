// chamada botão "Gerar Dados"
const btnDados = document.getElementById('btnDados');

// chamada campos de destinos com menor e maior valor
const viagemMaiorValor = document.getElementById('maiorValor');
const viagemMenorValor = document.getElementById('menorValor');


// evento de "click" no botão Gerar Dados
btnDados.addEventListener("click", () => {
    // Selecionar todas as linhas de viagem
    const viagens = document.querySelectorAll('.viagem');

    let maiorTempo = 0;
    let maiorPreco = 0;
    let maiorValorHora = 0;
    let menorValorHora = Infinity;

    let viagemMaiorTempo = null;
    let viagemMaiorPreco = null;
    let viagemMaiorValorHora = null;
    let viagemMenorValorHora = null;


    // loop do calculo, percorrendo os componentes com classe .viagem
    viagens.forEach((viagem) => {
        const mediaPreco = parseFloat(viagem.querySelector('.media-preco').textContent);
        const tempoViagem = parseFloat(viagem.querySelector('.duracao').textContent);

        const valorHora = (mediaPreco / tempoViagem).toFixed(2);

        viagem.querySelector('.valor-hora').textContent = valorHora;

        if (tempoViagem > maiorTempo) {
            maiorTempo = tempoViagem;
            viagemMaiorTempo = viagem;
        }

        if (mediaPreco > maiorPreco) {
            maiorPreco = mediaPreco;
            viagemMaiorPreco = viagem;
        }



        if (valorHora > maiorValorHora) {
            maiorValorHora = valorHora;
            viagemMaiorValorHora = viagem;
        }

        if (valorHora < menorValorHora) {
            menorValorHora = valorHora;
            viagemMenorValorHora = viagem;
        }
    });


    
    if (viagemMaiorTempo) {
        viagemMaiorTempo.querySelector('.duracao').classList.add('bg-danger');
    }

    if (viagemMaiorPreco) {
        viagemMaiorPreco.querySelector('.media-preco').classList.add('bg-warning');
    }



    if (viagemMaiorValorHora && viagemMenorValorHora) {
        viagemMaiorValor.textContent = viagemMaiorValorHora.querySelector('.destino').textContent;
        viagemMenorValor.textContent = viagemMenorValorHora.querySelector('.destino').textContent;
    }
});
