# How this Chatter page is built

This implementation follows the supplied screenshot of the **Chatter** landing page. It keeps the page-specific purple identity, cream testimonial/footer panels, editorial photography, and the same section order.

## 1. Start with the page structure

In `index.html`, the page is split into semantic sections so each visible part of the screenshot has a clear purpose:

1. `header.site-header` holds the wordmark, four navigation links, and the login/sign-up actions.
2. `section.hero` holds the large background photograph, dark overlay, headline, supporting copy, and primary action.
3. `section.about` uses two columns for the Chatter description and library photograph.
4. `section.features-section` introduces the three cards shown in the screenshot: Analytics, Social interactions, and Content creation.
5. `section.testimonial` pairs the member portrait and quote on the pale cream band.
6. `section.join` places the member portrait collage beside the final invitation to write, read, and connect.
7. `footer.site-footer` groups the Explore, Support, and Official blog links.

The main navigation and calls to action point to sections on the same page. That keeps the static page usable without adding a JavaScript framework or inventing account flows.

## 2. Recreate the visual system in CSS

`styles.css` begins with a small set of page-specific color variables: deep text, muted text, Chatter purple, warm cream, and a light card border. Reusing these values keeps the buttons, links, icons, and footer visually consistent.

The header and content sections use CSS Grid. The hero uses a real image element with `object-fit: cover`, then a translucent gradient overlay to retain the dark readable treatment from the reference. The feature illustrations are inline SVG icons so they stay sharp at any size.

## 3. Make the page adapt to smaller screens

The desktop About and Join sections use side-by-side columns, and the feature cards use a three-column grid. At 780px these layouts become single-column, with smaller spacing and a wrapped navigation. A second breakpoint at 480px tightens type and spacing for phones. The `prefers-reduced-motion` rule respects a visitor’s motion setting.

## 4. Image assets

The four circular portraits are local crops of the exact people visible in the screenshot: the member testimonial and the three people in the closing community panel. They live in `assets/`. The connected Figma account could not export the original image files, so the hero and library photos remain remote Unsplash selections chosen to fit the screenshot. Export those two original photos from Figma and replace their image URLs in `index.html` if you want every photograph to match the source file. The full screenshot is not embedded in the site.

## 5. Run and publish

Open `index.html` directly to preview the page. It is a static site: upload `index.html`, `styles.css`, and this guide to a GitHub repository, then select the repository root as the publish directory in GitHub Pages, Netlify, or Vercel. The image and font URLs require an internet connection.
