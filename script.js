/*
SCRIPT DO SPRINT 01
*/

/*
SCRIPT DO SPRINT 02
MNATÉM O QUE HAVIA NO SPRINT ! E ADICIONA FLUXO FUNCIONAL
*/
// 1) TOAST ACESSÍVEL (feedback não bloqueante)
// Por quê? Substitui o alert() por UX moderna e acessível
const $toast = document.getElementById('toast');

let __toastTimer = null;

function mostrarToast(mensagem, tipo ='ok'){
    //fallback se #toast não existir (ambiente antigo)
    if(!$toast){
        alert(mensagem);
        return;
    }

    $toast.classList.remove('warn','err','visivel');
    if(tipo ==='warn')$toast.classList.add('warn');
    if(tipo ==='err')$toast.classList.add('err');
    $toast.textContent = mensagem;

    void $toast.offsetWidth;
    $toast.classList.add('visivel');

    clearTimeout(__toastTimer);
    __toastTimer = setTimeout(()=>$toast.classList.remove('visivel'),2800);

}


/* =========================================
   1) FUNÇÕES ORIGINAIS -Sprint 1 (mantidas)
   =========================================
*/

// abre o modal
function abrirModal() {
    const modal = document.getElementById("modalLogin");
    if (modal && typeof modal.showModal === "function") {
        modal.showModal();
    } else {
        // ALTERAÇÃO SPRINT 2: usar toast no lugar de alert, quando possível
        mostrarToast("Modal não suportado neste navegador","warn");
    }
}

// rola suavemente até formulário rápido
function rolarParaRapido() {
    const formRapido = document.querySelector(".formRapido"); // Corrigido para f minúsculo
    if (formRapido) {
        formRapido.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

// validação simples da reserva rápida
(function inicializarValidacao() {
    const form = document.querySelector(".formRapido");
    if (!form) return;

    const seletorRecurso = form.querySelector("select");
    const campoData = form.querySelector('input[type="date"]');
    const campoInicio = form.querySelector('input[placeholder="Início"]');
    const campoFim = form.querySelector('input[placeholder="Fim"]');

    // remover a marcação de erro ao digitar/mudar
    [seletorRecurso, campoData, campoInicio, campoFim].forEach(el => {
        if (!el) return;
        el.addEventListener("input", () => el.style.borderColor = "");
        el.addEventListener("change", () => el.style.borderColor = "");
    });

    form.addEventListener("submit", (ev) => {
        ev.preventDefault();

        let valido = true;

        // valida recurso selecionado
        if (seletorRecurso && seletorRecurso.selectedIndex === 0) {
            seletorRecurso.style.borderColor = "red";
            valido = false;
        }

        // valida data
        if (campoData && !campoData.value) {
            campoData.style.borderColor = "red";
            valido = false;
        }

        // valida horários
        const hInicio = campoInicio?.value || "";
        const hFim = campoFim?.value || "";

        if (campoInicio && !hInicio) {
            campoInicio.style.borderColor = "red";
            valido = false;
        }

        if (campoFim && !hFim) {
            campoFim.style.borderColor = "red";
            valido = false;
        }

        if (hInicio && hFim && hFim <= hInicio) {
            if (campoInicio) campoInicio.style.borderColor = "red";
            if (campoFim) campoFim.style.borderColor = "red";
            alert("O horário final precisa ser maior que o horário inicial");
            return;
        }

        if (!valido) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        // sucesso (simulado)
        alert("Reserva simulada com sucesso! Integração real será feita nos próximos sprints.");
        form.reset();
    });
})();