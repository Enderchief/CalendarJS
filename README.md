# CalendarJS

---

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [Purpose](#Purpose-of-this-library)
- [Mini Documentation](#Mini-Documentation)
- [License](License)

---

## Installation

This package was built using node `v10.24.0`.
To install with node

```
npm install icalendarts
yarn add icalendarts
bower install icalendarts
```

---

## Usage

CalendarJS is written in Typescipt and takes full advantage of the typing it brings. The best experience would be in TypeScript but Javascript still works fine.

### Javascript

```js
const { Calendar } = require("icalendarts");

const events = [
  {
    start: new Date(1640304000),
    end: new Date(1641081599),
    summary: "Holidays!",
    description: "Christmas to the end of New Years",
  },
  {
    start: new Date(1641120300),
    end: new Date(1641153600),
    summary: "First Meeting",
    description: "Talk to them about boring work stuff"
  },
];

const calendar = new Calendar(events);
// Get output with calendar.build()
```

### Typescript

```ts
import { Calendar, types } from "icalendarts";

const events: types.CalArgs[] = [
  {
    start: new Date(1640304000),
    end: new Date(1641081599),
    summary: "Holidays!",
    description: "Christmas to the end of New Years",
  },
  {
    start: new Date(1641120300),
    end: new Date(1641153600),
    summary: "First Meeting",
    description: "Talk to them about boring work stuff"
  },
];

const calendar = new Calendar(events);
// Get output with calendar.build()
```

---

## Purpose of this library

---

## Mini-Documentation

---

## License
