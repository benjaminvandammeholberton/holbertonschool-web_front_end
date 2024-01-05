# Accessibility
![cover](/images/66ba13a2581c5457361a.png)

## Learning Objectives
- ARIA’s main purpose
- WCAG conformance levels (A, AA and AAA)
- The importance of Web Accessibility
- Tools to use for Web Accessibility

## Requirements
- Allowed editors: `vi`, `vim`, `emacs`
- A `README.md` at the root of the project directory is mandatory
- HTML and CSS have been rendered on Chrome 78 or more.

## Tasks
### 0. make the "works" card focus visible
Start with `00-styles.css`, `00-index.html` and `/images` files

Let’s start by the “Work” section:

We have an issue with the focus (moving from one link to another with the `TAB` key) in the Desktop version. With the DevTools, you can active the focus on the `<a>` inside `.card-title` and nothing happen.

To solve it, we need to update the way we are managing the hover state of `.card-title`:

- In your `keyboard/01-styles.css` file, in the `/* Card WORK` section
    - Remove `opacity: 0` inside `.card-work` `.card-title`
    - Remove `.card-work:hover` `.card-inner`
    - Remove `.card-work:hover` `.card-title`
    - Target the selector `.card-work` `.card-title` a and add an opacity to 0.
    - For `.card-work .card-title a` with the `a` in state focus and `.card-work:hover` `.card-title a`:
        - Property: `opacity`, Value: `1`
        - Property: `height`, Value: `100%`
        - Property: `background-color`, Value: `rgba(0, 0, 0, 0.7)`

Now you use the keyboard to navigate, you should see the card with the title and the dark background like when you hover the card with your mouse.

All the other elements have a blue outline around.

### 1. add the skip-links
Using the `00-index.html` provided, in your `skip-links/01-index.html` file, just after the `<body>` HTML open tag
- Add the `<!-- Skip links -->` comment
- Create a new `<nav>` tag with the `aria-label` attribute. Put the value `Skip links` inside it.
    - Create a non ordered list of class `off-screen`
        - Create a first `li` with a link inside
            - Href: `#a11y-primary-nav`
            - Class: `skip-link`
            - Text: `Skip to primary navigation`
        - Create a second `li` with a link inside
            - Href: `#a11y-main-content`
            - Class: `skip-link`
            - Text: `Skip to main content`
- On the `<nav class="navbar-menu">`, add an id with the text: `a11y-primary-nav` and a `tabindex="-1"`
- On the` <main>` tag, add an id with the text: `a11y-main-content`, and `tabindex="-1"`

repeat the same changes in your `skip-links/01-article.html` file

The name of the ID can be anything but prefixing with a11y can help us to remember why we are using an ID.

Using the stylesheet from the previous task, in your `skip-links/01-styles.css` file, in the `/* Helpers` section, after the `visually-hidden` selector
- Target the `off-screen` class
    - Property: `left`, Value: `-100vw`
    - Property: `position`, Value: `absolute`
- Target the `skip-link` class
    - Property: `background`, Value: link to the `color-black` variable
    - Property: `color`, Value: link to the `color-white` variable
    - Property: `left`, Value: `0`
    - Property: `padding`, Value: `.7rem`
    - Property: `position`, Value: `fixed`
    - Property: `opacity`, Value: `0`
    - Property: `top`, Value: `0`
    - Property: `z-index`, Value: `10`
    - Property: `transform`, Value: `translateY(-1rem)`
    - Property: transition, Value: `transform .2s ease-in-out, opacity .2s ease-in-out`
- Target the `focus` state of `skip-link` class
    - Property: opacity, Value: `1`
    - Property: transform, Value: `translateY(0)`

### 2. Elements must have sufficient color contrast
You are given this `fix-a11y/00-index.html` starter file:

As you can see, the contrast is not good. The easy fix is simply to remove the body styles in the embed `<style>`. Do this in your `fix-a11y/01-index.html` file. In a real case, you could use the Contrast Ratio section of the Color Picker.

Check with Axe to ensure the issue is fixed.

**Rendering the page should display something like this**

![](/accessibility/images/6ca4565a4d207b00f718.png)

### 3. Documents must have `<title>` element to aid in navigation

Taking your code from the previous task, in your `fix-a11y/02-index.html` file

Add a title: `Homepage - A fake website`

Check with Axe to ensure the issue is fixed

![](/accessibility/images/4c0ba151685ae5b2c801.png)

### 4. `<html>` element must have a lang attribute

Taking your code from the previous task, in your `fix-a11y/03-index.html` file

On the `html` tag, add the attribute `lang` with the `en` value.

Check with Axe to ensure the issue is fixed.

### 5. Images must have alternate text

Taking your code from the previous task, in your `fix-a11y/04-index.html` file

Locate the `img` that points to the `logo.png`
Add an `alt` attribute with the text `Name of the logo`
Locate the `img` that points to the `hero-img.png`
Add an empty `alt` (decorative image)

