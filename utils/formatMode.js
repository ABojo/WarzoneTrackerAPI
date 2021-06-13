const formatMode = (mode) => {
  if (mode.includes('pln')) return 'Plunder';

  const str = mode.split('br_br')[1];
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
};

module.exports = formatMode;
