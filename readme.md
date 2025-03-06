# Design Patterns in JavaScript by Me :)

This repository demonstrates three common design patterns in JavaScript:
1. **Singleton Pattern**
2. **Memento Pattern**
3. **State Pattern**

Each pattern is explained with **client-side code examples** to show how they can be used in practice.

---

## Table of Contents
- [Singleton Pattern](#singleton-pattern)
- [Memento Pattern](#momento-pattern)
- [State Pattern](#state-pattern)
- [Contributing](#contributing)
- [License](#license)

---

## Singleton Pattern

The **Singleton Pattern** ensures that a class has only one instance and provides a global point of access to it.


### Client-Side Code
```typescript
const additionCalculator = new SingletonWithCache();

additionCalculator.addNumber(5);
const value = additionCalculator.getTotal();
console.log(`>>>>>>> value before ==>`, value); // Output: 5
```
## Momento Pattern

The **Momento Pattern** allows you to capture and restore an objects internal state, useful for undo/redo functionality.


### Client-Side Code
```typescript
const originator = new Originator();
const history = new History();

originator.setContent('1');
history.addHistoryState(originator.createState());

originator.setContent('2');
history.addHistoryState(originator.createState());

originator.restore(history.removeHistoryState());
console.log(`>>>>> content ==> ${originator.content}`); // Output: 2
```

## State Pattern

The **State Pattern** allows an object to change its behavior when its internal state changes.
```typescript
const canvas = new Canvas(new PaintBrush());
canvas.mouseDown(); // Output: PaintBrush: mouse down
canvas.mouseUp();   // Output: PaintBrush: mouse up

canvas.setTool(new SelectionTool());
canvas.mouseDown(); // Output: SelectionTool: mouse down
canvas.mouseUp();   // Output: SelectionTool: mouse up
```