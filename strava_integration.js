// Strava Data Integration Template
// Use this file to import your Strava activities into the training dashboard

const stravaActivities = [
  // Example format - add your Strava runs here
  // {
  //   "date": "2026-03-10",
  //   "name": "Morning run",
  //   "distance": 8.5,
  //   "elevation_gain": 150,
  //   "type": "Run",
  //   "moving_time_seconds": 3600,
  //   "strava_id": 123456789
  // }
];

// Function to import Strava data and match with training plan
function importStravaData(activities) {
  activities.forEach(activity => {
    if (activity.type === 'Run') {
      completeRun(activity.date);
      console.log(`Imported run from Strava: ${activity.name} on ${activity.date}`);
    }
  });
  
  // Update dashboard after import
  updateStats();
  updateProgressBar();
  updateCountdowns();
  renderWeeklyView();
  renderTableView();
  renderProgressTimeline();
  updateUpcomingRuns();
  
  console.log(`Successfully imported ${activities.length} activities from Strava`);
}

// Function to export current progress for Strava sync
function exportProgressForSync() {
  const completedRuns = [];
  
  getAllRuns().forEach(run => {
    if (run.completed && run.type !== 'rest') {
      completedRuns.push({
        date: run.date,
        name: run.name,
        distance: run.distance,
        elevation: run.elevation,
        type: run.type,
        completed: true
      });
    }
  });
  
  return {
    exportDate: new Date().toISOString(),
    trainingProgram: 'Andorra 80KM Trail Race',
    raceDate: '2026-06-12',
    completedRuns: completedRuns,
    completedCount: completedRuns.length,
    completedKm: getCompletedKm(),
    totalPlanned: calculateTotals().totalKm
  };
}

// How to import your Strava data:
// 
// 1. Go to https://www.strava.com/settings/apps
// 2. Create a new API application
// 3. Get your access token
// 4. Use this sample code to fetch your activities:
//
// const stravaAccessToken = 'YOUR_ACCESS_TOKEN_HERE';
// const athleteId = 'YOUR_ATHLETE_ID';
// 
// fetch(`https://www.strava.com/api/v3/athlete/activities?access_token=${stravaAccessToken}&per_page=200`)
//   .then(response => response.json())
//   .then(activities => {
//     // Filter for runs in your training period (March 10 - June 12, 2026)
//     const trainingRuns = activities.filter(activity => {
//       const activityDate = new Date(activity.start_date);
//       return activity.type === 'Run' && 
//              activityDate >= new Date('2026-03-10') &&
//              activityDate <= new Date('2026-06-12');
//     });
//     
//     // Convert to our format
//     const formattedActivities = trainingRuns.map(activity => ({
//       date: activity.start_date.split('T')[0],
//       name: activity.name,
//       distance: activity.distance / 1000, // Convert meters to km
//       elevation_gain: activity.total_elevation_gain,
//       type: 'Run',
//       moving_time_seconds: activity.moving_time,
//       strava_id: activity.id
//     }));
//     
//     // Import into dashboard
//     importStravaData(formattedActivities);
//   })
//   .catch(error => console.error('Error fetching Strava data:', error));

// ALTERNATIVE: Manual CSV Import
// If you export from Strava, use this format to convert CSV to JSON:
//
// const parseStravaCSV = (csvText) => {
//   const lines = csvText.trim().split('\n');
//   const headers = lines[0].split(',');
//   const activities = [];
//   
//   for (let i = 1; i < lines.length; i++) {
//     const values = lines[i].split(',');
//     const activity = {};
//     headers.forEach((header, index) => {
//       activity[header.trim()] = values[index]?.trim();
//     });
//     activities.push(activity);
//   }
//   
//   return activities;
// };

// Function to sync with LocalStorage for persistence
function saveProgressToLocalStorage() {
  const progress = {
    timestamp: new Date().toISOString(),
    completedRuns: getAllRuns().filter(r => r.completed),
    stats: {
      totalKm: getCompletedKm(),
      totalRuns: getCompletedRunsCount(),
      planTotals: calculateTotals()
    }
  };
  
  localStorage.setItem('andorra_training_progress', JSON.stringify(progress));
  console.log('Progress saved to local storage');
}

// Function to load progress from LocalStorage
function loadProgressFromLocalStorage() {
  const saved = localStorage.getItem('andorra_training_progress');
  if (saved) {
    const progress = JSON.parse(saved);
    console.log('Last save:', progress.timestamp);
    return progress;
  }
  return null;
}

// Auto-save on regular intervals
setInterval(() => {
  saveProgressToLocalStorage();
}, 5 * 60 * 1000); // Every 5 minutes

// Quick start guide for manual Strava import:
// 
// 1. Open this file in your browser's developer console
// 2. Paste your Strava activities array into the stravaActivities variable
// 3. Run: importStravaData(stravaActivities)
// 4. Your dashboard will update automatically!
//
// Example to run manually:
// const myActivities = [
//   { date: "2026-03-10", name: "Easy 8km", distance: 8, elevation_gain: 100, type: "Run" },
//   { date: "2026-03-12", name: "Tempo 7km", distance: 7, elevation_gain: 50, type: "Run" }
// ];
// importStravaData(myActivities);
