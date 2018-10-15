function getAdjustValue(isDibit, value) {
  if (isDibit) {
    value += ''

    if (value < 10) {
      return '0' + value;
    }
  }
  return value;
}

var flags = ['days', 'hours', 'minutes', 'seconds', 'milliseconds'];

module.exports = function(timestamp, isDibit, flag) {
  var days, hours, minutes,
    seconds, milliseconds;

  if (typeof timestamp !== 'number' || isNaN(timestamp) || timestamp <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    };
  }

  if (typeof isDibit === 'string') {
    if (flags.indexOf(isDibit) > -1) {
      flag = isDibit;
    } else {
      console.warn('the flag is invalid value, should be days or hours or minutes or seconds or milliseconds')
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0
      };
    }
  } else {
    flag = 'days';
  }

  switch (flag) {
  case 'days':
    days = Math.floor(timestamp / (24 * 60 * 60 * 1000));
    hours = Math.floor(timestamp / (60 * 60 * 1000) % 24);
    minutes = Math.floor(timestamp / (60 * 1000) % 60);
    seconds = Math.floor(timestamp / 1000 % 60);
    milliseconds = Math.floor(timestamp % 1000);
    break;
  case 'hours':
    days = 0;
    hours = Math.floor(timestamp / (60 * 60 * 1000));
    minutes = Math.floor(timestamp / (60 * 1000) % 60);
    seconds = Math.floor(timestamp / 1000 % 60);
    milliseconds = Math.floor(timestamp % 1000);
    break;
  case 'minutes':
    days = 0;
    hours = 0;
    minutes = Math.floor(timestamp / (60 * 1000));
    seconds = Math.floor(timestamp / 1000 % 60);
    milliseconds = Math.floor(timestamp % 1000);
    break;
  case 'seconds':
    days = 0;
    hours = 0;
    minutes = 0;
    seconds = Math.floor(timestamp / 1000);
    milliseconds = Math.floor(timestamp % 1000);
    break;
  case 'milliseconds':
    days = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = timestamp;
    break;
  default:
    break;
  }

  return {
    days: days,
    hours: getAdjustValue(isDibit, hours),
    minutes: getAdjustValue(isDibit, minutes),
    seconds: getAdjustValue(isDibit, seconds),
    milliseconds: milliseconds
  };
}
