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
