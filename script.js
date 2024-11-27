// script.js
let carrinho = [];

function adicionarAoCarrinho(servico) {
  carrinho.push(servico);
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const itensCarrinho = document.getElementById('itensCarrinho');
  itensCarrinho.innerHTML = '';

  carrinho.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    itensCarrinho.appendChild(li);
  });
}

function finalizarCompra() {
  if (carrinho.length > 0) {
    alert('Compra finalizada! Obrigado pela sua compra.');
    carrinho = [];
    atualizarCarrinho();
  } else {
    alert('Seu carrinho está vazio.');
  }
}
