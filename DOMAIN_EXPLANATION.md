# Understanding Subdomains: contra.puneethjoseph.in

## What is a Subdomain?

A **subdomain** is a prefix added to your main domain. Think of it like this:

- **Main domain**: `puneethjoseph.in` (your root domain)
- **Subdomain**: `contra.puneethjoseph.in` (a part of your domain)

## How Subdomains Work

When you own `puneethjoseph.in`, you automatically own ALL subdomains:
- `www.puneethjoseph.in`
- `contra.puneethjoseph.in`
- `blog.puneethjoseph.in`
- `shop.puneethjoseph.in`
- `anything.puneethjoseph.in`

You can create as many subdomains as you want - they're all part of your domain!

## Why Use a Subdomain?

### Option 1: Subdomain (contra.puneethjoseph.in) - Recommended

**Advantages:**
- ✅ Keeps your main site separate
- ✅ Easy to set up (just one CNAME record)
- ✅ Can have different hosting for each subdomain
- ✅ No risk of breaking your main site
- ✅ Easy to remove later if needed

**Example:**
- Main site: `puneethjoseph.in` → Hosted on Zoho Sites
- ConTrac site: `contra.puneethjoseph.in` → Hosted on GitHub Pages

### Option 2: Root Domain (puneethjoseph.in)

**Disadvantages:**
- ❌ Replaces your main site
- ❌ More complex DNS setup (requires A records)
- ❌ Can't easily have both sites
- ❌ Risk of breaking existing site

**Example:**
- Main site: `puneethjoseph.in` → Would be replaced by GitHub Pages
- This is NOT recommended if you want to keep your main site

## DNS Configuration

### For Subdomain (contra.puneethjoseph.in)

You need to add ONE DNS record:

```
Type: CNAME
Name: contra
Value: YOUR_USERNAME.github.io
TTL: 3600
```

**What this does:**
- When someone visits `contra.puneethjoseph.in`
- DNS looks up the CNAME record
- Finds it points to `YOUR_USERNAME.github.io`
- Sends the visitor to GitHub Pages
- GitHub Pages serves your ConTrac website

### For Root Domain (puneethjoseph.in)

You need to add FOUR A records (not recommended):

```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**This replaces your main site** - not recommended!

## Visual Example

```
puneethjoseph.in (your domain)
│
├── www.puneethjoseph.in → Your main site (Zoho Sites)
├── contra.puneethjoseph.in → ConTrac website (GitHub Pages) ← We want this
├── blog.puneethjoseph.in → Could be a blog (if you create it)
└── shop.puneethjoseph.in → Could be a shop (if you create it)
```

## Zoho Domain DNS Management

Since your domain is registered with Zoho, here's how to add the subdomain:

### Step 1: Access Zoho Domain Management

1. Log in to your Zoho account
2. Go to **Domains** section
3. Find `puneethjoseph.in`
4. Click on it to manage DNS

### Step 2: Add CNAME Record

1. Look for **DNS Records** or **DNS Management**
2. Click **Add Record** or **Create Record**
3. Fill in:
   - **Type**: Select `CNAME`
   - **Name/Host**: Enter `contra` (just the subdomain part)
   - **Value/Target**: Enter `YOUR_USERNAME.github.io` (your GitHub username)
   - **TTL**: `3600` (or leave default)
4. Click **Save** or **Add**

### Step 3: Wait for DNS Propagation

- Usually takes 5 minutes to 2 hours
- Check status at: https://dnschecker.org
- Enter: `contra.puneethjoseph.in`
- Select: `CNAME`
- Click Search
- Wait for all locations to show your GitHub Pages URL

## Summary

**Question:** How can we have `contra.puneethjoseph.in` when the domain is `puneethjoseph.in`?

**Answer:** 
- `contra` is a **subdomain** of `puneethjoseph.in`
- When you own `puneethjoseph.in`, you automatically own all subdomains
- You just need to add a DNS record to point the subdomain to GitHub Pages
- This keeps your main site at `puneethjoseph.in` separate from ConTrac at `contra.puneethjoseph.in`

**Recommended Setup:**
- Main site: `puneethjoseph.in` → Zoho Sites (unchanged)
- ConTrac site: `contra.puneethjoseph.in` → GitHub Pages (new)

This way both sites work independently!

