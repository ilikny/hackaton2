export class Event {
  constructor(parent, data) {
    this.element = document.createElement("div");
    // this.openWindowThing = document.createElement("div")
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
      modal.innerHTML = `
      <span class="close">&times;</span>
      <section class="description">
        <h1>${this.data.name}</h1>
        <h3>${this.data.date}</h3>
        <img class="event__image" src="${this.data.image_url}" alt="">
        <p>${this.data.description}</p>
      </section>

        <section class="form">
        <form id="register">
      
          <div class="section-heading">
            <h3>Register</h3>
          </div>
      
          <div class="inputField">
            <input type="name" class="name" name="name" placeholder="Your name" />
          </div>

          <div class="inputField">
            <input type="surname" class="surname" name="surname" placeholder="Your surname" />
          </div>
      
          <div class="inputField">
            <input type="Email" class="email" name="email" placeholder="Your email" />
          </div>

          <div class="inputField">
          <input type="tel" class="tel" name="tel" placeholder="Your phone number" />
          </div>

          <label for="check">I'm over 18</label>
          <input type="checkbox" class="oldenough" id="check" name="oldenough">
      
      
          <div class="button">
            <button class="register__button">Submit</button>
          </div>
      
        </form>
      </section>
      
      `;
      const name = document.querySelector('.name');
      const surname = document.querySelector('.surname');
      const email = document.querySelector('.email');
      const tel = document.querySelector('.tel');
      const oldenough = document.querySelector('.oldenough');

      // const register__button = document.querySelector('.register__button')
      const registerForm = modal.querySelector('#register')
      registerForm.addEventListener('submit', async (e) => {
        // const submitRegisterData = async () => {
            e.preventDefault()
            const urlPOST = `https://test-api.codingbootcamp.cz/api/3cb99576/events/${this.data.id}/registrations`
            const registerData = {
              "name": name.value,
              "surname": surname.value,
              "email": email.value,
              "phonenumber": tel.value,
              "oldenough": oldenough.value
            }
            const ourResponse = await fetch(urlPOST, {
              "method": "POST",
              "body": JSON.stringify(registerData),
              "headers": {
              'Content-Type': 'application/json'
            }
            })
            const ourUsableResponse = await ourResponse.json()
            console.log(ourUsableResponse)
        // }
      })

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
    popupButton.addEventListener("click", () => {
      this.displayModal(modal);
    });
    //   popupButton.addEventListener('click', function() {
    //     modal.style.display = "block";
    //     console.log(this)
    //     modal.innerHTML = `hello ${this.data.name}`;
    //     // this.openWindowThing.innerHTML = `hello`
    // });
    // const span = document.getElementsByClassName("close")[0];
    // // modal.appendChild(this.openWindowThing)
    // popupButton.addEventListener('click', () => {
    //   this.displayModal(modal)
    // });
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
