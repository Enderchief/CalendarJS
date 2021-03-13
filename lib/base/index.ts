import { EventProp } from "../types";

function test(msg: string, times: number) {
  let combined: string = "";

  for (let i = 0; i < times; i++) {
    combined += msg;
  }
  return combined;
}

class VEvent {
  event: EventProp;
  constructor(event: EventProp) {
    this.event = event;
  }

  public create() {
    const data = [];
    data.push("BEGIN:VEVENT");

    Object.keys(this.event).forEach((k) => {
      if (this.event[k]) {
        if (this.event[k] instanceof Array) {
          for (let j = 0; j < this.event[k].length; j++) {
            data.push(`${k.toUpperCase()}:${this.event[k][j]}`);
          }
        } else {
          data.push(`${k.toUpperCase()}:${this.event[k]}`);
        }
      }
    });

    data.push("END:VEVENT");

    return data;
  }
}

class BaseCalendar {
  events: VEvent[];
  constructor(events: EventProp[]) {
    this.events = [];
    events.forEach((event) => {
      this.event(event);
    });
  }

  public event(event: EventProp) {
    this.events.push(new VEvent(event));
  }

  public build(
    prodid: string = `-//CalendarJS//${new Date(Date.now()).toISOString()}`
  ) {
    const data = [];
    data.push("BEGIN:VCALENDAR");
    data.push("VERSION:2.0");
    data.push(`PRODID:${prodid}`);

    this.events.forEach((event) => {
      event.create().forEach((prop) => {
        data.push(prop);
      });
    });

    data.push("END:VCALENDAR");

    let content: string = "";
    data.forEach((item) => {
      content += item + "\n";
    });

    return content;
  }

  public print() {
    return this.build().split(":").join("\t");
  }
}

export { BaseCalendar, test, VEvent };
