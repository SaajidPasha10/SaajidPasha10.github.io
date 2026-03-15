# Portfolio — GitHub Pages deployment

Get your portfolio live at `https://<username>.github.io/<repo>/` (or `https://<username>.github.io/` for a user site).

---

## Option 1: New repo with only the website (recommended)

Your site must be served from the **root** of the repo (or from `/docs`). Easiest is a repo that contains only the site files.

### 1. Create a new repo on GitHub

- Go to [github.com/new](https://github.com/new).
- Name it:
  - **`<username>.github.io`** → site will be **https://\<username>.github.io**
  - **Or any name** (e.g. `portfolio`) → site will be **https://\<username>.github.io/portfolio**
- Do **not** add a README, .gitignore, or license (you’re pushing existing files).

### 2. In your project folder, init git and push

Open a terminal in the folder that **contains** `index.html`, `css/`, `js/`, `assets/`, `images/` (your “portfolio” folder).

```bash
# Go into the folder that has index.html
cd "/Volumes/SAAJID/CODE/Portfolio Website/portfolio"

# Initialize git (if not already)
git init

# Add everything
git add .
git commit -m "Initial commit - portfolio site"

# Add your GitHub repo as remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Rename branch to main (if needed) and push
git branch -M main
git push -u origin main
```

**Example:** If your repo is `https://github.com/SaajidPasha10/SaajidPasha10.github.io`:

```bash
git remote add origin https://github.com/SaajidPasha10/SaajidPasha10.github.io.git
git branch -M main
git push -u origin main
```

### 3. Turn on GitHub Pages

1. On GitHub, open your repo.
2. **Settings** → **Pages** (left sidebar).
3. Under **Build and deployment**:
   - **Source:** Deploy from a branch
   - **Branch:** `main` (or `master`)
   - **Folder:** `/ (root)`
4. Click **Save**.

After a minute or two, your site will be at:

- **User/org site:** `https://<username>.github.io`
- **Project site:** `https://<username>.github.io/<repo>/`

---

## Option 2: Website is inside a subfolder (e.g. `portfolio`)

If your repo is the **whole** “Portfolio Website” project and the site lives in a subfolder like `portfolio/`, GitHub Pages can’t serve that subfolder directly. Use one of these:

### A. Use the `portfolio` folder as the only content of the repo

Push only the contents of `portfolio` to a **different** repo (or to a branch), then enable Pages from that repo/branch as in Option 1.

### B. Use GitHub Actions to publish from a subfolder

1. In the **root** of your repo, create `.github/workflows/pages.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Deploy portfolio
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./portfolio
```

2. Push the workflow, then in **Settings → Pages** set:
   - **Source:** GitHub Actions (and run the workflow once if needed).

Your site will be built from the `portfolio` folder.

---

## After deployment

- **Resume:** Add `assets/resume.pdf` so “Download Resume” works.
- **Custom domain (optional):** In **Settings → Pages** you can set a custom domain and add the DNS records GitHub shows.
- **HTTPS:** GitHub Pages serves over HTTPS by default.

## Summary

| Step | Action |
|------|--------|
| 1 | Create repo on GitHub (e.g. `username.github.io` or `portfolio`) |
| 2 | In the folder with `index.html`: `git init`, `git add .`, `git commit`, `git remote add origin <url>`, `git push -u origin main` |
| 3 | Repo **Settings → Pages** → Deploy from branch `main` → folder **/ (root)** → Save |
| 4 | Visit `https://<username>.github.io` or `https://<username>.github.io/<repo>/` |
