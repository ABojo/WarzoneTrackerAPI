const catchAsync = require('../utils/catchAsync');
const formatMode = require('../utils/formatMode');

exports.getPlayer = catchAsync(async (req, res) => {
  const { platform, username } = req.params;
  const [statsRes, matchesRes] = await Promise.all([
    req.api.getStats(platform, username),
    req.api.getMatches(platform, username),
  ]);
  const { message } = statsRes.data;

  if (message === 'Not permitted: user not found' || message === 'no value')
    throw new Error('Sorry, that profile does not exist!');

  if (message === 'Not permitted: not allowed')
    throw new Error("Sorry, that profile's data is set to private!");

  const matches = matchesRes.data.matches.map((match) => {
    return {
      teamPlacement: match.playerStats.teamPlacement,
      startTime: match.utcStartSeconds,
      endTime: match.utcEndSeconds,
      mode: formatMode(match.mode),
      id: match.matchID,
      duration: match.duration,
      playerCount: match.playerCount,
      teamCount: match.teamCount,
      kills: match.playerStats.kills,
      deaths: match.playerStats.deaths,
      kdRatio: match.playerStats.kdRatio.toFixed(2),
      damageDone: match.playerStats.damageDone,
      damageTaken: match.playerStats.damageTaken,
      headshots: match.playerStats.headshots,
      assists: match.playerStats.assists,
      scorePerMinute: Math.round(match.playerStats.scorePerMinute),
      totalXp: match.playerStats.totalXp,
      distanceTraveled: match.playerStats.distanceTraveled,
      percentTimeMoving: `${Math.round(match.playerStats.percentTimeMoving)}%`,
      clantag: match.player.clantag,
      team: match.player.team,
      uno: match.player.uno,
    };
  });

  const { properties } = statsRes.data.lifetime.mode.br;

  res.json({
    status: 'success',
    data: {
      profile: {
        Prestige: statsRes.data.prestige,
        Level: statsRes.data.level,
        'KD Ratio': properties.kdRatio.toFixed(2),
        Kills: properties.kills,
        Downs: properties.downs,
        Deaths: properties.deaths,
        Wins: properties.wins,
        'Win %': `${((properties.wins / properties.gamesPlayed) * 100).toFixed(
          2
        )}%`,
        SPM: Math.round(properties.scorePerMinute),
      },
      matches,
    },
  });
});
