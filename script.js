// ---- TEMA ----
const btnTema = document.getElementById('btn-tema');
if (btnTema) {
    btnTema.addEventListener('click', () => {
        document.body.classList.toggle('modo-invertido');
    });
}

// ---- HAMBÚRGUER ----
const btnHamb = document.getElementById('btn-hamburguer');
const nav = document.querySelector('.menu-fixo nav');

if (btnHamb && nav) {
    btnHamb.addEventListener('click', () => {
        nav.classList.toggle('menu-aberto');
        btnHamb.textContent = nav.classList.contains('menu-aberto') ? '[X]' : '[≡]';
    });

    // Fecha ao clicar em um link
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('menu-aberto');
            btnHamb.textContent = '[≡]';
        });
    });
}

// ---- VALIDAÇÃO CONTATO ----
const form = document.getElementById('form-contato');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const msg = document.getElementById('mensagem').value.trim();

        document.querySelectorAll('.erro').forEach(span => span.textContent = '');

        let temErro = false;

        if (!nome) {
            document.getElementById('erro-nome').textContent = 'X PREENCHA O NOME';
            temErro = true;
        }

        if (!email || !email.includes('@')) {
            document.getElementById('erro-email').textContent = 'X EMAIL INVÁLIDO';
            temErro = true;
        }

        if (!msg) {
            document.getElementById('erro-msg').textContent = 'X DIGITE A MENSAGEM';
            temErro = true;
        }

        if (!temErro) {
            alert('// DADOS ENVIADOS COM SUCESSO_');
            form.reset();
        }
    });
}
