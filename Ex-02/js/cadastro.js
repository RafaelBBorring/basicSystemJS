// Recuperando o tbody
const tbody = document.querySelector('tbody');

// Pegando o formulário
const form = document.querySelector('form');

// Atribuindo um listener para o evento submit
// Quando o submit for invocado, ele executará uma função
// Vamos passar o evento para a função via parâmetro

form.addEventListener('submit', (e) => {
    // O parâmetro será usado para cancelar o evento padrão (submit)
    e.preventDefault();

    // Pegar os campos do formulário e colocar em um array
    const campos = [
        form.querySelector('#nome'),
        form.querySelector('#celular'),
        form.querySelector('#origem'),
        form.querySelector('#destino'),
        form.querySelector('#data'),
        form.querySelector('#modelo')
    ];
    
    // Criar uma tr para receber as tds com os valores dos campos
    const novaLinha = document.createElement('tr');

    // Percorrendo o array com um forEach
    campos.forEach(campo => {
        // Criar uma td para o campo
        const td = document.createElement('td');
        
        // Pegar o value do campo e passar para o textContent da td
        td.textContent = campo.value;
        
        // Vincular a td na nova linha anteriormente criada
        novaLinha.appendChild(td);
    });

    // Pegando a linha criada e colocando no tbody
    tbody.appendChild(novaLinha);

    // Limpar o formulário
    form.reset();
});
