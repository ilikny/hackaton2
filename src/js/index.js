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




// const smallEvents = document.querySelector(".other-events__main-container");



// data.forEach((eventData) => {

//   const eventElement = new Event(smallEvents, eventData);

//   //   smallEvents.appendChild(eventElement.element);
//   eventElement.appendSelf();
// });
