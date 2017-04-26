# ES6 For Everyone

A course for ES6. 19 modules, 66 videos, and 6.5 hours by [Wes Bos](https://github.com/wesbos)

Check out the [Course Website](https://es6.io/) for more detailed info.

Check out the [Course's Source Code](https://github.com/wesbos/es6.io)


### Module 1: New Variables -- Creation, Updating and Scoping
- `let` and `const` variables are both BLOCK scoped meaning they are scoped to the block (whatever brackets) they are in.

- Cannot redeclare a `let` variable in the same scope the way you can with `var`
- A `const` variable cannot be changed (as in "constant") but it's properties CAN be updated.

- an IIFE (Immediately-Invoked Function Expression) which is a function that runs before anything else and prevents variables leaking (e.g. `var name = "Andrew";`) is not necessary any longer since `let` and `const` are block scoped. Simply put them in brackets.
- in a for loop if you use `var i = 0` var is overwritten every time it loops so after the last iteration, if you call `i` (which has leaked out btw) then it will be equal the result of its last loop. `let` does not do this.

- Temporal dead zone = you cannot access a variable before it has been defined.  `console.log(tank);  const/let = tank;`

- when to use `var/let/const`
    - use `const` by default
    - only use `let` if rebinding is needed
    - (`var` shouldn't be used)
    - [const is not about immutability where you can change the properties.](https://mathiasbynens.be/notes/es6-const)

### Module 2: Function Improvements: Arrows and Default Arguments
