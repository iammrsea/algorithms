type EventName = "hover" | "click";
type Callback = () => void;

export class Events {
  #events: Record<EventName, Callback[]>;
  constructor() {
    this.#events = { click: [], hover: [] };
  }
  on(eventName: EventName, cb: Callback) {
    this.#events[eventName].push(cb);
  }
  off(eventName: EventName) {
    this.#events[eventName] = [];
  }
  trigger(eventName: EventName) {
    this.#events[eventName].forEach((cb) => cb());
  }
}
