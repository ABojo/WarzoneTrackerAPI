const catchAsync = require('../utils/catchAsync');

exports.getMatches = catchAsync(async (req, res) => {
  const { platform, username } = req.params;
  const response = await req.api.getMatches(platform, username);

  if (response.status === 'error')
    throw new Error(
      "Sorry, that profile either doesn't exist or their data is private!"
    );

  console.log(response.data.matches);

  const matches = response.data.matches.map((match) => {
    return {
      matchDetails: {
        startTime: match.utcStartSeconds,
        endTime: match.utcEndSeconds,
        mode: match.mode,
        id: match.matchID,
        duration: match.duration,
        playerCount: match.playerCount,
        teamCount: match.teamCount,
      },
      playerStats: {
        kills: match.playerStats.kills,
        deaths: match.playerStats.deaths,
        kdRatio: match.playerStats.kdRatio,
        damageDone: match.playerStats.damageDone,
        damageTaken: match.playerStats.damageTaken,
        headshots: match.playerStats.headshots,
        assists: match.playerStats.assists,
        scorePerMinute: match.playerStats.scorePerMinute,
        totalXp: match.playerStats.totalXp,
        distanceTraveled: match.playerStats.distanceTraveled,
        percentTimeMoving: match.playerStats.percentTimeMoving,
      },
      playerInfo: {
        username: match.player.username,
        uno: match.player.uno,
        clantag: match.player.clantag,
        team: match.player.team,
      },
    };
  });

  res.json({
    status: 'success',
    data: {
      matches,
    },
  });
});
