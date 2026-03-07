# 🏔️ Andorra 80KM Trail Race - Training Dashboard

> Interactive training dashboard for the **Trail 100 Andorra by UTMB** 80KM trail race on **June 12, 2026**

[![Deploy on Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/simonherbert30/Andorra_100)

## 📊 Overview

A comprehensive 14-week training program with an interactive web dashboard to track progress toward completing an 80KM trail race with 3,900m elevation gain in the Pyrenees mountains of Andorra.

**Training Totals:**
- 📈 1,200 km of planned training
- ⛰️ 40,700m+ of elevation gain
- 🏃 68 running sessions
- 📅 14-week progressive program
- 🎯 Peak weeks: 65 km/week

## ✨ Features

- **Interactive Dashboard** - Real-time progress tracking with visual progress bar
- **14-Week Training Plan** - Progressive build → peak → taper strategy
- **Smart Run Distribution** - Trail runs Friday-Sunday, road runs Mon-Thursday
- **Live Countdowns** - Days and runs remaining until race day
- **Progress Tracking** - Check off completed runs, automatic stat updates
- **Multiple Views** - Weekly view and table view for different planning needs
- **Strava Integration** - Ready to sync with Strava for automatic tracking
- **Export Capability** - Download your training plan as JSON
- **Professional Branding** - Uses official UTMB Andorra design elements
- **Responsive Design** - Works on desktop, tablet, and mobile

## 🚀 Quick Start

### Local Development

```bash
# Clone the repository
git clone https://github.com/simonherbert30/Andorra_100.git
cd Andorra_100

# Install dependencies
npm install

# Start the development server
npm start

# Open your browser to http://localhost:3000
```

### View the Dashboard

- **Start Here:** http://localhost:3000/
- **Training Dashboard:** http://localhost:3000/dashboard
- **Documentation:** http://localhost:3000/readme

## 📁 Project Structure

```
Andorra_100/
├── index.html                    # Main interactive dashboard
├── START_HERE.html               # Quick start guide
├── README.md                     # Full documentation
├── training_plan.js              # 14-week training data & functions
├── training_reference.json       # Quick reference guide (paces, nutrition, etc.)
├── strava_integration.js         # Strava sync template
├── server.js                     # Node.js/Express server
├── package.json                  # Dependencies
├── render.yaml                   # Render deployment config
├── Start_Training_Andorra_100.png# Initial training runs image
└── .gitignore                    # Git configuration
```

## 🗓️ Training Program

### Phase Breakdown

| Phase | Weeks | Weekly Km | Focus |
|-------|-------|-----------|-------|
| **Base Building** | 1-4 | 30-42 | Consistency, aerobic base |
| **Volume Building** | 5-8 | 50-65 | Maximum training load |
| **Maintenance** | 9-10 | 55-60 | Intensity over volume |
| **Taper** | 11-13 | 25-50 | Recovery, freshness |
| **Race Week** | 14 | 80 | RACE DAY: June 12, 2026 |

### Run Distribution

- **Trail/Elevation Runs:** Friday-Sunday (8-24 km with 300-1,100m elevation)
- **Road Runs:** Monday-Thursday (5-11 km, minimal elevation)
- **Max 4 runs per week**
- **Mix of:** Long runs, tempo work, recovery runs, intensity sessions

## 📖 Key Documentation

### Pace Guidelines

- **Easy Run:** 6:30-7:30/km
- **Tempo Run:** 6:00-6:30/km
- **Long Trail Run:** 7:00-7:30/km
- **Recovery Run:** 7:30-8:30/km
- **Race Target:** 10:00-11:00/km

### Race Information

**Trail 100 Andorra by UTMB - 80KM**
- **Date:** June 12, 2026
- **Distance:** 80 km
- **Elevation:** 3,900m+
- **Location:** Andorra, Pyrenees
- **Official Site:** https://andorra.utmb.world/

## 🎗️ Strava Integration

Connect your Strava account to automatically sync completed runs:

1. Click "Connect Strava Account" in the dashboard
2. Authorize access to your Strava data
3. Completed runs will sync automatically
4. Or manually mark runs complete using checkboxes

## 📊 Track Your Progress

- **Green Progress Bar:** Fills as you complete runs (100% = race finish)
- **Live Statistics:** Completed km, runs remaining, pace tracking
- **Weekly Breakdown:** See each week's target and your progress
- **Filters:** View by week, run type, or completion status
- **Export:** Download your plan as JSON backup

## 🛠️ Technology Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Backend:** Node.js, Express.js
- **Deployment:** Render (free tier)
- **Data:** JSON (client-side storage with browser LocalStorage)

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (responsive design)

## 🚀 Deployment on Render

### One-Click Deploy

[![Deploy on Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/simonherbert30/Andorra_100)

### Manual Deploy

1. Sign up for free at [render.com](https://render.com)
2. Create new Web Service
3. Connect your GitHub repository
4. Select this repository
5. Render will auto-detect `render.yaml`
6. Click Deploy

Your dashboard will be live at: `https://andorra-80km-training.onrender.com/`

## 💡 Tips for Success

### Nutrition Strategy
- Easy runs: Normal meal + hydrate
- Long runs <2h: Water + electrolytes
- Long runs >2h: Gels/food every 30-45 min
- Recovery: High protein meal within 30 min

### Injury Prevention
- Never increase weekly mileage >10%
- Include 1-2 strength sessions/week
- Core work 3x per week (planks, dead bugs)
- Foam roll daily (10-15 min)
- Sleep 7-9 hours per night
- Take 1 complete rest day per week

### Equipment Essentials
- Trail running shoes (tested)
- Running pack (8-10L)
- Hydration bottles/bladder
- Sun protection (hat/visor)
- Technical clothing
- Headlamp (for early runs)

## 🎯 Monthly Goals

| Month | Weeks | Target Km | Focus |
|-------|-------|-----------|-------|
| **March** | 3 | 105 | Base establishment |
| **April** | 4 | 187 | Volume building |
| **May** | 4 | 230 | Peak training |
| **June** | 2+race | 65+80 | Taper + race |

## 📞 Support

- **Official Race:** [Trail 100 Andorra](https://andorra.utmb.world/)
- **UTMB World:** [utmb.world](https://utmb.world/)
- **Strava:** [strava.com](https://www.strava.com/)
- **Issues:** Create a GitHub issue in this repository

## 📝 License

MIT License - Feel free to fork, modify, and use this training program template for your own races.

## 🏁 Let's Go!

Your training starts **Monday, March 10, 2026**. The Pyrenees are waiting. Follow the plan, trust the process, and on **June 12, 2026**, you'll be ready to conquer the mountains of Andorra!

**Race day target: Complete 80km with 3,900m elevation in ~13-14 hours** 🏔️

---

Made with ❤️ for trail running by [Simon Herbert](https://github.com/simonherbert30)

**Last Updated:** March 7, 2026
**Next Update:** Start your first run on March 10!
