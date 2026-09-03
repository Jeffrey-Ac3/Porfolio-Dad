# Odunayo Ezekiel Feyisetan — Portfolio (Please do not fork; contains personal information)

⚠️ CRITICAL NOTICE: DO NOT FORK THIS REPOSITORY

Why this repository is public:

This repository is maintained as a public codebase strictly for functional and operational requirements. Public availability is mandatory for the architecture to execute properly.

Notice regarding unauthorized duplication:

Standard usage, contributing, and open feedback are welcome. However, creating unauthorized forks or secondary distributions of this repository is strictly discouraged and actively monitored.

Duplicating or redistributing proprietary system components, configuration assets, or trade secrets contained herein without authorization may constitute an infringement under applicable national and international intellectual property laws, including the Computer Fraud and Abuse Act (CFAA), the Digital Millennium Copyright Act (DMCA), and regional cybersecurity legislation.

Automated tracking systems regularly audit public forks. Unauthorized clones subject to copyright or license violations will be submitted directly to GitHub for immediate DMCA takedowns and permanent account action, and may be escalated for legal remediation.

# A personal portfolio website and CV, built as a static site (plain HTML/CSS/JS — no build step needed).

## Files in this folder

```
index.html                          → the website
styles.css                          → all styling
script.js                           → small interactive behaviors
assets/img/headshot.jpg             → profile photo
assets/Odunayo-Feyisetan-CV.pdf     → downloadable CV (linked from the site)
assets/Odunayo-Feyisetan-CV.docx    → editable Word version of the same CV
```

## How to publish this on GitHub Pages (repo: Portfolio-Dad)

1. Go to your repository **Portfolio-Dad** on github.com.
2. Click **Add file → Upload files**.
3. Drag in *all* the files and folders from this package, keeping the same structure
   (the `assets` folder must stay named `assets`, and `index.html` must sit at the
   top level of the repo, not inside a subfolder).
4. Scroll down and click **Commit changes**.
5. Go to the repo's **Settings** tab → **Pages** (left sidebar).
6. Under "Build and deployment", set **Source** to **Deploy from a branch**.
7. Set **Branch** to `main` (or `master`, whichever your repo uses) and folder to `/ (root)`.
8. Click **Save**.
9. GitHub will show a message like "Your site is live at
   `https://<your-username>.github.io/Portfolio-Dad/`" — this can take 1–2 minutes
   the first time. Refresh the Pages settings page if the link doesn't appear right away.

That's it — the link above is what you'd share with anyone.

## Making future edits

To change any text (a new job, updated phone number, etc.), open `index.html` in
GitHub's web editor (click the pencil icon on the file), make the change, and commit —
the live site updates automatically within a minute or two.
