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

### Constructor

```js
class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class SUV extends Car {
  constructor(doors, engine, color) {
    super(doors, engine, color);
    this.wheels = 4;
  }
}

const civic = new Car(4, "V6", "grey");
const cx5 = new SUV(4, "V8", "red");
```

### Singleton

It ensures a class has only one instance and provides a global point of access to it.

```js
let instance = null;

class Car {
  constructor(doors, engine, color) {
    if (!instance) {
      this.doors = doors;
      this.engine = engine;
      this.color = color;
      instance = this;
    } else {
      return instance;
    }
  }
}

const civic = new Car(4, "V6", "grey");
const honda = new Car(2, "V8", "red");
```

### Factory

It provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created

```js
class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class carFactory {
  createCar(type) {
    switch (type) {
      case "civic":
        return new Car(4, "V6", "grey");
      case "honda":
        return new Car(2, "V8", "red");
    }
  }
}

const factory = new carFactory();
const myHonda = factory.createCar("honda");
```

### Abstract factory

It provides an interface for creating families of related or dependent objects without specifying their concrete classes.

```js
class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class CarFactory {
  createCar(type) {
    switch (type) {
      case "civic":
        return new Car(4, "V6", "grey");
      case "honda":
        return new Car(2, "V8", "red");
    }
  }
}

class SUV {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class SuvFactory {
  createCar(type) {
    switch (type) {
      case "cx5":
        return new Car(4, "V6", "grey");
      case "sante fe":
        return new Car(2, "V8", "red");
    }
  }
}

const carFactory = new CarFactory();
const suvFactory = new SuvFactory();

const autoManufacturer = (type, model) => {
  switch (type) {
    case "car":
      return carFactory.createCar(model);
    case "suv":
      return suvFactory.createCar(model);
  }
};

const cx5 = autoManufacturer("suv", "cx5");
```

## Structural patterns

Code organization

### Module

Self-contained units of code that encapsulate functionality and data

### Mixins

Classes containing methods that can be used by other classes without being the parent class. 

### Facade

It provides a simplified interface to a more complex subsystem.

### Flyweight

It aims to minimize memory usage and improve performance by sharing as much data as possible with other similar objects.

### Decorator

It allows you to dynamically add behavior to an object without modifying its structure. 
[Doc](https://www.typescriptlang.org/docs/handbook/decorators.html)

### MVC

- Model: data
- View: ui
- Controller: logic

### MVP

- Model: data
- View: ui
- Presenter: logic

### MVVM

- Model: data
- View: stateless
- View Model: statefull
  
## Behavioral patterns

Comunications between objects

### Observer

It defines a one-to-many dependency between objects so that when one object (the subject) changes state, all its dependents (the observers) are notified and updated.

### State

It allows an object to alter its behavior when its internal state changes.