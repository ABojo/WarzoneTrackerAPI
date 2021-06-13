const formatMode = (mode) => {
  if (mode.includes('pl')) return 'Plunder';
  if (mode.includes('rebirth')) return 'Rebirth';

  const str = mode.split('br_br')[1];
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
};

module.exports = formatMode;
