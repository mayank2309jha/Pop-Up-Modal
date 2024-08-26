document.addEventListener("DOMContentLoaded", () => {
  const view_modal = document.querySelector(".view-modal");
  const modal = document.querySelector(".modal");
  const close = document.querySelector("#close-icon");

  view_modal.addEventListener("click", () => {
    // When view_modal is clicked, set its opacity to 0 and disable pointer events
    view_modal.style.opacity = 0;
    view_modal.style.pointerEvents = "none";

    // Set modal's opacity to 1 and enable pointer events
    modal.style.opacity = 1;
    modal.style.pointerEvents = "auto";
  });

  close.addEventListener("click", () => {
    // When close is clicked, set view_modal's opacity back to 1 and enable pointer events
    view_modal.style.opacity = 1;
    view_modal.style.pointerEvents = "auto";

    // Set modal's opacity back to 0 and disable pointer events
    modal.style.opacity = 0;
    modal.style.pointerEvents = "none";
  });
});
