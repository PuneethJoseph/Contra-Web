# Changelog

All notable changes to the ConTrac website will be documented in this file.

## [1.1.1] - 2026-01-08

### Fixed
- **Critical:** Fixed icon-title overlap issue in feature cards
  - Added explicit margin-bottom (2.5rem) to `.feature-icon` with `!important` flag
  - Added z-index layering (icon: z-index 1, title: z-index 2) to prevent visual overlap
  - Added `position: relative` to ensure proper stacking context
  - Fixed flexbox layout with `!important` flags to prevent rule conflicts
  - Reduced title line-height to 1.3 to prevent upward text extension

### Changed
- Moved `VERIFICATION_CHECKLIST.md` to `temp-docs/` folder for better organization

---

## [1.1.0] - 2026-01-07

### Added
- Privacy Policy page (`privacy.html`)
- Terms of Service page (`terms.html`)
- Support & Help page (`support.html`)
- JSON-LD structured data for SEO (SoftwareApplication & WebSite schemas)
- Favicon support (`favicon.svg`)
- Open Graph image for social sharing (`og-image.jpg`)
- PWA manifest file (`site.webmanifest`)
- App Store link placeholders (replace `[APP_ID]` when ready)
- Accessibility improvements (ARIA labels, skip links, semantic HTML)
- Canonical URLs and enhanced meta tags
- Mobile navigation menu with proper ARIA attributes

### Fixed
- Mobile responsiveness issues (iPhone compatibility)
- Content truncation on mobile devices
- Text wrapping and overflow issues
- Mobile navigation menu functionality

### Changed
- Updated iOS version requirement to iOS 26
- Clarified iOS-only availability (macOS coming soon)
- Improved mobile spacing and typography
- Enhanced mobile navigation UX
- Updated download section descriptions

### Technical
- Added skip-to-content link for accessibility
- Improved keyboard navigation
- Added proper semantic HTML structure (`<main>`, `aria-labelledby`)
- Organized helper files in `assets-sources/` folder
- Updated VERSION and README documentation

---

## [1.0.0] - 2026-01-06

### Added
- Initial release with modern design
- Gold borders on all feature cards
- Modern SVG icons replacing emoji icons
- Responsive design for all devices
- GitHub Pages deployment ready
- Custom domain support configured

### Files
- `index.html`: Main ConTrac website page
- `contra.css`: Stylesheet with gold borders and modern design
- `contra.js`: Interactive JavaScript functionality

### Deployment
- Repository: Contra-Web
- Hosting: GitHub Pages
- Custom Domain: contra.puneethjoseph.in (configured)

---

[1.1.0]: https://github.com/PuneethJoseph/Contra-Web/releases/tag/v1.1.0
[1.0.0]: https://github.com/PuneethJoseph/Contra-Web/releases/tag/v1.0.0

