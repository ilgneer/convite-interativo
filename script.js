// Função para fazer a transição do envelope para o convite
document.getElementById('envelope').addEventListener('click', function () {
  // Remover o envelope
  this.style.opacity = '0'
  setTimeout(() => {
    this.style.display = 'none' // Remove o envelope da tela
    const convite = document.getElementById('convite')
    convite.classList.add('mostrar') // Exibe o convite

    // Garantir que o envelope não interfira mais no clique
    this.removeEventListener('click', arguments.callee)
  }, 500) // Aguarda a transição
})
