// Andorra 80KM Training Plan
// Starting: March 10, 2026
// Race Day: June 12, 2026

const trainingPlan = {
  raceDate: new Date(2026, 5, 12), // June 12, 2026
  raceName: "Trail 100 Andorra by UTMB - 80KM",
  raceDistance: 80,
  raceElevation: 3900,
  
  weeks: [
    // imported prior training from PNG
    {
      weekNumber: -4,
      startDate: "2026-02-02",
      endDate: "2026-02-08",
      weeklyKm: 25.39,
      elevation: 92,
      focus: "Prior Training",
      color: "#9b59b6",
      runs: [
        { date: "2026-02-02", dayName: "Monday", name: "Easy Run", distance: 10, elevation: 0, type: "road", pace: "6:30-7:00/km", details: "Easy loosener", location: "City run", completed: true },
        { date: "2026-02-04", dayName: "Wednesday", name: "Easy Run", distance: 4.9, elevation: 0, type: "road", pace: "6:30-7:00/km", details: "Recovery pace", location: "City run", completed: true },
        { date: "2026-02-08", dayName: "Sunday", name: "Long Run", distance: 8.4, elevation: 92, type: "trail", pace: "6:30-7:00/km", details: "Steady pace with rolling hills", location: "Local trails", completed: true }
      ]
    },
    {
      weekNumber: -3,
      startDate: "2026-02-09",
      endDate: "2026-02-15",
      weeklyKm: 24.39,
      elevation: 239,
      focus: "Prior Training",
      color: "#9b59b6",
      runs: [
        { date: "2026-02-09", dayName: "Monday", name: "Easy Run", distance: 4, elevation: 0, type: "road", pace: "6:30-7:00/km", details: "Recovery run", location: "City run", completed: true },
        { date: "2026-02-11", dayName: "Wednesday", name: "Easy Run", distance: 5.9, elevation: 0, type: "road", pace: "6:30-7:00/km", details: "Steady run", location: "City run", completed: true },
        { date: "2026-02-13", dayName: "Friday", name: "Easy Run", distance: 4.5, elevation: 0, type: "road", pace: "6:30-7:00/km", details: "Tempo pace", location: "City run", completed: true },
        { date: "2026-02-15", dayName: "Saturday", name: "Trail Run", distance: 9.8, elevation: 239, type: "trail", pace: "6:30-7:00/km", details: "Hill repeats on trails", location: "Local elevation trails", completed: true }
      ]
    },
    {
      weekNumber: -2,
      startDate: "2026-02-16",
      endDate: "2026-02-22",
      weeklyKm: 29.46,
      elevation: 442,
      focus: "Prior Training",
      color: "#9b59b6",
      runs: [
        { date: "2026-02-16", dayName: "Monday", name: "Easy Run", distance: 4.3, elevation: 0, type: "road", pace: "6:30-7:00/km", details: "Recovery pace", location: "City run", completed: true },
        { date: "2026-02-18", dayName: "Wednesday", name: "Easy Run", distance: 5.7, elevation: 0, type: "road", pace: "6:30-7:00/km", details: "Steady run", location: "City run", completed: true },
        { date: "2026-02-20", dayName: "Friday", name: "Easy Run", distance: 6, elevation: 0, type: "road", pace: "6:30-7:00/km", details: "Running economy", location: "City run", completed: true },
        { date: "2026-02-22", dayName: "Sunday", name: "Long Trail Run", distance: 13.3, elevation: 442, type: "trail", pace: "7:00-7:30/km", details: "Elevation practice - steady climbs", location: "Mountain trails", completed: true }
      ]
    },
    {
      weekNumber: -1,
      startDate: "2026-02-23",
      endDate: "2026-03-01",
      weeklyKm: 30.56,
      elevation: 150,
      focus: "Prior Training",
      color: "#9b59b6",
      runs: [
        { date: "2026-02-23", dayName: "Monday", name: "Easy Run", distance: 6.9, elevation: 0, type: "road", pace: "6:30-7:00/km", details: "Recovery run", location: "City run", completed: true },
        { date: "2026-02-25", dayName: "Wednesday", name: "Easy Run", distance: 5.3, elevation: 0, type: "road", pace: "6:30-7:00/km", details: "Steady pace", location: "City run", completed: true },
        { date: "2026-02-28", dayName: "Saturday", name: "Easy Run", distance: 9, elevation: 0, type: "road", pace: "6:30-7:00/km", details: "Long easy", location: "City run", completed: true },
        { date: "2026-03-01", dayName: "Sunday", name: "Trail Run", distance: 9.2, elevation: 150, type: "trail", pace: "6:30-7:00/km", details: "Gentle elevation", location: "Local trails", completed: true }
      ]
    },
    {
      weekNumber: 0,
      startDate: "2026-03-02",
      endDate: "2026-03-08",
      weeklyKm: 24.5,
      elevation: 278,
      focus: "Prior Training",
      color: "#9b59b6",
      runs: [
        { date: "2026-03-03", dayName: "Tuesday", name: "Easy Run", distance: 5.9, elevation: 0, type: "road", pace: "6:30-7:00/km", details: "Recovery run", location: "City run", completed: true },
        { date: "2026-03-05", dayName: "Thursday", name: "Easy Run", distance: 4.9, elevation: 0, type: "road", pace: "6:30-7:00/km", details: "Easy pace", location: "City run", completed: true },
        { date: "2026-03-07", dayName: "Saturday", name: "Trail Run", distance: 4, elevation: 78, type: "trail", pace: "6:30-7:00/km", details: "Short trail", location: "Local trails", completed: true },
        { date: "2026-03-08", dayName: "Sunday", name: "Long Run", distance: 9.7, elevation: 200, type: "trail", pace: "6:30-7:00/km", details: "Extended trail run", location: "Local trails", completed: true }
      ]
    },
    {
      weekNumber: 1,
      startDate: "2026-03-09",
      endDate: "2026-03-15",
      weeklyKm: 30,
      elevation: 500,
      focus: "Base Building",
      color: "#3498db",
      runs: [
        {
          date: "2026-03-09",
          dayName: "Monday",
          name: "Easy Run",
          distance: 8,
          elevation: 0,
          type: "road",
          pace: "6:30-7:00/km",
          details: "Aerobic base - easy conversational pace",
          location: "City circuit",
          completed: false
        },
        {
          date: "2026-03-11",
          dayName: "Wednesday",
          name: "Easy Run",
          distance: 7,
          elevation: 0,
          type: "road",
          pace: "6:30-7:00/km",
          details: "Recovery pace - focus on form",
          location: "City run",
          completed: false
        },
        {
          date: "2026-03-14",
          dayName: "Saturday",
          name: "Trail Run with Elevation",
          distance: 8,
          elevation: 300,
          type: "trail",
          pace: "7:00-7:30/km",
          details: "Elevation practice - steady on climbs",
          location: "Mountain trails - local range",
          completed: false
        },
        {
          date: "2026-03-15",
          dayName: "Sunday",
          name: "Recovery Run",
          distance: 7,
          elevation: 200,
          type: "trail",
          pace: "7:30-8:00/km",
          details: "Post-long run recovery - slow and easy",
          location: "Forest trails",
          completed: false
        }
      ]
    },
    {
      weekNumber: 2,
      startDate: "2026-03-16",
      endDate: "2026-03-22",
      weeklyKm: 35,
      elevation: 650,
      focus: "Building Consistency",
      color: "#3498db",
      runs: [
        {
          date: "2026-03-16",
          dayName: "Monday",
          name: "Easy Run",
          distance: 8,
          elevation: 0,
          type: "road",
          pace: "6:30-7:00/km",
          details: "Base building - conversational pace",
          location: "City run",
          completed: false
        },
        {
          date: "2026-03-18",
          dayName: "Wednesday",
          name: "Tempo Run",
          distance: 8,
          elevation: 0,
          type: "road",
          pace: "6:00-6:30/km",
          details: "Threshold work - comfortably hard effort",
          location: "City tempo route",
          completed: false
        },
        {
          date: "2026-03-21",
          dayName: "Saturday",
          name: "Trail Run with Elevation",
          distance: 10,
          elevation: 400,
          type: "trail",
          pace: "7:00-7:30/km",
          details: "Hill repeats on trail - focus on power",
          location: "Mountain trails",
          completed: false
        },
        {
          date: "2026-03-22",
          dayName: "Sunday",
          name: "Easy Recovery Run",
          distance: 9,
          elevation: 250,
          type: "trail",
          pace: "7:30-8:00/km",
          details: "Low intensity - active recovery",
          location: "Easy trail loops",
          completed: false
        }
      ]
    },
    {
      weekNumber: 3,
      startDate: "2026-03-23",
      endDate: "2026-03-29",
      weeklyKm: 40,
      elevation: 800,
      focus: "Volume Increase",
      color: "#3498db",
      runs: [
        { date: "2026-03-23", dayName: "Monday", name: "Easy Run", distance: 9, elevation: 0, type: "road", pace: "6:30-7:00/km", details: "Base building", location: "City run", completed: false },
        { date: "2026-03-25", dayName: "Wednesday", name: "Intervals", distance: 8, elevation: 0, type: "road", pace: "5:45-6:15/km", details: "4x 1km hard with recovery", location: "Track/flat route", completed: false },
        { date: "2026-03-28", dayName: "Saturday", name: "Long Trail Run", distance: 12, elevation: 500, type: "trail", pace: "7:00-7:30/km", details: "Build endurance - focus on elevation", location: "Mountain trails", completed: false },
        { date: "2026-03-29", dayName: "Sunday", name: "Recovery Run", distance: 11, elevation: 300, type: "trail", pace: "7:30-8:00/km", details: "Easy - active recovery", location: "Forest trails", completed: false }
      ]
    },
    {
      weekNumber: 4,
      startDate: "2026-03-30",
      endDate: "2026-04-05",
      weeklyKm: 42,
      elevation: 950,
      focus: "Building Strength",
      color: "#3498db",
      runs: [
        { date: "2026-03-30", dayName: "Monday", name: "Easy Run", distance: 9, elevation: 0, type: "road", pace: "6:30-7:00/km", details: "Recovery pace", location: "City loop", completed: false },
        { date: "2026-04-01", dayName: "Wednesday", name: "Hill Repeats  (Road)", distance: 8, elevation: 0, type: "road", pace: "5:45-6:15/km", details: "VO2 max work - 6x 3min hard on hills", location: "Hill repeats route", completed: false },
        { date: "2026-04-04", dayName: "Saturday", name: "Long Trail Run", distance: 14, elevation: 600, type: "trail", pace: "7:00-7:30/km", details: "Long distance with progressive elevation", location: "Mountain range", completed: false },
        { date: "2026-04-05", dayName: "Sunday", name: "Hiking Expedition", distance: 11, elevation: 350, type: "hike", pace: "Steady", details: "Cross-training with elevation - benefits leg strength", location: "High altitude trail", completed: false }
      ]
    },
    {
      weekNumber: 5,
      startDate: "2026-04-06",
      endDate: "2026-04-12",
      weeklyKm: 50,
      elevation: 1100,
      focus: "Volume Building Phase",
      color: "#2ecc71",
      runs: [
        { date: "2026-04-06", dayName: "Monday", name: "Easy Run", distance: 10, elevation: 0, type: "road", pace: "6:30-7:00/km", details: "Aerobic base", location: "City run", completed: false },
        { date: "2026-04-08", dayName: "Wednesday", name: "Tempo Run", distance: 9, elevation: 0, type: "road", pace: "6:00-6:30/km", details: "Threshold - 20min at tempo pace", location: "Tempo route", completed: false },
        { date: "2026-04-11", dayName: "Saturday", name: "Long Trail Run", distance: 16, elevation: 700, type: "trail", pace: "7:00-7:30/km", details: "Extended time on feet - varied terrain", location: "Complex mountain trails", completed: false },
        { date: "2026-04-12", dayName: "Sunday", name: "Trail Recovery", distance: 15, elevation: 400, type: "trail", pace: "7:30-8:30/km", details: "Ultra easy - focus on moving", location: "Easy forest paths", completed: false }
      ]
    },
    {
      weekNumber: 6,
      startDate: "2026-04-13",
      endDate: "2026-04-19",
      weeklyKm: 55,
      elevation: 1250,
      focus: "Peak Building",
      color: "#2ecc71",
      runs: [
        { date: "2026-04-13", dayName: "Monday", name: "Easy Run", distance: 10, elevation: 0, type: "road", pace: "6:30-7:00/km", details: "Recovery pace", location: "City circuit", completed: false },
        { date: "2026-04-15", dayName: "Wednesday", name: "Interval Training", distance: 9, elevation: 0, type: "road", pace: "5:45-6:30/km", details: "5x 800m intervals with rest", location: "Track", completed: false },
        { date: "2026-04-18", dayName: "Saturday", name: "Long Trail Run", distance: 18, elevation: 900, type: "trail", pace: "7:00-7:30/km", details: "Next level distance - sustained climb", location: "High mountain terrain", completed: false },
        { date: "2026-04-19", dayName: "Sunday", name: "Active Recovery", distance: 18, elevation: 350, type: "trail", pace: "7:30-8:30/km", details: "Easy effort", location: "Moderate terrain", completed: false }
      ]
    },
    {
      weekNumber: 7,
      startDate: "2026-04-20",
      endDate: "2026-04-26",
      weeklyKm: 60,
      elevation: 1400,
      focus: "Peak Week 1",
      color: "#e74c3c",
      runs: [
        { date: "2026-04-20", dayName: "Monday", name: "Easy Run", distance: 10, elevation: 0, type: "road", pace: "6:30-7:00/km", details: "Base pace", location: "City run", completed: false },
        { date: "2026-04-22", dayName: "Wednesday", name: "Threshold Run", distance: 9, elevation: 0, type: "road", pace: "6:00-6:30/km", details: "25min at tempo pace", location: "Long tempo route", completed: false },
        { date: "2026-04-25", dayName: "Saturday", name: "Long Trail Run", distance: 20, elevation: 1000, type: "trail", pace: "7:00-7:30/km", details: "20km on trails - race simulation", location: "Similar to race terrain", completed: false },
        { date: "2026-04-26", dayName: "Sunday", name: "Trail Long Run", distance: 21, elevation: 400, type: "trail", pace: "7:30-8:30/km", details: "Extended time - low effort", location: "Forest trails", completed: false }
      ]
    },
    {
      weekNumber: 8,
      startDate: "2026-04-27",
      endDate: "2026-05-03",
      weeklyKm: 65,
      elevation: 1550,
      focus: "Peak Week 2",
      color: "#e74c3c",
      runs: [
        { date: "2026-04-27", dayName: "Monday", name: "Easy Run", distance: 11, elevation: 0, type: "road", pace: "6:30-7:00/km", details: "Recovery pace", location: "City run", completed: false },
        { date: "2026-04-29", dayName: "Wednesday", name: "Mixed Pace Run", distance: 9, elevation: 0, type: "road", pace: "6:15-6:45/km", details: "Varied pace work", location: "City tempo run", completed: false },
        { date: "2026-05-02", dayName: "Saturday", name: "Ultra Long Trail Run", distance: 22, elevation: 1100, type: "trail", pace: "7:00-7:30/km", details: "Peak distance - 22km on trails", location: "Extended mountain route", completed: false },
        { date: "2026-05-03", dayName: "Sunday", name: "Long Trail Run", distance: 23, elevation: 450, type: "trail", pace: "7:30-8:30/km", details: "Extended time on feet", location: "Forest circuit", completed: false }
      ]
    },
    {
      weekNumber: 9,
      startDate: "2026-05-04",
      endDate: "2026-05-10",
      weeklyKm: 60,
      elevation: 1450,
      focus: "Maintain with Intensity",
      color: "#e67e22",
      runs: [
        { date: "2026-05-04", dayName: "Monday", name: "Easy Run", distance: 10, elevation: 0, type: "road", pace: "6:30-7:00/km", details: "Recovery pace", location: "City run", completed: false },
        { date: "2026-05-06", dayName: "Wednesday", name: "Tempo Segments", distance: 8, elevation: 0, type: "road", pace: "6:00-6:30/km", details: "Sustained threshold", location: "Tempo route", completed: false },
        { date: "2026-05-09", dayName: "Saturday", name: "Trail Run with Elevation", distance: 18, elevation: 950, type: "trail", pace: "7:00-7:30/km", details: "Controlled descent practice", location: "Mountain trails", completed: false },
        { date: "2026-05-10", dayName: "Sunday", name: "Long Trail Run", distance: 24, elevation: 500, type: "trail", pace: "7:30-8:30/km", details: "Maintain fitness - low effort", location: "Extended forest trails", completed: false }
      ]
    },
    {
      weekNumber: 10,
      startDate: "2026-05-11",
      endDate: "2026-05-17",
      weeklyKm: 55,
      elevation: 1350,
      focus: "Maintain Volume",
      color: "#e67e22",
      runs: [
        { date: "2026-05-11", dayName: "Monday", name: "Easy Run", distance: 10, elevation: 0, type: "road", pace: "6:30-7:00/km", details: "Conversational pace", location: "City run", completed: false },
        { date: "2026-05-13", dayName: "Wednesday", name: "Steady Run", distance: 8, elevation: 0, type: "road", pace: "6:15-6:45/km", details: "Comfortably hard", location: "Steady run route", completed: false },
        { date: "2026-05-16", dayName: "Saturday", name: "Trail Run", distance: 17, elevation: 850, type: "trail", pace: "7:00-7:30/km", details: "Quality long run", location: "Mountain trails", completed: false },
        { date: "2026-05-17", dayName: "Sunday", name: "Long Trail Run", distance: 20, elevation: 500, type: "trail", pace: "7:30-8:30/km", details: "Maintain endurance", location: "Forest trails", completed: false }
      ]
    },
    {
      weekNumber: 11,
      startDate: "2026-05-18",
      endDate: "2026-05-24",
      weeklyKm: 50,
      elevation: 1200,
      focus: "Begin Taper",
      color: "#f39c12",
      runs: [
        { date: "2026-05-18", dayName: "Monday", name: "Easy Run", distance: 9, elevation: 0, type: "road", pace: "6:45-7:15/km", details: "Recover - slightly slower", location: "City run", completed: false },
        { date: "2026-05-20", dayName: "Wednesday", name: "Easy Steady", distance: 8, elevation: 0, type: "road", pace: "6:45-7:15/km", details: "Reduced volume", location: "Easy route", completed: false },
        { date: "2026-05-23", dayName: "Saturday", name: "Trail Run", distance: 15, elevation: 750, type: "trail", pace: "7:15-7:45/km", details: "Reduce mileage - maintain fitness", location: "Moderate trails", completed: false },
        { date: "2026-05-24", dayName: "Sunday", name: "Long Trail Run", distance: 18, elevation: 450, type: "trail", pace: "7:45-8:30/km", details: "Optional - keep it short", location: "Forest trails", completed: false }
      ]
    },
    {
      weekNumber: 12,
      startDate: "2026-05-25",
      endDate: "2026-05-31",
      weeklyKm: 40,
      elevation: 900,
      focus: "Taper Week",
      color: "#f39c12",
      runs: [
        { date: "2026-05-25", dayName: "Monday", name: "Easy Run", distance: 8, elevation: 0, type: "road", pace: "6:45-7:15/km", details: "Reduced intensity", location: "City run", completed: false },
        { date: "2026-05-27", dayName: "Wednesday", name: "Easy Run", distance: 7, elevation: 0, type: "road", pace: "6:45-7:15/km", details: "Very easy today", location: "Easy route", completed: false },
        { date: "2026-05-30", dayName: "Saturday", name: "Trail Shakeout Run", distance: 12, elevation: 600, type: "trail", pace: "7:30-8:00/km", details: "Keep moving - race week", location: "Light trail run", completed: false },
        { date: "2026-05-31", dayName: "Sunday", name: "Easy Trail Run", distance: 13, elevation: 300, type: "trail", pace: "8:00-8:30/km", details: "Recovery pace - prepare mentally", location: "Easy trails", completed: false }
      ]
    },
    {
      weekNumber: 13,
      startDate: "2026-06-01",
      endDate: "2026-06-07",
      weeklyKm: 25,
      elevation: 400,
      focus: "Final Taper",
      color: "#f1c40f",
      runs: [
        { date: "2026-06-01", dayName: "Monday", name: "Easy Run", distance: 6, elevation: 0, type: "road", pace: "7:00-7:30/km", details: "Light run - stay loose", location: "Easy city run", completed: false },
        { date: "2026-06-03", dayName: "Wednesday", name: "Easy Run", distance: 5, elevation: 0, type: "road", pace: "7:00-7:30/km", details: "Very easy - mental focus", location: "City run", completed: false },
        { date: "2026-06-06", dayName: "Saturday", name: "Short Trail Shakeout", distance: 8, elevation: 400, type: "trail", pace: "7:30-8:00/km", details: "Get on feet lightly", location: "Local shakeout", completed: false },
        { date: "2026-06-07", dayName: "Sunday", name: "Rest or Walk", distance: 0, elevation: 0, type: "rest", pace: "N/A", details: "Complete rest day - recover fully", location: "N/A", completed: false }
      ]
    },
    {
      weekNumber: 14,
      startDate: "2026-06-08",
      endDate: "2026-06-12",
      weeklyKm: 80,
      elevation: 3900,
      focus: "RACE WEEK",
      color: "#f1c40f",
      runs: [
        { date: "2026-06-08", dayName: "Monday", name: "Easy Shakeout", distance: 4, elevation: 0, type: "road", pace: "7:00-7:30/km", details: "Get blood flowing", location: "Easy city run", completed: false },
        { date: "2026-06-09", dayName: "Tuesday", name: "Rest/Yoga/Mobility", distance: 0, elevation: 0, type: "rest", pace: "N/A", details: "Active recovery - stretching focus", location: "N/A", completed: false },
        { date: "2026-06-10", dayName: "Wednesday", name: "Short Jog", distance: 3, elevation: 0, type: "road", pace: "7:30-8:00/km", details: "Loose legs - very easy", location: "Easy city run", completed: false },
        { date: "2026-06-12", dayName: "Friday", name: "RACE DAY - Trail 80K Andorra", distance: 80, elevation: 3900, type: "race", pace: "Target: 10:00-11:00/km", details: "CONQUER THE PYRENEES! - Go get it!", location: "Trail 100 Andorra Course", completed: false }
      ]
    }
  ]
};

