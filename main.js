import {produtos} from './nossos_produtos/produtos';
import { descontos } from './curso/descontos';

const container = document.getElementById('produto_container');

const createProdutosCard = (produto) => {
    const card = `
      <div class="max-w-sm bg-white-custom border border-white-custom rounded-lg shadow">
            <a href="#">
                <img class="rounded-t-lg" src="/imgs/${produto.imagem}" alt="${produto.nome}" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-black-custom">${produto.nome}</h5>
                </a>
                 <p class="text-black-custom">Serve: ${produto.serve} | Peso: ${produto.peso}</p>
                <p class="text-black-custom">Valor: R$ ${produto.valor}</p>
                <p class="text-black-custom">Pedido mínimo: ${produto.pedido_minimo}</p>
            </div>
        </div>
    `;
    return card;
};

const renderProdutos = (produtos) => {
    container.innerHTML = produtos
    .map((produto) => createProdutosCard(produto))
    .join('');
};
document.addEventListener('DOMContentLoaded', () => {
    renderProdutos(produtos)  
});

function aplicarDesconto() {
    const cupomInput = document.getElementById('cupom').value;
    const descontoAplicado = document.getElementById('desconto-aplicado')
    const spanPreco = document.getElementById('preco-original')

    const precoOriginal = 147.00;
    let descontoEncontrado = descontos.find(cupom => cupom.codigo === cupomInput.toUpperCase());

    if (descontoEncontrado) {
        const valorComDesconto = precoOriginal * (1 - descontoEncontrado.desconto);
        spanPreco.setAttribute('class', 'line-through')
        descontoAplicado.setAttribute('class', 'text-green-600 font-semibold text-2xl mb-4')
        descontoAplicado.textContent = `Desconto aplicado! Novo valor: R$ ${valorComDesconto.toFixed(2)}`;
    } else {
        descontoAplicado.setAttribute('class', 'text-red-600 font-semibold text-2xl mb-4')
        descontoAplicado.textContent = `Cupom inválido.`;
    }
}

const btnDesconto = document.getElementById('btn-desconto');

btnDesconto.onclick = function(){aplicarDesconto()}

document.body.addEventListener('keydown', function(event){
    if(event.key == 'Enter'){
        event.preventDefault();
        aplicarDesconto();
    }
})