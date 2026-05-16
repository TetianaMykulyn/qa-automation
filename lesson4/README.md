# JavaScript Coding Standards

This repository follows consistent JavaScript style and quality practices aligned with ESLint rules and common best practices.

## 1. Variable declarations

- Use `const` by default.
- Use `let` only when the value must change.
- Avoid `var` entirely.
- Name variables clearly and use `camelCase`.

```js
const maxItems = 10;
let currentCount = 0;
```

## 2. Types and values

- Prefer primitive values (`string`, `number`, `boolean`, `null`, `undefined`).
- Use arrays and objects only when needed.
- Avoid mixing types in the same variable.
- Use `typeof` for type checks and `Array.isArray()` for arrays.

```js
const name = 'Alice';
const score = 42;
const isActive = true;
const values = [1, 2, 3];
```

## 3. Conditionals

- Always use braces for `if`, `else if`, and `else` blocks.
- Keep conditions simple and avoid nested ternaries.
- Use `===` and `!==` for comparisons unless you explicitly need type coercion.

```js
if (user.isActive) {
  console.log('Active');
} else if (user.isPending) {
  console.log('Pending');
} else {
  console.log('Inactive');
}
```

## 4. Switch statements

- Use `switch` for multiple discrete values.
- Always include a `default` case.
- Use `break` unless fall-through is intentionally documented.

```js
switch (status) {
  case 'success':
    handleSuccess();
    break;
  case 'error':
    handleError();
    break;
  default:
    handleUnknown();
}
```

## 5. Operators

- Use `===` and `!==` for equality.
- Use `&&` and `||` for logical expressions, but keep them readable.
- Use `+=`, `-=`, `*=`, and `/=` for concise arithmetic updates.
- Avoid unary `++` and `--` in complex expressions.

```js
if (count !== 0 && isReady) {
  count += 1;
}
```

## 6. Functions

- Use function declarations or arrow functions consistently.
- Prefer concise arrow functions for simple operations.
- Keep functions focused on a single task.

```js
const sum = (a, b) => a + b;

function formatName(user) {
  return `${user.firstName} ${user.lastName}`;
}
```

## 7. Objects and arrays

- Use object shorthand when property names match variable names.
- Use destructuring for clearer access.
- Prefer `const` for arrays and objects, even when mutating them.

```js
const user = {
  id: 1,
  name: 'Alice',
};

const { id, name } = user;
```

## 8. ESLint alignment

This style guide is designed to align with common ESLint rules, including:

- `no-var`
- `prefer-const`
- `no-unused-vars`
- `eqeqeq`
- `curly`
- `no-else-return`
- `no-redeclare`
- `no-console` (use only for debugging or controlled logging)

## 9. General best practices

- Keep code readable and consistent.
- Use meaningful identifiers.
- Keep lines under 100 characters when possible.
- Write comments only when the code is not self-explanatory.
- Prefer immutability and avoid side effects when practical.

## 10. Format and lint

- Run ESLint and Prettier before committing changes.
- Keep formatting stable and consistent across the repository.

```bash
npm run lint
npm run format
```

## JS Topics Covered in This Repo

### JS. Object
An object is a collection of named values (keys and values). Think of it like a box with labels where each label points to some data.

### JS. Object. Оголошення й базова робота
- Create an object using curly braces `{}`.
- Store values like strings, numbers, arrays, and even other objects.
- Access values with `object.key` or `object['key']`.
- In `src/objects.js`, `obj1` is created with a `name` and `parameters` list.

### JS. Object. Змінні об’єктів
- Objects are assigned by reference, not copied by value.
- If you set `const obj2 = obj1`, both variables point to the same object.
- Changing `obj2.name` also changes `obj1.name`.
- This is shown in `src/objects.js` with `obj2 = obj1`.

