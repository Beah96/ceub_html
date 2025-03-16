function openModal() {
    const button = document.querySelector("#showMessage");
    const modalCard = document.querySelector("#modalCard");
  
    button.addEventListener("click", () => {
      modalCard.showModal();
  
      closeModal();
    });
  }
  
  function closeModal() {
    const button = document.querySelector("#closeMessage");
    const modalCard = document.querySelector("#modalCard");
  
    button.addEventListener("click", () => {
      modalCard.close();
    });
  }
  
  openModal(); 

function scrollToContact() {
    const button = document.querySelector("#contato");
    const contact = document.querySelector("#team");
  
    button.addEventListener("click", () => {
      contact.scrollIntoView({ behavior: "smooth" });
    });
  }
  
  scrollToContact();