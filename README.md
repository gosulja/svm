# svm
A very very very small VM built in JavaScript. Built for learning purposes.

# example
Given this program:

```js
let program = [
    PUSH, 10,
    PUSH, 10,
    ADD,
    PUSH, 5,
    MINUS
];
```

It can be simply represented as:

```
(10 + 10) - 5
```

The result is:

```
result: 15
```
