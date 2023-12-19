# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Links

- Solution URL: [GitHub](https://github.com/Deanogit/tailwind-product-dean)
- Live Site URL: [Live site](https://tailwind-product-dean.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- TailwindCSS
- Mobile-first workflow

### What I learned

I have a couple of questions about best practices when using fixed widths and heights for the card\_\_container, using these fixed widths stops the layout adapting to smaller changes in screen size, for instance, below the 350px defined in the card\_\_container width, the content does now shrink to smaller screens, therefore requiring users with thinner screens than 350px to scroll across to see all of the content.

Initially I used max-w-[350px] so the card container could collapse when smaller screens were used, but found the card when in md: or larger didn't respond as intended, so stuck with w-[350px]

### Continued development

I'd like to build these projects in vanilla css and perhaps SCSS or Sass too, to get an idea what the different strengths and weaknesses are for each approach.

## Author

- Website - [Dean Howe](https://www.deanhowe.dev)
- Frontend Mentor - [@Deanogit](https://www.frontendmentor.io/profile/Deanogit)
