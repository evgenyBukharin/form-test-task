const openFormBtn = document.getElementById("openFormBtn");
const payFormSection = document.querySelector(".payForm");
const payFormContainer = payFormSection.querySelector(".payForm__container");
const closeFormBtn = document.getElementById("closeFormBtn");
const payForm = payFormSection.querySelector(".payForm__form");

openFormBtn.addEventListener("click", () => {
	payFormSection.classList.add("payForm-visible");
});

closeFormBtn.addEventListener("click", () => {
	payFormSection.classList.remove("payForm-visible");
});

payFormContainer.addEventListener("click", () => {
	payFormSection.classList.remove("payForm-visible");
});

payForm.addEventListener("click", (event) => {
	event.stopPropagation();
});
