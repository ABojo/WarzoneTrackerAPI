const catchAsync = require('../utils/catchAsync');

exports.getPlayer = catchAsync(async (req, res) => {
  const { platform, username } = req.params;
  const [stats, matches] = await Promise.all([
    req.api.getStats(platform, username),
    req.api.getMatches(platform, username),
  ]);

  if (stats.status === 'error' || matches.status === 'error')
    throw new Error(
      "Sorry, that profile either doesn't exist or their data is private!"
    );

  res.json({
    status: 'success',
    data: {
      profile: {
        platform: stats.data.platform,
        username: stats.data.username,
        level: stats.data.level,
        prestige: stats.data.prestige,
      },
      stats: {
        ...stats.data.lifetime.mode.br.properties,
      },
    },
  });
});
