document.addEventListener("DOMContentLoaded", () => {
  const mainSection = document.querySelector(".main_section");
  const overlay = document.querySelector(".overlay");
  const showBtn = document.querySelector(".main_section_btn");
  const closeBtn = document.querySelector(".close_btn");

  showBtn.addEventListener("click", () => mainSection.classList.add("active"));

  overlay.addEventListener("click", () =>
    mainSection.classList.remove("active")
  );

  closeBtn.addEventListener("click", () =>
    mainSection.classList.remove("active")
  );
});
