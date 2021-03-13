import { version } from "../globals";
import { hash } from "../helper";
import { CalArgs } from "../types";
import { BaseCalendar, VEvent } from "../base/index";

class Calendar {
  events: any[] = [];

  constructor(args: CalArgs[]) {
    for (let i = 0; i < args.length; i++) {
      const event: any = {};

      event.dtstart = this.parseDate(args[i].start);
      event.dtend = this.parseDate(args[i].end);
      event.summary = args[i].summary;
      event.description = args[i].description;
      event.contact = args[i].contact;
      event.uid = `CalJSv${version}${
        hash(event.dtstart + event.dtend + event.summary) * 129
      }`;
      console.log(event.uid);
      this.events.push(event);
    }
  }

  private parseDate(date: Date) {
    let parsed =
      date
        .toISOString()
        .toLowerCase()
        .split("-")
        .join("")
        .split(":")
        .join("")
        .split(".")
        .join("")
        .slice(0, -4)
        .toUpperCase() + "Z";

    return parsed;
  }

  public build() {
    const cal = new BaseCalendar(this.events);
    return cal.build();
  }
}

export default Calendar;
