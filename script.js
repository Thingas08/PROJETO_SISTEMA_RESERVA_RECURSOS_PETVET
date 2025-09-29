/*
SCRIPT DO SPRINT 01
*/

//abre o modal
function abrirModal(){
    const modal = document.getElementById("modalLogin");
    if(modal && typeof modal.showmodal === "funcrion"){
        modal.showModal();
    }else{
        alert("Modal não suportado neste navegador");
    }
}