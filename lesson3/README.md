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
