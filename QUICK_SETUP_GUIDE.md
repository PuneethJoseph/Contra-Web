# Quick Setup Guide: GitHub Pages + puneethjoseph.in

Step-by-step guide to link your GitHub Pages repository to `puneethjoseph.in`.

## 🎯 Goal

Host ConTrac website at: `https://contra.puneethjoseph.in/` (recommended subdomain)

## ✅ Prerequisites Checklist

- [x] Repository created on GitHub
- [x] Files pushed to GitHub
- [ ] GitHub Pages enabled
- [ ] Custom domain configured
- [ ] DNS records added

## 🚀 Step 1: Enable GitHub Pages

1. **Go to your GitHub repository:**
   - Navigate to: `https://github.com/YOUR_USERNAME/REPO_NAME`
   - Replace `YOUR_USERNAME` and `REPO_NAME` with your actual values

2. **Open Settings:**
   - Click the **"Settings"** tab (top navigation bar)
   - It's the rightmost tab

3. **Go to Pages:**
   - Scroll down in the left sidebar
   - Click on **"Pages"** (under "Code and automation" section)

4. **Configure Source:**
   - Under **"Source"**, select:
     - **Branch**: `main` (or `master` if that's your default branch)
     - **Folder**: `/ (root)` 
   - Click **"Save"**

5. **Wait for deployment:**
   - GitHub will show: "Your site is live at `https://YOUR_USERNAME.github.io/REPO_NAME/`"
   - This may take 1-2 minutes
   - You'll see a green checkmark when ready

6. **Test GitHub Pages URL:**
   - Visit: `https://YOUR_USERNAME.github.io/REPO_NAME/contra/`
   - Should load your ConTrac page
   - If it works, proceed to next step

## 🌐 Step 2: Configure Custom Domain

1. **Still in GitHub Pages Settings:**
   - Scroll to **"Custom domain"** section
   - You'll see a text input field

2. **Enter your domain:**
   - **Recommended:** Enter `contra.puneethjoseph.in` (subdomain)
   - **Alternative:** Enter `www.puneethjoseph.in` (if you prefer www)
   - Click **"Save"**

3. **GitHub will create CNAME file:**
   - GitHub automatically creates a file called `CNAME` in your repository root
   - This file contains your custom domain
   - You'll see it appear in your repository

4. **Verify CNAME file:**
   - Go back to your repository (Code tab)
   - You should see a `CNAME` file in the root
   - It should contain: `contra.puneethjoseph.in` (or your chosen domain)

## 🔧 Step 3: Configure DNS Records (Zoho Domain)

Since your domain `puneethjoseph.in` is registered with Zoho, configure DNS in Zoho's domain management.

### Option A: Subdomain (Recommended - contra.puneethjoseph.in)

**This keeps your main site separate and is easier to set up.**

**Understanding Subdomains:** See `DOMAIN_EXPLANATION.md` for detailed explanation of how subdomains work.

1. **Log in to Zoho:**
   - Go to: https://www.zoho.com
   - Log in with your account
   - Navigate to **Domains** section

2. **Find Your Domain:**
   - Look for `puneethjoseph.in` in your domain list
   - Click on it to manage DNS settings

3. **Access DNS Management:**
   - Look for **DNS Records** or **DNS Management** option
   - Click to view/edit DNS records

4. **Add CNAME Record:**
   - Click **Add Record** or **Create Record**
   - **Type**: Select `CNAME`
   - **Name/Host**: Enter `contra` (just the subdomain part, without the domain)
   - **Value/Target**: Enter `YOUR_USERNAME.github.io` (replace with your GitHub username)
   - **TTL**: `3600` (or leave default)
   - Click **Save** or **Add**

5. **Example:**
   ```
   Type: CNAME
   Name: contra
   Value: PuneethJoseph.github.io
   TTL: 3600
   ```

6. **Result:**
   - After DNS propagates, `contra.puneethjoseph.in` will point to GitHub Pages
   - Your main site at `puneethjoseph.in` remains unchanged on Zoho Sites
   - Both sites work independently!

### Option B: www Subdomain (www.puneethjoseph.in)

If you prefer `www`:

1. **In GitHub Pages Settings:**
   - Enter: `www.puneethjoseph.in` in custom domain field

2. **Add CNAME Record:**
   - **Type**: `CNAME`
   - **Name**: `www`
   - **Value**: `YOUR_USERNAME.github.io`
   - **TTL**: `3600`

### Option C: Root Domain (puneethjoseph.in)

**⚠️ Warning:** This replaces your main site. Only use if you want ConTrac to be your homepage.

1. **In GitHub Pages Settings:**
   - Enter: `puneethjoseph.in` in custom domain field

2. **Add A Records (4 records needed):**
   - **Type**: `A`
   - **Name**: `@` (or leave blank)
   - **Value**: `185.199.108.153` (first IP)
   - **TTL**: `3600`
   - Repeat for all 4 IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

3. **Add CNAME for www:**
   - **Type**: `CNAME`
   - **Name**: `www`
   - **Value**: `YOUR_USERNAME.github.io`

**Note:** Verify current GitHub Pages IPs at: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain

## ⏱️ Step 4: Wait for DNS Propagation

1. **DNS Propagation Time:**
   - Usually takes 5 minutes to 2 hours
   - Can take up to 48 hours (rare)
   - Most changes happen within 30-60 minutes

2. **Check DNS Status:**
   - Visit: https://dnschecker.org
   - Enter: `contra.puneethjoseph.in` (or your chosen domain)
   - Select record type: `CNAME`
   - Click "Search"
   - Wait for all locations to show your GitHub Pages URL

3. **Verify with Command Line:**
   ```bash
   # Check CNAME record
   dig contra.puneethjoseph.in CNAME
   
   # Should show: YOUR_USERNAME.github.io
   ```

## 🔒 Step 5: Enable HTTPS (Automatic)

1. **GitHub automatically provisions SSL:**
   - Once DNS propagates, GitHub detects your domain
   - SSL certificate is automatically issued
   - This can take 1-24 hours

2. **Check SSL Status:**
   - Go back to GitHub Pages Settings
   - Under "Custom domain", you'll see:
     - "Certificate is being provisioned" (waiting)
     - "Certificate is ready" (active)

3. **Enforce HTTPS:**
   - Once certificate is ready, check **"Enforce HTTPS"** checkbox
   - This redirects HTTP to HTTPS automatically
   - Click "Save"

## ✅ Step 6: Test Your Site

1. **Test Custom Domain:**
   - Visit: `https://contra.puneethjoseph.in/` (or your chosen domain)
   - Should load your ConTrac page
   - Check for HTTPS (lock icon in browser)

2. **Verify All Files Load:**
   - Open Developer Tools (F12)
   - Go to "Network" tab
   - Reload page
   - Check that `contra.css` and `contra.js` load with status 200

3. **Test on Different Devices:**
   - Try on mobile
   - Try on different browsers
   - Verify responsive design works

## 🔄 Step 7: Update Main Site (Optional)

If you want to add a link to ConTrac on your main `puneethjoseph.in` site:

1. **Edit your main site** (on Zoho Sites or wherever it's hosted)
2. **Add navigation link:**
   ```html
   <a href="https://contra.puneethjoseph.in">ConTrac</a>
   ```
3. **Or add a button:**
   ```html
   <a href="https://contra.puneethjoseph.in" class="btn">Learn More About ConTrac</a>
   ```

## 📝 Quick Reference

### GitHub Pages Settings
- **Source**: Branch `main`, Folder `/ (root)`
- **Custom domain**: `contra.puneethjoseph.in`
- **HTTPS**: Enabled (after certificate is ready)

### DNS Record (at domain registrar)
- **Type**: CNAME
- **Name**: `contra`
- **Value**: `YOUR_USERNAME.github.io`
- **TTL**: 3600

### URLs
- **GitHub Pages**: `https://YOUR_USERNAME.github.io/REPO_NAME/contra/`
- **Custom Domain**: `https://contra.puneethjoseph.in/`

## 🐛 Troubleshooting

### Issue: GitHub Pages not showing site

**Solution:**
1. Check branch is `main` (or `master`)
2. Verify folder is `/ (root)`
3. Check repository is public (or you have GitHub Pro)
4. Wait 2-3 minutes for initial deployment
5. Check "Actions" tab for deployment errors

### Issue: DNS not working

**Solution:**
1. Verify CNAME record is correct
2. Check value points to `YOUR_USERNAME.github.io` (not repository URL)
3. Wait longer (can take up to 48 hours)
4. Check with: https://dnschecker.org
5. Verify no typos in DNS record

### Issue: SSL certificate not issuing

**Solution:**
1. Verify DNS is fully propagated (check all locations on dnschecker.org)
2. Wait 24 hours (GitHub needs time)
3. Check GitHub Pages settings for error messages
4. Try removing and re-adding custom domain
5. Ensure CNAME file exists in repository

### Issue: Site shows 404

**Solution:**
1. Check file structure - files should be in `contra/` folder
2. Verify `index.html` exists in `contra/` folder
3. Check GitHub Pages folder setting matches your structure
4. Try accessing: `https://YOUR_USERNAME.github.io/REPO_NAME/contra/`

## ✅ Final Checklist

- [ ] GitHub Pages enabled (Settings → Pages)
- [ ] Source set to branch `main`, folder `/ (root)`
- [ ] Custom domain added in GitHub Pages settings
- [ ] CNAME file created in repository (check repository root)
- [ ] DNS CNAME record added at domain registrar
- [ ] DNS propagated (checked with dnschecker.org)
- [ ] SSL certificate issued (check GitHub Pages settings)
- [ ] HTTPS enforced (checkbox checked)
- [ ] Site accessible at custom domain
- [ ] All files load correctly (check browser console)
- [ ] Tested on mobile and desktop

## 🎉 You're Done!

Your ConTrac website is now live at: `https://contra.puneethjoseph.in/`

**To update your site in the future:**
```bash
cd /Users/puneeth_macstudio/Train/Working/ForMac/contra-website
# Make changes to files
git add .
git commit -m "Update website"
git push origin main
# Changes go live automatically in 1-2 minutes!
```

---

**Need help?** Check the detailed guide: `GITHUB_PAGES_DOMAIN_SETUP.md`

