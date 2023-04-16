const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  if (isNaN(Date.parse(date))) {
    throw Error('Invalid date!');
  }
  
  if (date.hasOwnProperty('toString')) {
    throw Error('Invalid date!');
  }  

  let newDate = new Date(date);
  
  if ((newDate.getMonth() >= 0) && (newDate.getMonth() < 2) || (newDate.getMonth() == 11)) {
    return ('winter');
  }
  if (newDate.getMonth()>=2 && newDate.getMonth() < 5) {
    return ('spring');
  }
  if (newDate.getMonth()>=5 && newDate.getMonth() < 8) {
    return ('summer');
  }
  if (newDate.getMonth()>=8 && newDate.getMonth() < 11) {
    return ('autumn');
  }
}

module.exports = {
  getSeason
};
