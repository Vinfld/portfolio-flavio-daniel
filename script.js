
const btnTema = document.getElementById('btn-tema');
if (btnTema) {
    btnTema.addEventListener('click', () => {
        // Alterna a classe. O CSS cuida de trocar as cores automaticamente.
        document.body.classList.toggle('modo-invertido');
    });
}

// validação
const form = document.getElementById('form-contato');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o envio real

        // Pega os valores
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const msg = document.getElementById('mensagem').value.trim();
        
        // Limpa erros antigos
        document.querySelectorAll('.erro').forEach(span => span.textContent = '');

        let temErro = false;

        // Verifica campos vazios
        if (!nome) {
            document.getElementById('erro-nome').textContent = 'X PREENCHA O NOME';
            temErro = true;
        }
        
        // Verifica email (tem que ter @)
        if (!email || !email.includes('@')) {
            document.getElementById('erro-email').textContent = 'X EMAIL INVÁLIDO';
            temErro = true;
        }

        if (!msg) {
            document.getElementById('erro-msg').textContent = 'X DIGITE A MENSAGEM';
            temErro = true;
        }

        // Se passou em tudo
        if (!temErro) {
            alert('// DADOS ENVIADOS COM SUCESSO_');
            form.reset();
        }
    });
}