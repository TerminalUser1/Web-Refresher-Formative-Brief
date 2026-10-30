# How Study Space works

## 1. HTML supplies the content
index.html is the browser's entry point. The head sets the page title, language, character encoding and mobile viewport. The stylesheet link loads styles.css. The script tag uses defer so JavaScript runs after the HTML has been parsed.

The header contains the brand and navigation. The main element contains two sections: the introduction and checklist. An aside holds a study suggestion. The footer closes the page. There is one h1, followed by an h2 for the checklist. Each checkbox is inside a label, so clicking its words also toggles it. No images are used, so there are no image assets or missing alt attributes.

## 2. CSS supplies the layout
The hero uses display: grid with two columns. The task list uses three equal columns. At 560 pixels and below, a media query makes both grids one column. This lets the content stack on phones.

The variables --p, --i and --s represent the page, text and soft panel colours. light-dark() chooses the appropriate colour from each pair according to the element's color-scheme. The theme button changes that scheme. These features require a modern browser.

## 3. JavaScript supplies behaviour
The code finds the page root with getElementById. querySelector finds the button and output; querySelectorAll finds the checkboxes. The spread operator converts the checkbox collection into an array.

A click event listener reverses the dark boolean using !dark. It updates colorScheme, the button's visible label and aria-pressed. Updating aria-pressed communicates the toggle state to assistive technology.

Each checkbox has a change listener. filter selects checked boxes, and length counts them. textContent updates the output with the count or the completion message. aria-live="polite" lets assistive technology announce the result without interrupting the user.

Example: checking two boxes produces '2 of 3 complete'. Checking all three produces 'All done. Take a break!'. Unchecking one returns to '2 of 3 complete'.

## 4. Test it yourself before submission
- Open index.html and confirm the page loads with styling.
- Use browser developer tools to inspect widths of 375 px and 1280 px. At 375 px, the hero and tasks should stack without horizontal scrolling.
- Toggle the theme twice. Confirm the label and colours change and return.
- Check all tasks, then uncheck one. Confirm the counter updates both ways.
- Press Tab to move through controls and Space to activate the button or checkbox. Confirm focus stays visible.
- Look at the developer-tools Console while using the controls. Record any errors and fix them.
- Refresh and confirm the checklist and theme reset. State is intentionally not saved.

Record only tests you actually perform. A code check does not replace visual testing in a browser.

