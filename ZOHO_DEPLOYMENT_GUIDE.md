# Zoho Sites Deployment Guide - puneethjoseph.in

**⚠️ IMPORTANT: Zoho Sites Limitations**

Zoho Sites is a **website builder platform** (drag-and-drop), NOT a traditional web hosting service. It does **NOT support direct uploading of custom HTML/CSS/JS files**.

## 🚨 Key Limitations

1. **No Direct File Upload**: You cannot simply upload HTML/CSS/JS files to Zoho Sites
2. **Page Builder Only**: Zoho Sites uses a drag-and-drop page builder interface
3. **Custom Themes**: Only supports importing custom themes in .ZIP format (with specific Zoho markup requirements)
4. **Not for Static Sites**: Zoho Sites is designed for building sites using their tools, not hosting static files

## ✅ Recommended Solutions

### Option 1: Use GitHub Pages (Recommended)

Since Zoho Sites doesn't support static file hosting, use **GitHub Pages** instead:

1. **Your repository is already set up**: `/contra-website/`
2. **Enable GitHub Pages** in repository settings
3. **Use custom domain**: Point `puneethjoseph.in/contra/` to GitHub Pages
4. **DNS Configuration**: Add CNAME record pointing to GitHub Pages

**Advantages:**
- ✅ Free hosting
- ✅ Supports static HTML/CSS/JS directly
- ✅ Automatic HTTPS
- ✅ Easy updates (just push to GitHub)
- ✅ No restrictions on file structure

### Option 2: Use Zoho Sites Page Builder

If you must use Zoho Sites, you'll need to:

1. **Recreate the site** using Zoho's drag-and-drop builder
2. **Manually add content** section by section
3. **Use custom CSS** (if Zoho Sites allows custom CSS injection)
4. **Limitations**: May not support all features (animations, complex layouts)

### Option 3: Use Alternative Hosting

Consider these alternatives that support static files:
- **Cloudflare Pages** (free, fast CDN)
- **Netlify** (free, great for static sites)
- **Vercel** (free, excellent performance)
- **Traditional web hosting** (cPanel, FTP access)

## 📋 Prerequisites

- Access to Zoho Sites dashboard for `puneethjoseph.in` (if using Option 2)
- OR GitHub repository access (if using Option 1 - Recommended)
- Files from GitHub repository: `/contra-website/contra/`

## 🎯 Recommended Approach: GitHub Pages + Custom Domain

Since Zoho Sites doesn't support static file hosting, here's the best approach:

**Use GitHub Pages for hosting, then point your domain to it.**

### Why This Works Better:
- ✅ Your static HTML/CSS/JS files work as-is
- ✅ No need to recreate in Zoho's page builder
- ✅ Easy updates (git push)
- ✅ Free and reliable
- ✅ Can still use `puneethjoseph.in` domain

## 📁 Required Files

From your GitHub repository, you need these files:
```
contra/
├── index.html      # Main ConTrac page
├── contra.css      # Stylesheet (with gold borders)
└── contra.js       # JavaScript
```

## 🚀 RECOMMENDED: Use GitHub Pages Instead

**Since Zoho Sites doesn't support static file hosting, use GitHub Pages:**

See `GITHUB_PAGES_DOMAIN_SETUP.md` for complete instructions on:
- Setting up GitHub Pages
- Configuring custom domain `puneethjoseph.in`
- DNS configuration
- Automatic deployment

**Quick Start:**
1. Enable GitHub Pages in your repository settings
2. Add custom domain in GitHub Pages settings
3. Configure DNS at your domain registrar
4. Your site will be live automatically!

---

## ⚠️ Alternative: Zoho Sites Page Builder (Not Recommended)

If you absolutely must use Zoho Sites, you'll need to recreate the site using their page builder. This is time-consuming and may not support all features.

### Step-by-Step Deployment (Zoho Sites Page Builder)

### Step 1: Download Files from GitHub

**Option A: Clone Repository**
```bash
cd /Users/puneeth_macstudio/Train/Working/ForMac
git clone https://github.com/YOUR_USERNAME/REPO_NAME.git contra-website-temp
cd contra-website-temp/contra
# Files are ready: index.html, contra.css, contra.js
```

**Option B: Download ZIP from GitHub**
1. Go to your GitHub repository
2. Click "Code" → "Download ZIP"
3. Extract ZIP file
4. Navigate to `contra/` folder inside

**Option C: Use Existing Local Files**
```bash
cd /Users/puneeth_macstudio/Train/Working/ForMac/contra-website/contra
# Files are here: index.html, contra.css, contra.js
```

