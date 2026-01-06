# GitHub Pages + Custom Domain Setup for puneethjoseph.in

Complete guide to host ConTrac website on GitHub Pages and use your custom domain `puneethjoseph.in`.

## 🎯 Overview

Since Zoho Sites doesn't support static file hosting, we'll use **GitHub Pages** (which does) and point your custom domain to it.

## ✅ Advantages

- ✅ Free hosting
- ✅ Supports static HTML/CSS/JS directly
- ✅ Automatic HTTPS
- ✅ Easy updates (just `git push`)
- ✅ No file structure restrictions
- ✅ Can use custom domain `puneethjoseph.in`

## 📋 Prerequisites

- GitHub repository with website files (already done ✅)
- Access to domain DNS settings for `puneethjoseph.in`
- GitHub account

## 🚀 Step-by-Step Setup

### Step 1: Enable GitHub Pages

1. **Go to your GitHub repository:**
   - Navigate to: `https://github.com/YOUR_USERNAME/REPO_NAME`

2. **Open Settings:**
   - Click "Settings" tab in repository

3. **Go to Pages:**
   - Scroll down to "Pages" in left sidebar
   - Click on it

4. **Configure Source:**
   - Under "Source", select:
     - **Branch**: `main` (or `master`)
     - **Folder**: `/ (root)` or `/contra` (depending on your structure)
   - Click "Save"