### JS. Object. Клонування/копіювання
- `Object.assign({}, obj)` creates a shallow copy.
- `{...obj}` also creates a shallow copy using the spread operator.
- `structuredClone(obj)` makes a deep clone for nested objects.
- `JSON.parse(JSON.stringify(obj))` is another deep copy method.
- In `src/objects.js`, you can see how changing nested data affects cloned objects differently.

### JS. Object. Методи об’єкта. This. Конструктори
- Objects can contain functions, called methods.
- Use `this` inside a method to access the current object.
- Example: `user.summary()` uses `this.name` and `this.profile.age`.
- Methods are shown in `src/object-functions.js` with `summary()`, `keysCount()`, and `multiply(a)`.
- Constructors are not explicitly shown in this repo, but the same idea is: a function builds a new object and `this` refers to that new object.

### JS. Object. Інші можливості
- `Object.keys(obj)` returns an array of object keys.
- `Object.values(obj)` returns an array of values.
- `Object.entries(obj)` returns key/value pairs as arrays.
- `optional chaining` like `user.optionalParam?.param` avoids errors when a nested property is missing.
- These ideas are shown in `src/object-methods.js` and `src/object-functions.js`.

### JS. Object. Set i Map
- `Set` is a collection of unique values. It removes duplicates automatically.
- `Map` stores key/value pairs and can use objects as keys.
- This repo does not currently include a dedicated `Set` or `Map` example, but they are useful next-step object-like structures.

### JS. Масиви
- Arrays hold a list of values in order.
- Use square brackets `[]` to create them.
- Access items by index: `arr[0]` is the first value.
- Arrays in this repo are shown in `src/arrays.js` and `src/loops.js`.

### JS. Масиви. Оголошення. Зміна
- Declare arrays with `const arr = [1, 2, 3]`.
- You can still change their content even if the array is `const`.
- Example: `arr2[0] = 'changed value'` updates the array content.
- In `src/arrays.js`, the example modifies `arr2` and logs the result.

### JS. Масиви. Найчастіше вживані методи
- `arr.filter(fn)` returns a new array with items that pass the test.
- `arr.find(fn)` returns the first matching item.
- `arr.push(...)` adds values to the end.
- `arr.sort(fn)` orders values.
- `arr.map(fn)` transforms every item.
- `arr.forEach(fn)` runs a function for each item.
- `src/arrays.js` uses `filter`, `find`, `push`, `sort`, `map`, and `forEach`.

### JS. Цикли
Loops repeat code many times. They are useful when you need to work with arrays or do repeated tasks.

### JS. Цикли. for
- `for` loops run while a condition is true.
- `for (let i = 0; i < arr.length; i++)` is the classic form.
- `for (const value of arr)` loops directly over values.
- In `src/loops.js`, both forms are used to print values and use array indexes.

### JS. Цикли. while
- `while (condition)` repeats until the condition becomes false.
- Use a counter variable like `let i = 0` and increase it inside the loop.
- `do { ... } while (condition)` runs at least once before checking the condition.
- `src/loops.js` includes a `while` loop and a `do...while` loop.

### JS. Цикли. break <мітка>
- `break` stops a loop immediately.
- In `src/loops.js`, `break` stops the loop after `arr2.length >= 3`.
- A label (`<мітка>`) is used in more advanced cases to break out of nested loops, but this repo only shows the simple `break` use.

## What the code does and how
- `src/objects.js` shows how objects share references, how shallow copy differs from deep copy, and how object cloning works.
- `src/object-functions.js` shows object methods, `this`, object nesting, and optional chaining to avoid errors with missing properties.
- `src/object-methods.js` shows how to inspect objects using `Object.keys`, `Object.values`, and `Object.entries`.
- `src/arrays.js` shows array creation, mutation, and common array methods like `filter`, `find`, `sort`, `map`, and `forEach`.
- `src/loops.js` shows `for`, `while`, and `do...while` loops, including simple logic with `break` and `continue`.

This README is written for beginners: it explains objects as labeled boxes, arrays as ordered lists, and loops as repeated steps. Use the example files to see how each idea works in real JavaScript code.
