export class Event {
  constructor(parent, data) {
    this.element = document.createElement("div");
    this.parent = parent;
    this.data = data;
    this.init();
  }

  init() {
    this.createElement();
    this.openForm();
    this.closeModalButton();
  }

  createElement() {
    this.element.innerHTML = `
    <div class="box__event">
      <h4>${this.data.name}</h4>
      <button class="loadData">More</button>
    </div>
    `;
  }

  appendSelf() {
    this.parent.appendChild(this.element);
  }

  // the below function will open the modal pop-up window:
  openForm() {
    const data = this.data;
    const modalContent = document.getElementById("modalContent");
    modalContent.innerHTML = `<div class="eventLeft__formRight"><div class="event__thumbnail"><img src="data.image_url" alt="${data.name}"></div>
    <div class="event__info"><h4>${data.name}</h4><p class="event__date">${data.date}</p></div><div class="form__div"></div><span class="close">&times;</span></div>`;
  }

  closeModalButton() {
    const popupButton = this.element.querySelector(".loadData");
    const span = document.querySelector(".close");
    const modal = document.getElementById("myModal");
    
    popupButton.onclick = function () {
      modal.style.display = "block";

    };
    span.onclick = function () {
      console.log("clicked");
      modal.style.display = "none";
    };
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }
}

// Paths: (ALWAYS use it inside ${})
// Name: data.name
// Description: data.description
// Date: data.date
// Image URL: data.image_url
// In case we need ID (starts with 1 as opposed to index): data.id
