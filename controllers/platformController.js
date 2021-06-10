const catchAsync = require('../utils/catchAsync');

exports.getPlayer = catchAsync(async (req, res) => {
  const { platform, username } = req.params;
  const [statsRes, matchesRes] = await Promise.all([
    req.api.getStats(platform, username),
    req.api.getMatches(platform, username),
  ]);

  if (statsRes.status === 'error' || matchesRes.status === 'error')
    throw new Error(
      "Sorry, that profile either doesn't exist or their data is private!"
    );

  const matches = matchesRes.data.matches.map((match) => {
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
      playerInfo: {
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
        clantag: match.player.clantag,
        team: match.player.team,
        uno: match.player.uno,
      },
    };
  });

  res.json({
    status: 'success',
    data: {
      profile: {
        platform: statsRes.data.platform,
        username: statsRes.data.username,
        level: statsRes.data.level,
        prestige: statsRes.data.prestige,
      },
      stats: {
        ...statsRes.data.lifetime.mode.br.properties,
      },
      matches,
    },
  });
});
