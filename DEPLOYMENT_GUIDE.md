# 📤 Deployment Guide - GitHub & Render

Your Andorra 80KM Training Dashboard is ready to deploy! Follow these steps to get it live.

## 🔧 Step 1: Create GitHub Personal Access Token

1. Go to https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Give it a name: `Andorra-Training-Deploy`
4. Select scopes:
   - ✅ `repo` (full control of private repositories)
   - ✅ `workflow` (update GitHub Actions workflows)
5. Click **"Generate token"**
6. **COPY the token** (you won't see it again!)
7. Keep it safe - you'll use it in the next step

## 🚀 Step 2: Create GitHub Repository

### Option A: Manual (Recommended for First Time)

1. Go to https://github.com/new
2. **Repository name:** `Andorra_100`
3. **Description:** Interactive training dashboard for Andorra 80KM Trail Race by UTMB
4. **Visibility:** Public (so Render can access it)
5. **Initialize repository:** Leave unchecked
6. Click **"Create repository"**

### Option B: GitHub CLI (If installed)
```bash
gh repo create Andorra_100 --public --source=. --remote=origin --push
```

## 📤 Step 3: Push Your Code to GitHub

Replace `YOUR_GITHUB_TOKEN` with the token you created in Step 1, and run these commands in PowerShell:

```powershell
cd "C:\Users\simon\OneDrive\Bureaublad\Andorra 100 App"

# Set the remote (replace simonherbert30 with your username and PASTE your token when prompted)
git remote add origin https://github.com/simonherbert30/Andorra_100.git

# Push to GitHub (when prompted, use token as password)
git branch -M main
git push -u origin main
```

When prompted for a password, **paste your GitHub token** instead.

## 🌐 Step 4: Deploy to Render

### Option A: One-Click Deploy (Easiest)

1. Click this button: https://render.com/deploy?repo=https://github.com/simonherbert30/Andorra_100

2. If prompted, sign in with GitHub
3. Authorize Render to access your repositories
4. Review settings and click **"Deploy"**
5. Wait 2-3 minutes for deployment ✨

### Option B: Manual Render Setup

1. Sign up for free at https://render.com (use GitHub to sign in)
2. Click **"New +"** → **"Web Service"**
3. Click **"Connect Account"** (GitHub)
4. Authorize Render
5. Find and select **`Andorra_100`** repository
6. Configure:
   - **Name:** `andorra-80km-training`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** Free
7. Click **"Create Web Service"**
8. Wait for deployment (2-3 minutes)

## ✅ Verify Your Deployment

Once deployed, Render will give you a URL like:
```
https://andorra-80km-training.onrender.com
```

Visit this URL and you should see your training dashboard!

## 🔄 Update Your Live Site

After making changes locally:

```powershell
cd "C:\Users\simon\OneDrive\Bureaublad\Andorra 100 App"

# Make your changes and commit
git add .
git commit -m "Update: description of changes"

# Push to GitHub
git push origin main
```

Render will automatically deploy your changes within a few minutes.

## 📋 Deployment Checklist

- [ ] Created GitHub personal access token
- [ ] Created GitHub repository (Andorra_100)
- [ ] Pushed local code to GitHub (`git push -u origin main`)
- [ ] Signed up for Render (free tier)
- [ ] Connected Render to GitHub
- [ ] Deployed the repository
- [ ] Verified dashboard is live at Render URL
- [ ] Tested progress tracking functionality

## 🆘 Troubleshooting

### "fatal: not a git repository"
Make sure you're in the correct directory:
```powershell
cd "C:\Users\simon\OneDrive\Bureaublad\Andorra 100 App"
```

### "Repository not found" error on Render
- Check repository name matches exactly
- Ensure repository is PUBLIC (not private)
- Verify GitHub token has correct permissions
- Try disconnecting and reconnecting GitHub in Render settings

### Render deployment fails
- Check build logs on Render dashboard
- Verify `package.json` and `server.js` exist
- Ensure `npm install` can run without errors
- Check Node version compatibility (should be 18.x)

### Changes not appearing live
- Your commit must be pushed to GitHub's `main` branch
- Render may take 2-5 minutes to rebuild
- Hard refresh your browser (Ctrl+Shift+R)

## 🎯 Next Steps After Deployment

1. Share your live dashboard URL with others
2. Start tracking runs
3. Connect your Strava account (within dashboard)
4. Make commits for each new feature or update

## 📊 Your Live Dashboard Will Include

✅ Interactive training dashboard  
✅ 14-week training plan with all 68 runs  
✅ Progress bar that fills as you complete runs  
✅ Live countdowns (days/runs to race)  
✅ Weekly and table view of all runs  
✅ Strava integration ready  
✅ Export training plan option  
✅ Full responsive design  
✅ Professional UTMB branding  

## 🏁 Final Notes

- Your training data is stored in your browser (LocalStorage)
- No database needed - it's a static site with Node.js server
- Render's free tier has some limitations but perfect for this project
- You can upgrade anytime if needed

## 📞 Get Help

- **GitHub Issues:** Create an issue in your repository
- **Render Status:** Check https://status.render.com/
- **Express.js Docs:** https://expressjs.com/
- **Render Docs:** https://render.com/docs/

---

Good luck with your deployment! Your Andorra 80KM training dashboard will soon be live! 🚀🏔️

**Questions? Check the README.md in the repository for more info about the training program itself.**
