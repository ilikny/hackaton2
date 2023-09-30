import { Event } from "./Event";

const url = 'https://test-api.codingbootcamp.cz/api/3cb99576/events'

// Paths: (ALWAYS use it inside ${})
// Name: data.name
// Description: data.description
// Date: data.date
// Image URL: data.image_url
// In case we need ID (starts with 1 as opposed to index): data.id

const loadEventsData = async () => {
    const response = await fetch(url);
    const eventsData = await response.json();
    const smallEvents = document.querySelector(".other-events__main-container");
    eventsData.forEach((eventData) => {
    const eventElement = new Event(smallEvents, eventData);

    eventElement.appendSelf();
});
}

loadEventsData()


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

// const submitRegisterData = async () => {
//     const urlPOST = `https://test-api.codingbootcamp.cz/api/3cb99576/events/2/registrations`
//     const registerData = {
//       "name": "Daniel",
//       "surname": "Slezak",
//       "email": "dans@gmail.com",
//       "phonenumber": "7649209579",
//       "oldenough": "true"
//     }
//     const ourResponse = await fetch(urlPOST, {
//       "method": "POST",
//       "body": JSON.stringify(registerData),
//       "headers": {
//       'Content-Type': 'application/json'
//     }
//     })
//     const ourUsableResponse = await ourResponse.json()
//     console.log(ourUsableResponse)
// }

// submitRegisterData()


// const submitRegisterData = async () => {
//     const urlPOST = `https://test-api.codingbootcamp.cz/api/3cb99576/events/${data.id}/registrations`
//     const registerData = {
//       "name": "name.value";
//       "surname": "surname.value";
//       "email": "email.value";
//       "phonenumber": "phonenumber.value";
//       "oldenough": "oldenough.value"
//     }
//     const ourResponse = await fetch(urlPOST, {
//       "method": "POST",
//       "body": JSON.stringify(registerData),
//       "headers": {
//       'Content-Type': 'application/json'
//     }
//     })
//     const ourUsableResponse = await ourResponse.json()
//     console.log(ourUsableResponse)
// }

// const smallEvents = document.querySelector(".other-events__main-container");



// data.forEach((eventData) => {

//   const eventElement = new Event(smallEvents, eventData);

//   //   smallEvents.appendChild(eventElement.element);
//   eventElement.appendSelf();
// });
