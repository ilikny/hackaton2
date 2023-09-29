export class Event {
  constructor(parent, data) {
    this.element = document.createElement("div");
    this.parent = parent;
    this.data = data;
    this.createElement();
  }
  createElement() {
    this.element.innerHTML = `
    <div class="box__event">
      <h3>${this.data.name}</h3>
      <button class="loadData">More</button>
    </div>
    `;
  }

  appendSelf() {
    this.parent.appendChild(this.element);
  }

  // const btnClick =
}
