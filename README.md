# NTFS File Manager — public site

Public site for the NTFS File Manager Android app: product home, Help & Feedback,
Privacy Policy, and Terms of Service. Hosted via GitHub Pages, served from this
repo's `master` branch root.

Live at: https://ntfsfilemanager.in/

GitHub Pages still publishes from this repo's `master` branch. The old
`https://jrvaghela72.github.io/ntfsfilemanager/` URL redirects to the custom domain.

The app itself lives in a separate, private repository — this repo exists solely to
host these public-facing pages and the public issue tracker linked from them.

In-app Settings → Help & Feedback opens `help.html`. Privacy and Terms keep their
existing filenames so Play Console and older links keep working.

## Structure

- `index.html` — Product home
- `help.html` — Help & Feedback
- `privacy-policy.html` — Privacy Policy
- `terms-of-service.html` — Terms of Service
- `assets/style.css` — shared styling (Ocean palette from the Android app)
- `assets/icon.png` — app launcher / Play Store icon
- `assets/favicon.png` — 64px favicon
- `assets/screenshots/` — Play Store phone screenshots (web-sized)

Plain HTML/CSS, no build step. Edit a page and push to `master` — GitHub Pages
redeploys automatically within a minute or two.
