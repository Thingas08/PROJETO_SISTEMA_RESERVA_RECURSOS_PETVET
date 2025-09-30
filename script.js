/*
SCRIPT DO SPRINT 01
*/

// abre o modal
function abrirModal() {
    const modal = document.getElementById("modalLogin");
    if (modal && typeof modal.showModal === "function") {
        modal.showModal();
    } else {
        alert("Modal não suportado neste navegador");
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