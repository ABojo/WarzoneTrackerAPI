const api = require('../utils/API');
const catchAsync = require('../utils/catchAsync');

exports.getStats = catchAsync(async (req, res) => {
  const { platform, username } = req.params;
  const response = await api.getStats(platform, username);
  if (response.status === 'error') throw new Error('');

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