5. **Get GitHub Pages URL:**
   - GitHub will provide: `https://YOUR_USERNAME.github.io/REPO_NAME/`
   - Note this URL (you'll need it for DNS)

### Step 2: Configure Custom Domain in GitHub

1. **In GitHub Pages Settings:**
   - Scroll to "Custom domain" section
   - Enter: `contra.puneethjoseph.in` (for subdomain)
   - OR enter: `www.puneethjoseph.in` (for www subdomain)
   - Click "Save"

2. **GitHub will create a CNAME file:**
   - This file will be automatically created in your repository
   - It contains your custom domain

### Step 3: Configure DNS Records

You need to configure DNS at your domain registrar (where you bought `puneethjoseph.in`).

#### Option A: Subdomain (Recommended - contra.puneethjoseph.in)

1. **Add CNAME Record:**
   - **Type**: CNAME
   - **Name**: `contra` (or `www` if using www)
   - **Value**: `YOUR_USERNAME.github.io`
   - **TTL**: 3600 (or default)

2. **Result:**
   - Your site will be at: `https://contra.puneethjoseph.in`
   - This keeps your main site at `puneethjoseph.in` separate

#### Option B: Root Domain (puneethjoseph.in)

**Note:** Root domain requires A records, not CNAME.

1. **Add A Records:**
   - **Type**: A
   - **Name**: `@` (or leave blank)
   - **Value**: GitHub Pages IP addresses (get current IPs from GitHub docs)
   - Common IPs (verify current ones):
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Add all 4 IPs as separate A records

2. **Add CNAME for www:**
   - **Type**: CNAME
   - **Name**: `www`
   - **Value**: `YOUR_USERNAME.github.io`

3. **Result:**
   - Your site will be at: `https://puneethjoseph.in`
   - This replaces your main site

### Step 4: Wait for DNS Propagation

1. **DNS Propagation Time:**
   - Usually takes 5 minutes to 48 hours
   - Most changes happen within 1-2 hours
   - You can check status at: https://dnschecker.org

2. **Verify DNS:**
   ```bash
   # Check CNAME record
   dig contra.puneethjoseph.in CNAME
   
   # Or use online tools
   # https://mxtoolbox.com/DNSLookup.aspx
   ```

### Step 5: Enable HTTPS (Automatic)

1. **GitHub automatically provisions SSL:**
   - Once DNS propagates, GitHub will detect your domain
   - SSL certificate is automatically issued (can take a few hours)
   - You'll see "Certificate is being provisioned" in GitHub Pages settings

2. **Wait for SSL:**
   - Usually takes 1-24 hours
   - GitHub will email you when ready
   - Or check GitHub Pages settings

3. **Force HTTPS:**
   - In GitHub Pages settings, check "Enforce HTTPS"
   - This redirects HTTP to HTTPS

### Step 6: Test Your Site

1. **Test GitHub Pages URL:**
   - Visit: `https://YOUR_USERNAME.github.io/REPO_NAME/contra/`
   - Should load your site

2. **Test Custom Domain:**
   - Visit: `https://contra.puneethjoseph.in/` (or your chosen domain)
   - Should load your site

3. **Check HTTPS:**
   - Verify SSL certificate is active
   - Browser should show lock icon

## 🔄 Updating Your Site

### Making Changes

1. **Edit files locally:**
   ```bash
   cd /Users/puneeth_macstudio/Train/Working/ForMac/contra-website
   # Edit files in contra/ folder
   ```

2. **Commit and push:**
   ```bash
   git add .
   git commit -m "Update website content"
   git push origin main
   ```

3. **Automatic deployment:**
   - GitHub Pages automatically rebuilds (takes 1-2 minutes)
   - Changes go live automatically
   - No manual publishing needed!

### Update CSS Version (for cache busting)

When CSS changes, update version number:

1. **Edit `contra/index.html`:**
   ```html
   <!-- Change this -->
   <link rel="stylesheet" href="contra.css?v=20260111">
   
   <!-- To this -->
   <link rel="stylesheet" href="contra.css?v=20260112">
   ```

2. **Commit and push:**
   ```bash
   git add contra/index.html
   git commit -m "Update CSS version"
   git push origin main
   ```

## 🔧 Troubleshooting

### Issue: DNS Not Propagating

**Solution:**
1. Check DNS records are correct
2. Wait longer (can take up to 48 hours)
3. Verify with: https://dnschecker.org
4. Check domain registrar settings

### Issue: SSL Certificate Not Issuing

**Solution:**
1. Verify DNS is fully propagated
2. Wait 24 hours (GitHub needs time)
3. Check GitHub Pages settings for errors
4. Try removing and re-adding custom domain

### Issue: Site Not Loading

**Solution:**
1. Check GitHub Pages is enabled
2. Verify branch and folder settings
3. Check repository is public (or you have GitHub Pro)
4. Verify files are in correct location
5. Check GitHub Actions tab for build errors

### Issue: Changes Not Showing

**Solution:**
1. Wait 1-2 minutes for GitHub Pages rebuild
2. Clear browser cache (hard refresh)
3. Check GitHub Actions tab for deployment status
4. Verify files were actually pushed to GitHub

## 📝 DNS Configuration Examples

### Example 1: Subdomain (contra.puneethjoseph.in)

**At your domain registrar, add:**
```
Type: CNAME
Name: contra
Value: yourusername.github.io
TTL: 3600
```

**Result:** `https://contra.puneethjoseph.in`

### Example 2: www Subdomain (www.puneethjoseph.in)

**At your domain registrar, add:**
```
Type: CNAME
Name: www
Value: yourusername.github.io
TTL: 3600
```

**Result:** `https://www.puneethjoseph.in`

### Example 3: Root Domain (puneethjoseph.in)

**At your domain registrar, add:**
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 3600

Type: A
Name: @
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @
Value: 185.199.111.153
TTL: 3600

Type: CNAME
Name: www
Value: yourusername.github.io
TTL: 3600
```

**Note:** Verify current GitHub Pages IPs before using.

## 🎯 Recommended Setup

**Best approach for your situation:**

1. **Use subdomain:** `contra.puneethjoseph.in`
   - Keeps main site separate
   - Easier DNS configuration
   - Less risk of breaking existing site

2. **Keep main site on Zoho:**
   - Your main `puneethjoseph.in` stays on Zoho Sites
   - Add link to ConTrac: `<a href="https://contra.puneethjoseph.in">ConTrac</a>`

3. **ConTrac on GitHub Pages:**
   - Full control over static files
   - Easy updates
   - No limitations

## ✅ Final Checklist

- [ ] GitHub Pages enabled in repository settings
- [ ] Custom domain added in GitHub Pages settings
- [ ] CNAME file created by GitHub (or manually created)
- [ ] DNS records added at domain registrar
- [ ] DNS propagated (checked with dnschecker.org)
- [ ] SSL certificate issued (check GitHub Pages settings)
- [ ] HTTPS enforced in GitHub Pages settings
- [ ] Site accessible at custom domain
- [ ] Tested updates (push to GitHub, verify changes live)

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [DNS Checker](https://dnschecker.org)
- [GitHub Pages IP Addresses](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)

---

**Your ConTrac website will be live at:** `https://contra.puneethjoseph.in/` (or your chosen domain)

