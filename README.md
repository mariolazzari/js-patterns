# JavaScript patterns

## Introduction

### What is a pattern

General reusable solution to a recurring problem.

- Creational: create new things
- Structural: structure code
- Behavioral: behariors in code

### Functions as first-class citizens

In JavaScript, functions are indeed first-class citizens. This is a fundamental aspect of the language and a key reason why it's so flexible and powerful. It means that functions in JavaScript have the same rights and privileges as any other data type, such as numbers, strings, booleans, and objects.

### Callbacks

A callback function is a function that is passed as an argument to another function and is executed at a later point in tim

## Creational patterns

Control the creation process of an object

### Class

```js
class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

const aygoX = new Car(4, "3", "azure");
```
