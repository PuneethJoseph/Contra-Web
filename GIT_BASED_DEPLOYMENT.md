# Git-based Website Deployment (2026) — Recommended Setup

This guide replaces Zoho Sites manual uploads with a Git-based workflow: commit → push → automatic deploy.

## Recommended hosting (best defaults)

### Option A (recommended): GitHub Pages
- **Free** for public repositories
- **Simple setup**: Just enable in repository settings
- **Automatic HTTPS**: Free SSL certificate
- **Custom domain support**: Can use your own domain (e.g., `puneethjoseph.in`)
- **No build step required**: Works perfectly with plain HTML/CSS/JS
- **Automatic deployment**: Every push to main branch auto-deploys
- **Perfect for static sites**: Ideal for ConTrac website

### Option B: Cloudflare Pages
- Great for static sites, free SSL, simple custom domains, strong CDN.
- Works well with plain HTML/CSS/JS (no build step required).

### Option C: Netlify
- Similar to Cloudflare Pages; great DX and forms/features.

### Option D: Vercel
- Best if you later move to Next.js / SSR.

## Repository layout (simple static)

Create a dedicated repo for your personal site (recommended), e.g. `puneethjoseph.in-site/`:

```
repo-root/
├── index.html
├── Contra/
│   ├── index.html
│   ├── contra.css
│   └── contra.js
└── assets/ (optional)
```

Notes:
- Keep `Contra/` capitalized only if you want the URL to be `/Contra/...`. Prefer lowercase `contra/` on Git-based hosts.
- On Git-based hosts, `/contra/` will work normally (no Zoho routing quirks).

## GitHub Pages Setup (Recommended)

### Step 1: Prepare Your Repository

1. **Create a repository** (if you don't have one):
   ```bash
   # Create a new repo on GitHub (e.g., puneethjoseph.in-site)
   # Or use an existing repository
   ```

2. **Organize your files**:
   ```
   repo-root/
   ├── index.html          # Your main homepage (optional)
   ├── contra/
   │   ├── index.html      # ConTrac page (rename from contra.html)
   │   ├── contra.css      # Stylesheet
   │   └── contra.js       # JavaScript
   └── README.md
   ```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select:
   - **Branch**: `main` (or `master`)
   - **Folder**: `/ (root)` or `/docs` if you put files in a docs folder
4. Click **Save**
5. GitHub will provide a URL like: `https://yourusername.github.io/repo-name/`

### Step 3: Configure Custom Domain (Optional)

If you want to use `puneethjoseph.in`:

1. In GitHub Pages settings, enter your custom domain: `puneethjoseph.in`
2. Add a `CNAME` file to your repository root:
   ```
   puneethjoseph.in
   www.puneethjoseph.in
   ```
3. Update your DNS records:
   - Add a `CNAME` record: `www` → `yourusername.github.io`
   - Add an `A` record: `@` → GitHub Pages IP addresses (see GitHub docs for current IPs)
4. Wait for DNS propagation (can take up to 48 hours, usually much faster)

### Step 4: Deploy

1. **Commit and push your files**:
   ```bash
   git add .
   git commit -m "Add ConTrac website"
   git push origin main
   ```

2. **GitHub automatically deploys** (takes 1-2 minutes)

3. **Check deployment status**:
   - Go to **Actions** tab in your repository
   - You'll see deployment status and logs

### Step 5: Access Your Site

- **GitHub Pages URL**: `https://yourusername.github.io/repo-name/`
- **ConTrac page**: `https://yourusername.github.io/repo-name/contra/`
- **Custom domain** (if configured): `https://www.puneethjoseph.in/contra/`

### Important Notes for GitHub Pages

- **File naming**: Use lowercase for folders (`contra/` not `Contra/`)
- **Case sensitivity**: GitHub Pages URLs are case-sensitive
- **Jekyll**: GitHub Pages uses Jekyll by default. To disable (for plain HTML):
  - Add a `.nojekyll` file to your repository root
  - Or add `_config.yml` with `theme: null`
- **HTTPS**: Automatically enabled (free SSL)
- **Build time**: Usually 1-2 minutes after push

## Cloudflare Pages setup (Alternative)

1. Push your website repo to GitHub.
2. Cloudflare Dashboard → **Workers & Pages** → **Create application** → **Pages**.
3. **Connect to Git** → select the repo.
4. **Framework preset**: "None".
5. **Build command**: (leave empty)
6. **Build output directory**: `/` (root)
7. Deploy.

## Custom domain (use your existing domain)

1. Cloudflare Pages project → **Custom domains**.
2. Add:
   - `www.puneethjoseph.in`
   - `puneethjoseph.in`
3. Follow Cloudflare’s DNS instructions (CNAME/A records).
4. Enable “Always Use HTTPS” (optional, recommended).

## Clean URLs

If you name your ConTrac folder `contra/` and file `contra/index.html`, then:
- `https://www.puneethjoseph.in/contra/` works automatically.

## Updating content

### GitHub Pages Workflow:
1. Edit files locally in your repository
2. `git add .`
3. `git commit -am "Update ConTrac website"`
4. `git push origin main`
5. GitHub Pages auto-deploys in ~1-2 minutes
6. Check deployment status in **Actions** tab

### Other Hosts Workflow:
1. Edit files locally.
2. `git commit -am "Update homepage + Contra"`
3. `git push`
4. Hosting auto-deploys in ~30–90 seconds.

## GitHub Pages Quick Start Checklist

- [ ] Repository created on GitHub
- [ ] Files organized in repository (contra/ folder with index.html, contra.css, contra.js)
- [ ] GitHub Pages enabled in repository Settings → Pages
- [ ] Branch selected (main or master)
- [ ] `.nojekyll` file added to root (if using plain HTML)
- [ ] Files committed and pushed to repository
- [ ] Deployment verified in Actions tab
- [ ] Site accessible at GitHub Pages URL
- [ ] Custom domain configured (optional)

## Troubleshooting GitHub Pages

### Site not updating?
- Check **Actions** tab for deployment errors
- Ensure files are in the correct branch (main/master)
- Clear browser cache (hard refresh: Cmd+Shift+R / Ctrl+Shift+R)
- Wait 2-3 minutes for deployment to complete

### 404 errors?
- Check file paths are correct (case-sensitive)
- Ensure `index.html` is in the correct folder
- Verify GitHub Pages is enabled and pointing to correct branch

### Custom domain not working?
- Verify DNS records are correct
- Check CNAME file exists in repository root
- Wait for DNS propagation (can take up to 48 hours)

## Optional: "Dynamic" updates without a backend

If you want to update content without code deploys:
- Use a headless CMS (Sanity/Contentful) + webhooks to trigger deploy, or
- Use Markdown content + a generator (Astro) to simplify editing.


