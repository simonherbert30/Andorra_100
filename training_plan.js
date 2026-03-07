// Andorra 80KM Training Plan
// Starting: March 10, 2026
// Race Day: June 12, 2026

const trainingPlan = {
  raceDate: new Date(2026, 5, 12), // June 12, 2026
  raceName: "Trail 100 Andorra by UTMB - 80KM",
  raceDistance: 80,
  raceElevation: 3900,
  
  weeks: [
    {
      weekNumber: 1,
      startDate: "2026-03-10",
      endDate: "2026-03-16",
      weeklyKm: 30,
      focus: "Base Building",
      runs: [
        {
          date: "2026-03-10",
          dayName: "Monday",
          name: "Easy Run",
          distance: 8,
          elevation: 0,
          type: "road",
          pace: "6:30-7:00/km",
          completed: false
        },
        {
          date: "2026-03-12",
          dayName: "Wednesday",
          name: "Easy Run",
          distance: 7,
          elevation: 0,
          type: "road",
          pace: "6:30-7:00/km",
          completed: false
        },
        {
          date: "2026-03-15",
          dayName: "Saturday",
          name: "Trail Run with Elevation",
          distance: 8,
          elevation: 400,
          type: "trail",
          pace: "7:00-7:30/km",
          completed: false
        },
        {
          date: "2026-03-16",
          dayName: "Sunday",
          name: "Recovery Run",
          distance: 7,
          elevation: 100,
          type: "trail",
          pace: "7:30-8:00/km",
          completed: false
        }
      ]
    },
    {
      weekNumber: 2,
      startDate: "2026-03-17",
      endDate: "2026-03-23",
      weeklyKm: 35,
      focus: "Building Consistency",
      runs: [
        {
          date: "2026-03-17",
          dayName: "Tuesday",
          name: "Easy Run",
          distance: 8,
          elevation: 0,
          type: "road",
          pace: "6:30-7:00/km",
          completed: false
        },
        {
          date: "2026-03-19",
          dayName: "Thursday",
          name: "Tempo Run",
          distance: 8,
          elevation: 0,
          type: "road",
          pace: "6:00-6:30/km",
          completed: false
        },
        {
          date: "2026-03-22",
          dayName: "Saturday",
          name: "Trail Run with Elevation",
          distance: 10,
          elevation: 500,
          type: "trail",
          pace: "7:00-7:30/km",
          completed: false
        },
        {
          date: "2026-03-23",
          dayName: "Sunday",
          name: "Easy Recovery Run",
          distance: 9,
          elevation: 150,
          type: "trail",
          pace: "7:30-8:00/km",
          completed: false
        }
      ]
    },
    {
      weekNumber: 3,
      startDate: "2026-03-24",
      endDate: "2026-03-30",
      weeklyKm: 40,
      focus: "Volume Increase",
      runs: [
        {
          date: "2026-03-24",
          dayName: "Tuesday",
          name: "Easy Run",
          distance: 9,
          elevation: 0,
          type: "road",
          pace: "6:30-7:00/km",
          completed: false
        },
        {
          date: "2026-03-26",
          dayName: "Thursday",
          name: "Mixed Run",
          distance: 8,
          elevation: 0,
          type: "road",
          pace: "6:15-6:45/km",
          completed: false
        },
        {
          date: "2026-03-29",
          dayName: "Saturday",
          name: "Long Trail Run",
          distance: 12,
          elevation: 600,
          type: "trail",
          pace: "7:00-7:30/km",
          completed: false
        },
        {
          date: "2026-03-30",
          dayName: "Sunday",
          name: "Recovery Run",
          distance: 11,
          elevation: 200,
          type: "trail",
          pace: "7:30-8:00/km",
          completed: false
        }
      ]
    },
    {
      weekNumber: 4,
      startDate: "2026-03-31",
      endDate: "2026-04-06",
      weeklyKm: 42,
      focus: "Building Strength",
      runs: [
        {
          date: "2026-03-31",
          dayName: "Tuesday",
          name: "Easy Run",
          distance: 9,
          elevation: 0,
          type: "road",
          pace: "6:30-7:00/km",
          completed: false
        },
        {
          date: "2026-04-02",
          dayName: "Thursday",
          name: "Hill Repeat Session (Road)",
          distance: 8,
          elevation: 0,
          type: "road",
          pace: "5:45-6:15/km",
          completed: false
        },
        {
          date: "2026-04-05",
          dayName: "Saturday",
          name: "Long Trail Run",
          distance: 14,
          elevation: 700,
          type: "trail",
          pace: "7:00-7:30/km",
          completed: false
        },
        {
          date: "2026-04-06",
          dayName: "Sunday",
          name: "Recovery Trail Run",
          distance: 11,
          elevation: 250,
          type: "trail",
          pace: "7:30-8:00/km",
          completed: false
        }
      ]
    },
    {
      weekNumber: 5,
      startDate: "2026-04-07",
      endDate: "2026-04-13",
      weeklyKm: 50,
      focus: "Volume Building Phase",
      runs: [
        {
          date: "2026-04-07",
          dayName: "Tuesday",
          name: "Easy Run",
          distance: 10,
          elevation: 0,
          type: "road",
          pace: "6:30-7:00/km",
          completed: false
        },
        {
          date: "2026-04-09",
          dayName: "Thursday",
          name: "Tempo Run",
          distance: 9,
          elevation: 0,
          type: "road",
          pace: "6:00-6:30/km",
          completed: false
        },
        {
          date: "2026-04-12",
          dayName: "Saturday",
          name: "Long Trail Run",
          distance: 16,
          elevation: 800,
          type: "trail",
          pace: "7:00-7:30/km",
          completed: false
        },
        {
          date: "2026-04-13",
          dayName: "Sunday",
          name: "Easy Trail Recovery",
          distance: 15,
          elevation: 300,
          type: "trail",
          pace: "7:30-8:30/km",
          completed: false
        }
      ]
    },
    {
      weekNumber: 6,
      startDate: "2026-04-14",
      endDate: "2026-04-20",
      weeklyKm: 55,
      focus: "Peak Building",
      runs: [
        {
          date: "2026-04-14",
          dayName: "Tuesday",
          name: "Easy Run",
          distance: 10,
          elevation: 0,
          type: "road",
          pace: "6:30-7:00/km",
          completed: false
        },
        {
          date: "2026-04-16",
          dayName: "Thursday",
          name: "Interval Training",
          distance: 9,
          elevation: 0,
          type: "road",
          pace: "5:45-6:30/km",
          completed: false
        },
        {
          date: "2026-04-19",
          dayName: "Saturday",
          name: "Long Trail Run",
          distance: 18,
          elevation: 900,
          type: "trail",
          pace: "7:00-7:30/km",
          completed: false
        },
        {
          date: "2026-04-20",
          dayName: "Sunday",
          name: "Trail Recovery Run",
          distance: 18,
          elevation: 350,
          type: "trail",
          pace: "7:30-8:30/km",
          completed: false
        }
      ]
    },
    {
      weekNumber: 7,
      startDate: "2026-04-21",
      endDate: "2026-04-27",
      weeklyKm: 60,
      focus: "Peak Week 1",
      runs: [
        {
          date: "2026-04-21",
          dayName: "Tuesday",
          name: "Easy Run",
          distance: 10,
          elevation: 0,
          type: "road",
          pace: "6:30-7:00/km",
          completed: false
        },
        {
          date: "2026-04-23",
          dayName: "Thursday",
          name: "Threshold Run",
          distance: 9,
          elevation: 0,
          type: "road",
          pace: "6:00-6:30/km",
          completed: false
        },
        {
          date: "2026-04-26",
          dayName: "Saturday",
          name: "Long Trail Run",
          distance: 20,
          elevation: 1000,
          type: "trail",
          pace: "7:00-7:30/km",
          completed: false
        },
        {
          date: "2026-04-27",
          dayName: "Sunday",
          name: "Trail Recovery Run",
          distance: 21,
          elevation: 400,
          type: "trail",
          pace: "7:30-8:30/km",
          completed: false
        }
      ]
    },
    {
      weekNumber: 8,
      startDate: "2026-04-28",
      endDate: "2026-05-04",
      weeklyKm: 65,
      focus: "Peak Week 2",
      runs: [
        {
          date: "2026-04-28",
          dayName: "Tuesday",
          name: "Easy Run",
          distance: 11,
          elevation: 0,
          type: "road",
          pace: "6:30-7:00/km",
          completed: false
        },
        {
          date: "2026-04-30",
          dayName: "Thursday",
          name: "Mixed Pace Run",
          distance: 9,
          elevation: 0,
          type: "road",
          pace: "6:15-6:45/km",
          completed: false
        },
        {
          date: "2026-05-03",
          dayName: "Saturday",
          name: "Ultra Long Trail Run",
          distance: 22,
          elevation: 1100,
          type: "trail",
          pace: "7:00-7:30/km",
          completed: false
        },
        {
          date: "2026-05-04",
          dayName: "Sunday",
          name: "Trail Long Run",
          distance: 23,
          elevation: 450,
          type: "trail",
          pace: "7:30-8:30/km",
          completed: false
        }
      ]
    },
    {
      weekNumber: 9,
      startDate: "2026-05-05",
      endDate: "2026-05-11",
      weeklyKm: 60,
      focus: "Maintain with Intensity",
      runs: [
        {
          date: "2026-05-05",
          dayName: "Tuesday",
          name: "Easy Run",
          distance: 10,
          elevation: 0,
          type: "road",
          pace: "6:30-7:00/km",
          completed: false
        },
        {
          date: "2026-05-07",
          dayName: "Thursday",
          name: "Tempo Segments",
          distance: 8,
          elevation: 0,
          type: "road",
          pace: "6:00-6:30/km",
          completed: false
        },
        {
          date: "2026-05-10",
          dayName: "Saturday",
          name: "Trail Run with Elevation",
          distance: 18,
          elevation: 950,
          type: "trail",
          pace: "7:00-7:30/km",
          completed: false
        },
        {
          date: "2026-05-11",
          dayName: "Sunday",
          name: "Long Trail Run",
          distance: 24,
          elevation: 500,
          type: "trail",
          pace: "7:30-8:30/km",
          completed: false
        }
      ]
    },
    {
      weekNumber: 10,
      startDate: "2026-05-12",
      endDate: "2026-05-18",
      weeklyKm: 55,
      focus: "Maintain Volume",
      runs: [
        {
          date: "2026-05-12",
          dayName: "Tuesday",
          name: "Easy Run",
          distance: 10,
          elevation: 0,
          type: "road",
          pace: "6:30-7:00/km",
          completed: false
        },
        {
          date: "2026-05-14",
          dayName: "Thursday",
          name: "Steady Run",
          distance: 8,
          elevation: 0,
          type: "road",
          pace: "6:15-6:45/km",
          completed: false
        },
        {
          date: "2026-05-17",
          dayName: "Saturday",
          name: "Trail Run",
          distance: 17,
          elevation: 850,
          type: "trail",
          pace: "7:00-7:30/km",
          completed: false
        },
        {
          date: "2026-05-18",
          dayName: "Sunday",
          name: "Long Trail Run",
          distance: 20,
          elevation: 450,
          type: "trail",
          pace: "7:30-8:30/km",
          completed: false
        }
      ]
    },
    {
      weekNumber: 11,
      startDate: "2026-05-19",
      endDate: "2026-05-25",
      weeklyKm: 50,
      focus: "Begin Taper",
      runs: [
        {
          date: "2026-05-19",
          dayName: "Tuesday",
          name: "Easy Run",
          distance: 9,
          elevation: 0,
          type: "road",
          pace: "6:45-7:15/km",
          completed: false
        },
        {
          date: "2026-05-21",
          dayName: "Thursday",
          name: "Easy Steady",
          distance: 8,
          elevation: 0,
          type: "road",
          pace: "6:45-7:15/km",
          completed: false
        },
        {
          date: "2026-05-24",
          dayName: "Saturday",
          name: "Trail Run",
          distance: 15,
          elevation: 750,
          type: "trail",
          pace: "7:15-7:45/km",
          completed: false
        },
        {
          date: "2026-05-25",
          dayName: "Sunday",
          name: "Long Trail Run",
          distance: 18,
          elevation: 400,
          type: "trail",
          pace: "7:45-8:30/km",
          completed: false
        }
      ]
    },
    {
      weekNumber: 12,
      startDate: "2026-05-26",
      endDate: "2026-06-01",
      weeklyKm: 40,
      focus: "Taper Week",
      runs: [
        {
          date: "2026-05-26",
          dayName: "Tuesday",
          name: "Easy Run",
          distance: 8,
          elevation: 0,
          type: "road",
          pace: "6:45-7:15/km",
          completed: false
        },
        {
          date: "2026-05-28",
          dayName: "Thursday",
          name: "Easy Run",
          distance: 7,
          elevation: 0,
          type: "road",
          pace: "6:45-7:15/km",
          completed: false
        },
        {
          date: "2026-05-31",
          dayName: "Saturday",
          name: "Trail Shakeout Run",
          distance: 12,
          elevation: 600,
          type: "trail",
          pace: "7:30-8:00/km",
          completed: false
        },
        {
          date: "2026-06-01",
          dayName: "Sunday",
          name: "Easy Trail Run",
          distance: 13,
          elevation: 300,
          type: "trail",
          pace: "8:00-8:30/km",
          completed: false
        }
      ]
    },
    {
      weekNumber: 13,
      startDate: "2026-06-02",
      endDate: "2026-06-08",
      weeklyKm: 25,
      focus: "Final Taper",
      runs: [
        {
          date: "2026-06-02",
          dayName: "Tuesday",
          name: "Easy Run",
          distance: 6,
          elevation: 0,
          type: "road",
          pace: "7:00-7:30/km",
          completed: false
        },
        {
          date: "2026-06-04",
          dayName: "Thursday",
          name: "Easy Run",
          distance: 5,
          elevation: 0,
          type: "road",
          pace: "7:00-7:30/km",
          completed: false
        },
        {
          date: "2026-06-07",
          dayName: "Saturday",
          name: "Short Trail Shakeout",
          distance: 8,
          elevation: 400,
          type: "trail",
          pace: "7:30-8:00/km",
          completed: false
        },
        {
          date: "2026-06-08",
          dayName: "Sunday",
          name: "Rest or Walk",
          distance: 0,
          elevation: 0,
          type: "rest",
          pace: "N/A",
          completed: false
        }
      ]
    },
    {
      weekNumber: 14,
      startDate: "2026-06-09",
      endDate: "2026-06-12",
      weeklyKm: 80,
      focus: "RACE WEEK",
      runs: [
        {
          date: "2026-06-09",
          dayName: "Tuesday",
          name: "Easy Shakeout",
          distance: 4,
          elevation: 0,
          type: "road",
          pace: "7:00-7:30/km",
          completed: false
        },
        {
          date: "2026-06-10",
          dayName: "Wednesday",
          name: "Rest/Yoga",
          distance: 0,
          elevation: 0,
          type: "rest",
          pace: "N/A",
          completed: false
        },
        {
          date: "2026-06-11",
          dayName: "Thursday",
          name: "Short Jog",
          distance: 3,
          elevation: 0,
          type: "road",
          pace: "7:30-8:00/km",
          completed: false
        },
        {
          date: "2026-06-12",
          dayName: "Friday",
          name: "RACE DAY - Trail 80K Andorra",
          distance: 80,
          elevation: 3900,
          type: "race",
          pace: "Target: 10:00-11:00/km",
          completed: false
        }
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

// Function to mark run as completed
function completeRun(date) {
  for (let week of trainingPlan.weeks) {
    for (let run of week.runs) {
      if (run.date === date) {
        run.completed = true;
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

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { trainingPlan, calculateTotals, getAllRuns, completeRun, getCompletedRunsCount, getCompletedKm };
}
