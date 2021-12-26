function iniciarAccordionList() {
    const listaAccordion = document.querySelectorAll(".js-accordion dt");
    const activeClass = "ativo";

    if(listaAccordion.length) {
        listaAccordion[0].classList.add(activeClass);
        listaAccordion[0].nextElementSibling.classList.add(activeClass);

        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        listaAccordion.forEach((item) => {
            item.addEventListener("click", activeAccordion);
        });
    }
}

iniciarAccordionList();