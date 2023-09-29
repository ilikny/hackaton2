export class Event {
  constructor(parent, data) {
    this.element = document.createElement("div");
    // this.openWindowThing = document.createElement("div")
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
  displayModal(modal) {
      modal.style.display = "block";
      console.log(this)
      modal.innerHTML = `hello ${this.data.name}`;
      // this.openWindowThing.innerHTML = `hello`
  }
  appendSelf() {
    this.parent.appendChild(this.element);
  }
  // the below function will open the modal pop-up window:
  openForm() {
    const popupButton = this.element.querySelector(".loadData");
    const modal = document.getElementById("myModal");
    const span = document.getElementsByClassName("close")[0];
    // modal.appendChild(this.openWindowThing)
    popupButton.addEventListener('click', () => {
      this.displayModal(modal)
    });
  //   popupButton.addEventListener('click', function() {
  //     modal.style.display = "block";
  //     console.log(this)
  //     modal.innerHTML = `hello ${this.data.name}`;
  //     // this.openWindowThing.innerHTML = `hello`
  // });
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
















// Message Daniel, NRDaniels









// Return to add a new line
// mobile icon
// Stay up to date from anywhere with the Slack mobile app



