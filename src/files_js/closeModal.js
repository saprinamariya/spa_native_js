export const closeModal = () => {
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");

    modal.remove();
    overlay.remove();
};