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

### 2. Fix layout issues
Whatever the browser you use, it’s a good idea from now on, to toggle the device view.

In a normal situation, you should start with “mobile first” in mind and write your CSS first for the mobile. But because we already have a desktop version, we will exceptionally add some media-queries for mobile and tablet.
- For extra large devices (no media queries)
- For desktop / large devices (```max-width: 992px```)
- For tablet / medium styles (```max-width: 767px```)
- For mobile styles (```max-width: 480px```)

**We will put media queries at the end of each section to facilitate the reading but for performance reasons, the best practice is to unifiy all similar breakpoints at the end of the CSS file.**

**In your `02-1-styles.css` file:**
- inside the `/* Helpers` section target all images inside the main section
    - Property: `width`, Value: `100%`
    - Property: `height`, Value: `auto`
- inside the `/* Section Latest news` section, add a new media query (`max-width: 767px`)
    - Target the `row` inside `section-latest-news`
        - Property: `flex-direction`, Value: `column`
- inside the `/* Grid` section, at the end, add a new media query (`max-width: 767px`)
    - First, redefine the variable `section-padding` and give that value: `5rem 1.5rem`. And redefine the variable `section-body-padding` with `2rem 0 0`
    - Target the `ul.row` and the `row` class
        - Property: `flex-direction`, Value: `column`
        - Property: `margin`, Value: `0`
    - Target all the classes that started with `col-`
        - Property: `margin`, Value: `0 0 3rem 0`
    - Target the `col-1-3` and `col-1-2` classes
        - Property: `width`, Value: `100%`

The `navbar` is not allowing the website to fit the window. We will temporarily hide it and create a mobile navbar later.
- inside the `/* Navbar section`, at the end, add a new media query (`max-width: 767px`)
    - Target the `navbar-menu` class
        - Property: `display`, Value: `none`

You should now be able to easily view the website on a device of any screen/window size. I guess you are surprised that was so easy?!

**Rendering on wide screen**
![](/responsive_design/images/ec686cf75a8788a04bd5.png)

**Rendering on screen with max-width: 767px**
![](/responsive_design/images/741a7a68af4e92b5c286.png)

**Rendering on screen with max-width: 767px, you can see the navbar is hidden**
![](/responsive_design/images/3ee548024a868f4ce695.png)

### 3. Generate images with responsive breakpoints
Go to Responsive Breakpoints: https://www.responsivebreakpoints.com

In Breakpoints generation settings:

- Resolution: From ```380``` to ```1200```
- Size step: ```25```
- Maximum images: ```3```
- Art-direction: ```Desktops```
- Upload your images one at a time:
    - ```pic-about-01.jpg```
    - ```pic-article-01.jpg```
    - ```pic-article-02.jpg```
    - ```pic-article-03.jpg```
- Copy the markup for the ```<img>``` tags and replace your current ```<img>``` tags with it.
- Download the images and place them into the ```images``` directory

Here’s an example on how to add different resolutions of the same image
```
<img
    sizes="(max-width: 3000px) 40vw, 1200px"
    srcset="
      about-us_icoxoo_c_scale,w_380.jpg 380w,
      about-us_icoxoo_c_scale,w_853.jpg 853w,
      about-us_icoxoo_c_scale,w_1200.jpg 1200w"
    src="about-us_icoxoo_c_scale,w_1200.jpg"
    alt="">
```

### 4. Create the mobile icon and hide the menu
We want to have a clickable icon that shows and hide our navigation. We don’t want to use JavaScript but find a pure HTML / CSS way. We learned that input type checkbox have a checked - unchecked state. So we are going to use this for our menu.

Using the previous files as the base for this project

**Changes to the HTML**

Just before the `<nav class="navbar-menu">`
- Create an input (which will be not visible)
    - Class: `menu-btn`
    - Type: `checkbox`
    - Id: `menu-btn`
- Create a label
    - Class: `menu-icon`
    - For: `menu-btn`
    - In the label create an empty `span` with the `navicon` class.

**Changes to the CSS**

Inside the `/* Navbar` section, and inside the `767px` media query
- Create the `root` global selector. We want to override a CSS variable:
    - Variable name: `nav-item-margin`, Value: `0`
- In the selector for the `navbar-menu` class
    - Property: `flex`, Value: `1`
- Target the `nav` class in `header` class
    - Property: `flex-direction`, Value: `column` (for the element of the menu be below each other)
    - Property: `overflow`, Value: `hidden`
    - Property: `max-height`, Value: `0` (the display property can’t be animated, so we use the height that can be animated)
    - Property: `transition`, Value: `max-height .2s ease-out`

**Rendering on screen with max-width: 767px, the check box is the input**
![](responsive_design/images/17e4ace4fe8c91201e0a.png)

