function getAdjustValue(isDibit, value) {
	if (isDibit && value < 10) {
		return '0' + String(value);
	}
	return value;
}

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
		flag = isDibit;
		isDibit = false;
	}

	if (isDibit === undefined && flag === undefined) {
		isDibit = false;
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
