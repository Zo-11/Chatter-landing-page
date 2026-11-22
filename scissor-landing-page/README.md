# Scissor landing page

A responsive HTML and CSS recreation of the Scissor page in `AltSchoolV2-Exam.png`. It is kept in its own folder so it does not replace the previously built Chatter page.

## Open it in VS Code

1. Open this folder in VS Code: `outputs/scissor-landing-page`.
2. Open `index.html` in a browser, or use VS Code's Live Server extension and choose **Open with Live Server**.
3. Edit the content in `index.html` and the visual styles in `styles.css`. The small interaction behaviors are in `script.js`.

## How the screenshot maps to the code

- The header, hero heading, buttons, and link illustration are in `index.html` under `.site-header` and `.hero`.
- The blue metrics band is `.stats`; the four benefit blocks are `.features`.
- The three plan cards are `.pricing`, with the Professional card emphasized by `.price-card-featured`.
- The dark link form is `.shorten-section`; the accordion questions use native `<details>` and `<summary>` elements in `.faqs`.
- The final call to action and grouped footer links are `.closing-cta` and `.site-footer`.
- `styles.css` uses a centered desktop layout and media queries to reflow the design for tablets and phones.

The URL form shows a **demo preview** in the browser only. It does not create a real short link or redirect; that requires connecting a URL-shortening backend.

