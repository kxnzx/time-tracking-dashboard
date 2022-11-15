# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

#### Screensize 1440px - Desktop

![Desktop](./images/Desktop.gif)

#### Screensize 375px - Mobile

![Mobile](./images/Mobile.gif)

### Links

- View my Solution on [Frontend Mentor](https://www.frontendmentor.io/solutions/time-tracking-dashboard-with-vanilla-javascript-83LpYG2Inf)
- View the [Live Site](https://kxnzx.github.io/time-tracking-dashboard/)

## My process

- HTML semantics
- Set variables
- Reset default settings
- Styles (Mobile First)
- JavaScript

### Built with

- Semantic HTML5 markup
- JavaScript
- SASS custom properties
- CSS Grid
- CSS Flexbox
- Mobile-first workflow
- JSON

### What I learned

I have learned how to add custom data to a <button> element with the data-\* attribute.

To see how you can add code snippets, see below:

```html
<!-- Data-* attribute attaches data to the button -->
<button data-frequency="daily" class="btn">Daily</button>
<button data-frequency="weekly" class="btn">Weekly</button>
<button data-frequency="monthly" class="btn">Monthly</button>
```

I also learned about the clamp() method. This method is a reference to woodworking in which a clamp limits the movement of a saw. I have used this method on the font-size:

```css
font-size: clamp(1.5rem, 2vw + 1rem, 5rem);
```

I have added +1rem to remain the zoom-in function of the browser.

This method takes three parameters: a minimum value, a preferred value, and a maximum allowed value.

clamp(minimum, preferred, maximum);

This is how it works:
When you decrease the size of the viewport, the viewport becomes smaller, thus the vw or % of the fontsize also becomes smaller. And vice versa for when you increase the viewport. The clamp()method essentially works the same as when you use width:100%, in this case the width will adjust to the viewport width size.

Minimum: this absolute unit prevents the element from becoming smaller than the set value
Preferred: prefered relative unit scalable value
Maximum: this absolute unit prevents the element from being bigger than the set value

Example:
clamp(30px, 6vw, 72px);
Ones the browser hits 30px it will not go below that even if the viewportsize is decreasing. Ones the browser hits 72px it will not go beyond that even if the viewportsize is increasing.

## Author

- Frontend Mentor - [@kxnzx](https://www.frontendmentor.io/profile/kxnzx)
