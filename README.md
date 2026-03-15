#  Saajid — Portfolio

Modern, responsive personal portfolio for a software developer. Built with HTML5, CSS3, Bootstrap 5, Vanilla JavaScript, and AOS.js. Dark mode by default with light mode toggle.

## Deploy on GitHub Pages

1. Create a new repository on GitHub (e.g. `username.github.io` for a user site, or any repo for project site).
2. Push the contents of this `portfolio` folder to the repo (or use this folder as the root of the repo).
3. In the repo: **Settings → Pages → Source**: choose **GitHub Actions** or **Deploy from a branch**.
   - If **branch**: select branch (e.g. `main`) and folder **/ (root)** or **/portfolio** if the site lives in a `portfolio` subfolder.
4. Your site will be at `https://<username>.github.io/<repo>/` (or `https://<username>.github.io/` if repo is `username.github.io`).

## Before you go live

- **Resume:** Add your PDF as `assets/resume.pdf` so the "Download Resume" button works.
- **Links:** Update in `index.html`:
  - LinkedIn: replace `saajidshaik` in `https://www.linkedin.com/in/saajid-shaik-85b788141/`
  - GitHub: replace `saajidshaik` in `https://github.com/SaajidPasha10/` (and in `js/script.js` for the GitHub stats).
- **Contact form:** For a working form on GitHub Pages, use [Formspree](https://formspree.io/) or similar: add `action="https://formspree.io/f/YOUR_FORM_ID"` and `method="POST"` to the form, and adjust `js/script.js` if needed.

## Run locally

Open `index.html` in a browser, or use a local server:

```bash
# Python
python3 -m http.server 8000

# Node (npx)
npx serve .
```

Then visit `http://localhost:8000` (or the port shown).

## Structure

```
portfolio/
  index.html
  css/styles.css
  js/script.js
  images/
  assets/       # Add resume.pdf here
  README.md
```