### 6. Form elements must have labels

Taking your code from the previous task, in your `fix-a11y/05-index.html` file, locate the `form`
- Add a `label` just before the `input`
    - Class: `visually-hidden`
    - For: `email`
- On the `input`
    - Add an `id`: `email`

Axe tells use that the issue is solved. But actually, some elements should be fixed for better accessibility and usability.

- We can change the `type` from text to `email`
- Add the attribute `autocomplete` with the value `email`
- Add the `required` attribute and the `aria-required="true"`
- Change the `a` to be a `button`
- We can remove the `placeholder` as it doesn’t add any value

We don’t have any error handling in our example, that should exist on the front-end / back-end side.

### 7. Links must have discernible text

In your `fix-a11y/06-index.html` file

Locate the `facebook-icon` and add an `aria-label` on the a with the text `Facebook`
Locate the twitter-icon and add an `aria-label` on the a with the text `Twitter`

Links should never be empty, in our case, we are using a font (like Font Awesome) to generate icons.

### 8. Zooming and scaling must not be disabled

In your `fix-a11y/07-index.html` file

Locate the `meta` viewport and remove `user-scalable=no`


### 9. Heading levels should only increase by one and all page content must be contained by landmarks

You can install the `headingsMap` extension to have a visual representation of your headings.

Taking your code from the previous task, in your `fix-a11y/08-index.html` file

- Like our Techium project, we are going to create an `h1` just after the `<div class="header">` closing tag. (The `h1` will be sibling to the `<div class="header">` div)
    - Text: `Homepage`
- Change `<h6>This is me</h6>` to be `<h2>This is me</h2>`
- Change `<h1>Philip Gilbert</h1>` to be `<span>Philip Gilbert</span>`
- Change `<h6>About Me</h6>` to be `<h2>About Me</h2>`
- Change `<h1>Personal Details</h1>` to be `<span>Personal Details</span>`
- Change `<h1>My Offered Services</h1>` to be `<h2>My Offered Services</h2>`
- Change `<h4>Web Design</h4>` to be `<h3>Web Design</h3>`
- Change `<h4>Web Development</h4>` to be `<h3>Web Development</h3>`
- Change `<h1 class="counter">2536</h1>` to be `<span class="counter">2536</span>`
- Change `<h1 class="counter">6784</h1>` to be `<span class="counter">6784</span>`
- Change `<h1>Client's Feedback About Me</h1>` to be `<h2>Client's Feedback About Me</h2>`
- Change `<h4>Harriet Maxwell</h4>` to be `<span>Harriet Maxwell</span>`
- Change `<h1>Choose Your Plan</h1>` to be `<h2>Choose Your Plan</h2>`
- Change `<h1>01</h1>` to be `<h3>01</h3>`
- Change `<h1>$199.00</h1>` to be `<span>$199.00</span>`
- Change `<h4>About Me</h4>` to be `<span>About Me</span>`
- Change `<h4>Newsletter</h4>` to be `<span>Newsletter</span>`
- Change `<h4>Follow Me</h4>` to be `<span>Follow Me</span>`

Fixing wrong `headings` is not an easy task. Headings represent the outline of your content. Like the table of contents in a book, headings should help to understand what is inside your page.

Always ask yourself if that word or sentence would make sense for anybody visiting your website.

### 10. Document must have one main landmark

You can install the `Landmarks` extension to visually locate the landmarks on your pages.

Taking your code from the previous task, in your `fix-a11y/09-index.html` file
- Locate the `header` class and convert that `<div>` into a `<header>` tag (only change the tag, no need to change or remove other attributes in the tag)
- Convert the `<div class='nav'>` into a `<nav>` element (only change the tag, no need to change or remove other attributes in the tag)
- Wrap everything from the `<h1>Homepage</h1>` to before the `<div class="footer">` in a `<main>` tag.
- Locate the `footer` class and transform the div to a `<footer>` (only change the tag, no need to change or remove other attributes in the tag)
- Locate all divs with the `section` class, and update divs to be `<section>` (only change the tag, no need to change or remove other attributes in the tag). Except the one with the `Projects Completed` text. Sections should have headings, we don’t have one anymore.

If you open the `landmarks` extension, you should see the landmarks showing.

Tip

Remember that `header`, `section`, `footer` etc contain a default role (=landmarks).

All automated issues are now solved! You fixed around 50% of accessibility issues. The rest are manual issues, tested using screen-reading tools or just reading the code.

### 11. More than 2 elements become list

Automated tools can’t always alert about elements that should exist as a list.

Taking your code from the previous task, in your `fix-a11y/10-index.html` file
- Locate the `nav`
    - Transform the `<div>` in a `<ul>` and every `<p>` in an `li`
- Locate the div with `package-list` class
    - Transform the children in an `ul` with the 3 spans being each an `li`