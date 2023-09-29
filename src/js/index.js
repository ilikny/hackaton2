import { Event } from "./Event";

const smallEvents = document.querySelector(".other-events__main-container");

const data = [{ name: "Boo" }, { name: "Ya" }];

data.forEach((eventData) => {
  const eventElement = new Event(smallEvents, eventData);

  //   smallEvents.appendChild(eventElement.element);
  eventElement.appendSelf();
});
