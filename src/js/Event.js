export class Event {
  constructor(parent, data) {
    this.element = document.createElement("div");
    this.parent = parent;
    this.data = data;
    this.createElement();
    this.openForm();
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
    const popupButton = this.element.querySelector(".loadData");
    const modal = document.getElementById("myModal");
    const span = document.getElementsByClassName("close")[0];
    popupButton.onclick = function () {
      modal.style.display = "block";
    };
    span.onclick = function () {
      modal.style.display = "none";
    };
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }
}
