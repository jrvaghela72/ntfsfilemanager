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
- `expertise.html` — Expertise / services
- `404.html` — Not-found page (absolute paths, served by GitHub Pages for any missing URL)
- `assets/style.css` — shared styling (Ocean palette from the Android app)
- `assets/site.js` — mobile menu, scroll reveal, GA4 click events (`data-ga` / `data-ga-location` on a link)
- `assets/vendor/` — self-hosted open-source design libraries, licences alongside:
  [Open Props](https://open-props.style/) (MIT, shadow + easing tokens),
  [Lucide](https://lucide.dev/) (ISC, icon sprite `lucide-sprite.svg`),
  [Inter](https://rsms.me/inter/) (OFL 1.1, variable font). Nothing is loaded from a CDN, so
  Google Analytics stays the only third party a page contacts (Privacy Policy section 23).
- `assets/icon.png` — app launcher / Play Store icon
- `assets/favicon.png` — 64px favicon
- `assets/screenshots/` — Play Store phone screenshots; pages serve the 540px `.webp` with the `.png` as fallback

Plain HTML/CSS, no build step. Edit a page and push to `master` — GitHub Pages
redeploys automatically within a minute or two.
