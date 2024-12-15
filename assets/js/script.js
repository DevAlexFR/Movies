console.log('Site loaded successfully.');

// Função para abrir o modal e carregar o vídeo
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    var iframe = modal.querySelector('iframe');

    switch(modalId) {
        case 'modal_Baba':
            iframe.src = 'https://www.youtube.com/embed/Cz-MvM3Who0';
            break;
        case 'modal_Castlevania':
            iframe.src = 'https://www.youtube.com/embed/-5B-15TyGTk';
            break;
        case 'modal_CVD':
            iframe.src = 'https://www.youtube.com/embed/jwiCmA5vX-A';
            break;
        case 'modal_Casa':
            iframe.src = 'https://www.youtube.com/embed/iS5xXr-GOnM';
            break;
        case 'modal_Justiceiro':
            iframe.src = 'https://www.youtube.com/embed/STuXgXcOVPE';
            break;
        case 'modal_Mogli':
            iframe.src = 'https://www.youtube.com/embed/fXE1Vv0-PJQ';
            break;
    }

    modal.style.display = "block";
}

// Função para fechar o modal e parar o vídeo
var closeButtons = document.getElementsByClassName("closeBtn");
for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
        var modal = this.closest('.modal');
        var iframe = modal.querySelector('iframe');
        iframe.src = ''; // Limpa o src para parar o vídeo
        modal.style.display = "none";
    }
}

// Fecha o modal ao clicar fora dele
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        var iframe = event.target.querySelector('iframe');
        iframe.src = ''; // Limpa o src para parar o vídeo
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
