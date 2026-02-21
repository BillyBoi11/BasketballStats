// EDIT THIS FILE TO UPDATE THE WEBSITE
const GAME_DATABASE = [ 
  {
    date: "(Scheduled) 2026-02-23",
    gameName: "Warmup",
    duration: "00:00",
    reboundGame: false, 
    players: [
      { name: "Billy", team: "None", twoP: 0, threeP: 0, ft: 0, miss: 0, foul: 0, reb: 0, tech: 0, stl: 0, blk: 0},
      { name: "Lucas", team: "None", twoP: 0, threeP: 0, ft: 0, miss: 0, foul: 0, reb: 0, tech: 0, stl: 0, blk: 0},
      { name: "Gem", team: "None", twoP: 0, threeP: 0, ft: 0, miss: 0, foul: 0, reb: 0, tech: 0, stl: 0, blk: 0},
      { name: "Viking", team: "None", twoP: 0, threeP: 0, ft: 0, miss: 0, foul: 0, reb: 0, tech: 0, stl: 0, blk: 0}
    ]
  }, 
  {
    date: "(Scheduled) 2026-02-23",
    gameName: "Rotating 1v2 + ref",
    duration: "00:00",
    reboundGame: false, 
    players: [
      { name: "Billy", team: "Team 1", twoP: 0, threeP: 0, ft: 0, miss: 0, foul: 0, reb: 0, tech: 0, stl: 0, blk: 0},
      { name: "Lucas", team: "Team 2", twoP: 0, threeP: 0, ft: 0, miss: 0, foul: 0, reb: 0, tech: 0, stl: 0, blk: 0},
      { name: "Gem", team: "Team 3", twoP: 0, threeP: 0, ft: 0, miss: 0, foul: 0, reb: 0, tech: 0, stl: 0, blk: 0},
      { name: "Viking", team: "Team 4", twoP: 0, threeP: 0, ft: 0, miss: 0, foul: 0, reb: 0, tech: 0, stl: 0, blk: 0}
    ]
  }, 
  {
    date: "2026-02-17",
    gameName: "Game 7",
    duration: "15:00",
    reboundGame: false, 
    players: [
      { name: "Billy", team: "Team 1", twoP: 1, threeP: 4, ft: 0, miss: 0, foul: 0, reb: 0, tech: 0, stl: 1, blk: 1},
      { name: "Viking", team: "Team 1", twoP: 2, threeP: 0, ft: 0, miss: 0, foul: 0, reb: 0, tech: 0, stl: 0, blk: 0},
      { name: "Lucas", team: "Team 2", twoP: 2, threeP: 0, ft: 0, miss: 0, foul: 1, reb: 0, tech: 0, stl: 0, blk: 0},
      { name: "Gem", team: "Team 2", twoP: 2, threeP: 0, ft: 0, miss: 0, foul: 0, reb: 0, tech: 0, stl: 0, blk: 1}
    ]
  },  
  {
    date: "2026-02-10",
    gameName: "Game 6",
    duration: "7:00",
    reboundGame: false, // Switched to true to show your rebound data
    players: [
      { name: "Billy", team: "Team 1", twoP: 1, threeP: 1, ft: 0, miss: 0, foul: 0, reb: 0, tech: 0, stl: 0, blk: 0},
      { name: "Lucas", team: "Team 2", twoP: 1, threeP: 1, ft: 0, miss: 0, foul: 2, reb: 0, tech: 0, stl: 0, blk: 0}
    ]
  },
  {
    date: "2026-02-10",
    gameName: "Game 5",
    duration: "12:00",
    reboundGame: false, // Switched to true to show your rebound data
    players: [
      { name: "Billy", team: "Team 1", twoP: 0, threeP: 1, ft: 0, miss: 0, foul: 1, reb: 0, tech: 0, stl: 0, blk: 0},
      { name: "Gem", team: "Team 2", twoP: 4, threeP: 0, ft: 0, miss: 0, foul: 0, reb: 0, tech: 0, stl: 0, blk: 1}
    ]
  },
  {
    date: "2025-12-18",
    gameName: "Game 4",
    duration: "25:00",
    reboundGame: false, // Switched to true to show your rebound data
    players: [
      { name: "Billy", team: "Team 1", twoP: 2, threeP: 0, ft: 0, miss: 0, foul: 1, reb: 0, tech: 0, stl: 0, blk: 1},
      { name: "Gem", team: "Team 2", twoP: 6, threeP: 0, ft: 0, miss: 0, foul: 0, reb: 0, tech: 0, stl: 0, blk: 0},
      { name: "Lucas", team: "Team 2", twoP: 0, threeP: 0, ft: 0, miss: 0, foul: 0, reb: 0, tech: 0, stl: 0, blk: 0}
    ]
  },
  {
    date: "2025-12-16",
    gameName: "Game 3",
    duration: "18:00",
    reboundGame: false, // Switched to true to show your rebound data
    players: [
      { name: "Billy", team: "Team 2", twoP: 0, threeP: 3, ft: 0, miss: 0, foul: 1, reb: 0, tech: 0, stl: 0, blk: 0},
      { name: "Gem", team: "Team 1", twoP: 6, threeP: 0, ft: 0, miss: 0, foul: 0, reb: 0, tech: 0, stl: 0, blk: 0},
      { name: "Lucas", team: "Team 2", twoP: 2, threeP: 0, ft: 0, miss: 0, foul: 2, reb: 0, tech: 0, stl: 0, blk: 0}
    ]
  },
  {
    date: "2025-12-16",
    gameName: "Game 2",
    duration: "12:00",
    reboundGame: false, // Switched to true to show your rebound data
    players: [
      { name: "Billy", team: "Team 1", twoP: 0, threeP: 0, ft: 0, miss: 0, foul: 1, reb: 0, tech: 0, stl: 2, blk: 0},
      { name: "Gem", team: "Team 1", twoP: 2, threeP: 0, ft: 0, miss: 0, foul: 0, reb: 0, tech: 0, stl: 1, blk: 0},
      { name: "Lucas", team: "Team 2", twoP: 1, threeP: 0, ft: 0, miss: 0, foul: 2, reb: 0, tech: 0, stl: 0, blk: 0}
    ]
  },
  {
    date: "2025-12-16",
    gameName: "Game 1",
    duration: "12:00",
    reboundGame: false, // Switched to true to show your rebound data
    players: [
      { name: "Gem", team: "Team 1", twoP: 3, threeP: 0, ft: 0, miss: 0, foul: 0, reb: 0, tech: 0, stl: 0, blk: 0},
      { name: "Lucas", team: "Team 2", twoP: 1, threeP: 0, ft: 0, miss: 0, foul: 0, reb: 0, tech: 0, stl: 0, blk: 0}
    ]
  }
];