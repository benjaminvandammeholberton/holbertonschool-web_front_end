# Responsive design

![cover](/images/4fe027a0c298339cb4cb.jpg)

## Learning Objectives
- Mobile-first design
- Media-queries
- Sizes to use for responsive web design
- How to make a website responsive
- The differences between responsive and adaptive design
- CSS units that are used to make elements flexible

## Requirements
- Allowed editors: `vi`, `vim`, `emacs`
- A `README.md` at the root of the project directory is mandatory
- HTML and CSS have been rendered on Chrome 78 or more.

## Wireframe of the Techium project - mobile version

![](/responsive_design/images/a1f906a6a39eba8cb2f3d2877abc9ea84be51d9d.png)

## Starter files
### `00-index.html`
### `00-styles.css`
### images: `/images`

## Tasks
### 0. Fix the hero banner
Because we did some changes with the `article.html` page in the previous project, our hero banner background is no more visible. Let’s fix it!

But before that, to ensure we start on the same foot, you should use the starter HTML and CSS provided in the project description.

In your `01-styles.css` file
- Inside the `hero-homepage` class selector, update some values:
    - Property: `background-position`, Value: `65%` `8rem`
    - Property: `background-size`, Value: `90rem` `auto`
- Inside the selector that targets `section-inner` class inside `section-hero` class
    - Update the `min-height` to `35vh`

**Final rendering of the Hero section should look something like this**
![](/responsive_design/images/f464d8346c36134ec4ae.png)

### 1. Make the container flexible
Using the previous file as the base, in your `02-styles.css` file update the `.container` selector by changing `width` to `max-width`

If you resize your browser, you should see that the content is resizing.

**Wide screen:**
![](/responsive_design/images/5356d9d9b1de3ef692a1.png)

**Narrow screen:**
![](/responsive_design/images/9aeb51d5b4c9586ea05a.png)

