export default function Modal() {

    const modalWrapper = document.querySelector('.modal-wrapper');

    const cancelButton = document.querySelector('.button.cancel');

    cancelButton.addEventListener("click", close);

    // Função que atribui a classe active para a modal
    function open() {
        modalWrapper.classList.add("active");
    }

    // Função que remove a classe active da modal
    function close() {
        modalWrapper.classList.remove("active");
    }

    return {
        open,
        close
    }
}