// Function to calculate total kilometers and elevation
function calculateTotals() {
  let totalKm = 0;
  let totalElevation = 0;
  let totalRuns = 0;

  trainingPlan.weeks.forEach(week => {
    week.runs.forEach(run => {
      if (run.type !== 'rest') {
        totalKm += run.distance;
        totalElevation += run.elevation;
        totalRuns += 1;
      }
    });
  });

  return { totalKm, totalElevation, totalRuns };
}

// Function to get all runs
function getAllRuns() {
  const allRuns = [];
  trainingPlan.weeks.forEach(week => {
    week.runs.forEach(run => {
      allRuns.push({
        ...run,
        weekNumber: week.weekNumber,
        focus: week.focus
      });
    });
  });
  return allRuns;
}

// Function to mark run as completed or toggle it
function toggleRun(date) {
  for (let week of trainingPlan.weeks) {
    for (let run of week.runs) {
      if (run.date === date) {
        run.completed = !run.completed;
        saveProgressToLocalStorage();
        return true;
      }
    }
  }
  return false;
}

// Function to mark run as completed
function completeRun(date) {
  for (let week of trainingPlan.weeks) {
    for (let run of week.runs) {
      if (run.date === date) {
        run.completed = true;
        saveProgressToLocalStorage();
        return true;
      }
    }
  }
  return false;
}

