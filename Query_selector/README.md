# DOM Manipulation with `querySelector` and `querySelectorAll`

This project demonstrates the use of `querySelector` and `querySelectorAll` for DOM manipulation in JavaScript.

## Features
- Access and modify elements using `querySelector` for `id`, `class`, `tag`, and nested elements.
- Use `querySelectorAll` to target multiple elements and update specific ones by index.

## Code Overview
1. **Using `querySelector` with `id`:**
   - Selects an element by `id` using `#` and updates its content to `"DOG"`.
2. **Using `querySelectorAll` with `tag`:**
   - Selects all `<p>` elements and updates the second element (index `1`) to `"china"`.
3. **Using `querySelector` with `class`:**
   - Selects the first element with the class `.c1` and changes its content to `"BUET😁"`.
4. **Accessing nested elements:**
   - Targets an `<a>` tag inside an unordered list and updates its content to `"Dog"`.

## Usage
Ensure your HTML structure matches the selectors used in the code. Example:
```html
<h1 id="heading">Original Heading</h1>
<p>Text 1</p>
<p>Text 2</p>
<div class="c1">University</div>
<ul>
  <li><a href="#">Link</a></li>
</ul>
```
