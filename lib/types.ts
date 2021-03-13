type Modify<T, R> = Omit<T, keyof R> & R;

interface EventPropOnce {
  [key: string]: any;
  cls?: string;
  created?: string;
  description?: string;
  dtstart?: string;
  geo?: string;
  last_mod?: string;
  location?: string;
  organizer?: string;
  priority?: string;
  dtstamp?: string;
  seq?: string;
  status?: string;
  summary?: string;
  transp?: string;
  uid?: string;
  url?: string;
  recurid?: string;
}

interface EventPropMultiple {
  attach?: string[];
  attendee?: string[];
  categories?: string[];
  comment?: string[];
  contact?: string[];
  exdate?: string[];
  exrule?: string[];
  rstatus?: string[];
  related?: string[];
  resources?: string[];
  rdate?: string[];
  rrule?: string[];
  x_prop?: string[];
}

interface EventPropDtend extends EventPropOnce, EventPropMultiple {
  dtend: string;
}

interface EventPropDuration extends EventPropOnce, EventPropMultiple {
  duration: string;
}

export type EventProp = EventPropDtend | EventPropDuration;

export type EventArgs =
  | EventProp
  | {
      dtstamp?: Date;
      dtstart?: Date;
      dtend: Date;
    };

interface CalArgs {
  start: Date;
  end: Date;
  summary?: string;
  description?: string;
  contact?: string[];
}

export type { CalArgs };
