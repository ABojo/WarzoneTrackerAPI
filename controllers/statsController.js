const catchAsync = require('../utils/catchAsync');

exports.getStats = catchAsync(async (req, res) => {
  const { platform, username } = req.params;
  const response = await req.api.getStats(platform, username);

  if (response.status === 'error')
    throw new Error(
      "Sorry, that profile either doesn't exist or their data is private!"
    );

  res.json({
    status: 'success',
    data: {
      profile: {
        platform: response.data.platform,
        username: response.data.username,
        level: response.data.level,
        prestige: response.data.prestige,
      },
      stats: {
        ...response.data.lifetime.mode.br.properties,
      },
    },
  });
});
