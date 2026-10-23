ST. FRANCIS XAVIER CATHEDRAL — PUBLIC WEBSITE
================================================

This is the PUBLIC INFORMATION WEBSITE for GitHub Pages.
It is separate from the PHP appointment system hosted on InfinityFree.

FILES
- index.html: home page
- about.html: parish information
- services.html: service overview
- schedule.html: Mass schedule information
- announcements.html: parish notice page
- contact.html: contact information
- css/style.css: responsive styling and animations
- js/main.js: mobile navigation, scroll reveal, progress bar, subtle card tilt

DEPLOY TO GITHUB PAGES
1. Create a GitHub repository named: st-francis-church-website
2. Upload the CONTENTS of this folder (not a nested extra folder) to the repository root.
3. Open repository Settings > Pages.
4. Under Build and deployment, select Deploy from a branch.
5. Select branch main and folder /(root), then Save.
6. Wait for the GitHub Pages URL to appear in Settings > Pages.

IMPORTANT BEFORE PUBLISHING
- All Request a Service links currently point to https://stfrancisxavier.freepage.cc/.
  Confirm this is the correct working appointment-system URL. If your actual appointment page is a subpath, replace the links in all HTML files.
- Mass times, address, phone, email, office hours, and announcements have NOT been invented. Update these pages with details verified by the parish before publishing.
- The page uses remote images from Unsplash and Google Fonts, so internet access is required for those assets. Replace them with approved local parish photos if available.
- Do NOT upload stfrancis.db, PHP files, credentials, or private appointment data to this public repository.
- GitHub Pages only hosts static HTML/CSS/JavaScript. PHP and SQLite appointment processing must stay on a PHP-capable host such as the separate InfinityFree backend.
- The appointment-system links do not prove that the backend is currently working; test the InfinityFree system separately.
