// EDIT THIS FILE TO UPDATE THE DRILLS WEBSITE
const DRILL_DATABASE = [
  {
    date: "2026-03-06",
    drillName: "Reactive Shuttle Run",
    duration: "00:00",
    label: "Pre-season test",
    players: [
      { name: "Billy", team: "None", time: 0.00, height: 177, reach: 220, vertical: 65 },
      { name: "Gem", team: "None", time: 0.00, height: 0, reach: 0, vertical: 0 },
      { name: "Lucas", team: "None", time: 0.00, height: 0, reach: 0, vertical: 0 }
    ]
  },
];

// Reference NBA benchmarks (seconds) for supported drills.
// Records pulled from recent NBA combine data; averages are approximate typical combine averages.
const DRILL_META = {
    'Reactive Shuttle Run': {
        nbaRecord: 2.79,   // Dalton Knecht, 2024 combine
        nbaAverage: 3.10,
        nbaVerticalJump: 81.3   // Average NBA vertical jump in cm
    },
    'Three-Quarter Court Sprint': {
        nbaRecord: 2.87,   // Devin Carter, 2024 combine
        nbaAverage: 3.30,
        nbaVerticalJump: 81.3   // Average NBA vertical jump in cm
    },
    'Lane Agility Drill': {
        nbaRecord: 10.49,  // KJ Simpson, 2024 combine
        nbaAverage: 11.50,
        nbaVerticalJump: 81.3   // Average NBA vertical jump in cm
    }
};

const DrillDB = (() => {
    function getSessions() {
        return DRILL_DATABASE
            .slice()
            .sort((a, b) => String(a.date || '').localeCompare(String(b.date || '')));
    }

    function getDrillNames() {
        const names = new Set();
        DRILL_DATABASE.forEach(s => {
            if (s.drillName) names.add(s.drillName);
        });
        return Array.from(names).sort();
    }

    // Build a matrix for a single drill:
    // { dates: [...], players: [...], results: { playerName: { date: seconds } } }
    function getDrillMatrix(drillName) {
        const filtered = DRILL_DATABASE
            .filter(s => s.drillName === drillName)
            .slice()
            .sort((a, b) => String(a.date || '').localeCompare(String(b.date || '')));

        const dates = filtered.map(s => s.date || '');
        const playersSet = new Set();
        const results = {};

        filtered.forEach(s => {
            (s.players || []).forEach(e => {
                const name = e.name || '';
                if (!name) return;
                playersSet.add(name);
                if (!results[name]) results[name] = {};
                const secs = Number(e.time) || 0;
                // If multiple timings on same date for same player, keep best (lowest).
                if (!results[name][s.date] || secs < results[name][s.date]) {
                    results[name][s.date] = secs;
                }
            });
        });

        const players = Array.from(playersSet).sort();
        return { dates, players, results };
    }

    function getDrillMeta(drillName) {
        return DRILL_META[drillName] || null;
    }

    return {
        getSessions,
        getDrillNames,
        getDrillMatrix,
        getDrillMeta
    };
})();