### Step 2: Access Zoho Sites Dashboard

1. **Log in to Zoho Sites:**
   - Go to: https://sites.zoho.com
   - Log in with your account

2. **Select Your Site:**
   - Find and click on `puneethjoseph.in`
   - Enter the site editor/dashboard

### Step 3: Navigate to File Manager

**Important:** Use **File Manager**, NOT the Pages section!

1. **Find File Manager:**
   - Look for "File Manager" or "Files" in the left sidebar
   - Or go to: Settings → File Manager
   - This is separate from the "Pages" section

2. **Navigate to contra/ folder:**
   - If `contra/` folder exists, click on it
   - If it doesn't exist, create it:
     - Click "New Folder" or "Add Folder"
     - Name it: `contra` (lowercase)
     - Click "Create"

### Step 4: Upload Files to Zoho Sites

**Upload these 3 files to the `contra/` folder:**

1. **Upload index.html:**
   - Click "Upload" or "Add File" in the `contra/` folder
   - Select `index.html` from your local files
   - Wait for upload to complete

2. **Upload contra.css:**
   - Click "Upload" again
   - Select `contra.css` from your local files
   - Wait for upload to complete

3. **Upload contra.js:**
   - Click "Upload" again
   - Select `contra.js` from your local files
   - Wait for upload to complete

**Final structure in Zoho Sites File Manager should be:**
```
contra/
├── index.html
├── contra.css
└── contra.js
```

### Step 5: Verify File Structure

1. **Check File Manager:**
   - Navigate to `contra/` folder
   - Verify all 3 files are there
   - Check file sizes match your local files

2. **Verify File Content (optional):**
   - Click on `index.html` to view/edit
   - Check line 31: Should have `href="contra.css?v=20260111"`
   - Check bottom: Should have `src="contra.js?v=20260103"`
   - This confirms files are correct

### Step 6: Update Existing Content on puneethjoseph.in

If you have existing content on your main page that needs updating:

1. **Go to Pages Section:**
   - Click on "Pages" in left sidebar
   - Find your main page (usually `index.html` or homepage)

2. **Update Links to ConTrac:**
   - Find any links to ConTrac/Contra
   - Update them to: `/contra/` or `/contra/index.html`
   - Example: `<a href="/contra/">Learn More About ConTrac</a>`

3. **Add/Update Navigation:**
   - If you have a navigation menu, add:
     - Link text: "ConTrac" or "Contracts Tracker"
     - Link URL: `/contra/`

4. **Save Changes:**
   - Click "Save" or "Update" on the page

### Step 7: Publish Your Site

**Critical Step:** Zoho Sites requires explicit publishing!

1. **Find Publish Button:**
   - Look for "Publish" or "Update" button in the top bar
   - Or go to: Settings → Publishing

2. **Click Publish:**
   - Click "Publish" or "Update Site"
   - Wait for confirmation message
   - This makes changes live

3. **Wait for Publishing:**
   - Publishing usually takes 1-2 minutes
   - You'll see a confirmation when complete

### Step 8: Clear Cache

**Important:** Clear cache to see changes immediately!

1. **Clear Zoho Sites Cache (if available):**
   - Go to: Settings → Site Settings
   - Look for "Clear Cache" or "Cache" option
   - Click to clear cache
   - If no option, proceed to browser cache clearing

2. **Clear Browser Cache:**
   - **Hard Refresh:** `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
   - Or open Developer Tools (F12) → Right-click refresh → "Empty Cache and Hard Reload"

3. **Wait for CDN Propagation:**
   - Zoho Sites uses CDN which can take 5-15 minutes
   - Changes may not appear immediately globally

### Step 9: Test Your Deployment

1. **Test Main URL:**
   - Visit: `https://www.puneethjoseph.in/contra/`
   - Should load the ConTrac page

2. **Test Direct File Access:**
   - Visit: `https://www.puneethjoseph.in/contra/contra.css`
   - Should show CSS content (not 404)
   - Visit: `https://www.puneethjoseph.in/contra/contra.js`
   - Should show JavaScript content (not 404)

3. **Check Browser Console:**
   - Open Developer Tools (F12)
   - Go to "Console" tab
   - Check for any errors (should be none)
   - Go to "Network" tab
   - Reload page
   - Verify `contra.css` and `contra.js` load with status 200

4. **Verify Visual Changes:**
   - Check that gold borders appear on all boxes
   - Check that modern SVG icons display correctly
   - Check that page is responsive

## 🔄 Updating Existing Content

### If You Need to Update Files Later

