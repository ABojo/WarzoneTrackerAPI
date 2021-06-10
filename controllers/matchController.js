const catchAsync = require('../utils/catchAsync');

exports.getMatch = catchAsync(async (req, res) => {
  const { id } = req.params;
  const response = await req.api.getMatchDetails(id);

  const matchInfo = response.data.allPlayers[0];
  const players = response.data.allPlayers.map((player) => {
    return {
      username: player.player.username,
      teamPlacement: player.playerStats.teamPlacement,
      kdRatio: player.playerStats.kdRatio,
      kills: player.playerStats.kills,
      deaths: player.playerStats.deaths,
      damageDone: player.playerStats.damageDone,
      damageTaken: player.playerStats.damageTaken,
      headshots: player.playerStats.headshots,
      assists: player.playerStats.assists,
      score: player.playerStats.score,
      totalXp: player.playerStats.totalXp,
      scorePerMinute: player.playerStats.scorePerMinute,
      distanceTraveled: player.playerStats.distanceTraveled,
      gulagKills: player.playerStats.gulagKills,
      gulagDeaths: player.playerStats.gulagDeaths,
      percentTimeMoving: player.playerStats.percentTimeMoving,
      uno: player.player.uno,
    };
  });

  const averageSPM =
    players.reduce((acc, player) => acc + player.scorePerMinute, 0) /
    matchInfo.playerCount;

  const averageTimeMoving =
    players.reduce((acc, player) => acc + player.percentTimeMoving, 0) /
    matchInfo.playerCount;

  res.json({
    status: 'success',
    data: {
      utcStartSeconds: matchInfo.utcStartSeconds,
      utcEndSeconds: matchInfo.utcEndSeconds,
      map: matchInfo.map,
      mode: matchInfo.mode,
      duration: matchInfo.duration,
      playerCount: matchInfo.playerCount,
      averageSPM,
      averageTimeMoving,
      players,
    },
  });
});
