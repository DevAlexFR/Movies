console.log('Site loaded successfully.');

// Função para abrir o modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "flex";
}

// Fecha o modal ao clicar no "x"
var closeButtons = document.getElementsByClassName("closeBtn");
for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
        var modal = this.closest('.modal');
        modal.style.display = "none";
    }
}

// Fecha o modal ao clicar fora dele
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}

// Garante que todos os modais não abram automaticamente ao carregar a página
window.onload = function() {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        modals[i].style.display = "none";
    }
}