1. **Make Changes Locally:**
   - Edit files in your local repository
   - Test changes locally

2. **Commit and Push to GitHub:**
   ```bash
   cd /Users/puneeth_macstudio/Train/Working/ForMac/contra-website
   git add .
   git commit -m "Update website content"
   git push origin main
   ```

3. **Download Updated Files:**
   - Pull from GitHub or download updated files

4. **Re-upload to Zoho Sites:**
   - Go to File Manager → `contra/` folder
   - Delete old files (or they'll be replaced)
   - Upload new files
   - **Important:** Update CSS version in `index.html` if CSS changed:
     - Change `contra.css?v=20260111` to `contra.css?v=20260112` (or new date)

5. **Publish and Clear Cache:**
   - Click "Publish" in Zoho Sites
   - Clear browser cache
   - Wait for CDN propagation

## 🎨 Updating Main Page (puneethjoseph.in)

### Add ConTrac Link to Main Page

1. **Edit Main Page:**
   - Go to Pages section
   - Click on your main page (homepage)

2. **Add Navigation Link:**
   ```html
   <a href="/contra/" class="nav-link">ConTrac</a>
   ```

3. **Add Teaser Section (Optional):**
   - You can add a teaser section about ConTrac
   - Link it to `/contra/` for full details

4. **Save and Publish:**
   - Save the page
   - Publish the site

## ⚠️ Common Issues & Solutions

### Issue: Files Uploaded But Not Showing

**Solution:**
1. Check you're in File Manager, not Pages
2. Verify files are in `contra/` folder
3. Click "Publish" button
4. Clear browser cache
5. Wait 10-15 minutes for CDN

### Issue: CSS/JS Not Loading (404 errors)

**Solution:**
1. Verify file names: `contra.css` and `contra.js` (not `styles/contra.css`)
2. Check file paths in `index.html` match uploaded files
3. Ensure files are in same folder as `index.html`
4. Check file permissions in Zoho Sites

### Issue: Changes Not Reflecting

**Solution:**
1. **Update CSS version number** in `index.html`:
   - Change `contra.css?v=20260111` to `contra.css?v=20260112`
   - This forces browser to reload CSS
2. Clear browser cache (hard refresh)
3. Republish site in Zoho
4. Wait for CDN propagation

### Issue: Pages vs Files Confusion

**Remember:**
- **Pages Section:** For Zoho page builder pages
- **File Manager:** For static HTML/CSS/JS files
- **Use File Manager** for ConTrac website files

## 📝 Deployment Checklist

- [ ] Files downloaded from GitHub repository
- [ ] Zoho Sites dashboard accessed
- [ ] File Manager opened (not Pages)
- [ ] `contra/` folder created/accessed
- [ ] `index.html` uploaded
- [ ] `contra.css` uploaded
- [ ] `contra.js` uploaded
- [ ] File structure verified in File Manager
- [ ] Main page updated with ConTrac link (if needed)
- [ ] Site published in Zoho Sites
- [ ] Browser cache cleared
- [ ] Tested at `https://www.puneethjoseph.in/contra/`
- [ ] Verified CSS and JS load correctly
- [ ] Checked browser console for errors
- [ ] Verified gold borders and modern icons display

## 🎯 Quick Reference

**File Structure in Zoho Sites:**
```
contra/
├── index.html
├── contra.css
└── contra.js
```

**URLs:**
- Main page: `https://www.puneethjoseph.in/`
- ConTrac page: `https://www.puneethjoseph.in/contra/`
- CSS file: `https://www.puneethjoseph.in/contra/contra.css`
- JS file: `https://www.puneethjoseph.in/contra/contra.js`

**Important Commands:**
- Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
- Developer Tools: `F12`

## 💡 Pro Tips

1. **Version Numbers:**
   - Always update CSS version when CSS changes
   - Format: `contra.css?v=YYYYMMDD`
   - This forces browser to reload

2. **Test Before Publishing:**
   - Test files locally first
   - Verify all links work
   - Check responsive design

3. **Keep GitHub in Sync:**
   - Always commit changes to GitHub
   - This serves as backup
   - Easy to rollback if needed

4. **Document Changes:**
   - Note what you changed
   - Update version numbers
   - Keep deployment log

---

**Your ConTrac website will be live at:** `https://www.puneethjoseph.in/contra/`

For troubleshooting, see:
- `CACHE_CLEARING_GUIDE.md` - Detailed cache clearing
- `ZOHO_SITES_DEPLOYMENT.md` - General Zoho deployment
- `ZOHO_PAGES_AND_FILES.md` - Understanding Pages vs Files