// Function to get completed runs count
function getCompletedRunsCount() {
  let count = 0;
  trainingPlan.weeks.forEach(week => {
    week.runs.forEach(run => {
      if (run.completed && run.type !== 'rest') {
        count++;
      }
    });
  });
  return count;
}

// Function to get completed kilometers
function getCompletedKm() {
  let km = 0;
  trainingPlan.weeks.forEach(week => {
    week.runs.forEach(run => {
      if (run.completed && run.type !== 'rest') {
        km += run.distance;
      }
    });
  });
  return km;
}

// LocalStorage Functions
function saveProgressToLocalStorage() {
  const progressData = {};
  trainingPlan.weeks.forEach(week => {
    week.runs.forEach(run => {
      progressData[run.date] = run.completed;
    });
  });
  localStorage.setItem('trainingProgress', JSON.stringify(progressData));
}

function loadProgressFromLocalStorage() {
  const saved = localStorage.getItem('trainingProgress');
  if (saved) {
    const progressData = JSON.parse(saved);
    trainingPlan.weeks.forEach(week => {
      week.runs.forEach(run => {
        if (progressData[run.date] !== undefined) {
          run.completed = progressData[run.date];
        }
      });
    });
  }
}

// Load progress on script initialization
loadProgressFromLocalStorage();
