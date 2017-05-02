function getAdjustValue(isDibit, value) {
	if (isDibit && value < 10) {
		return '0' + String(value);
	}
	return value;
}

module.exports = function(timestamp, isDibit) {
	if (typeof timestamp !== 'number' || isNaN(timestamp) || timestamp <= 0) {
		return {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
			milliseconds: 0
		};
	}

	var days = Math.floor(timestamp / (24 * 60 * 60 * 1000));
	var hours = Math.floor(timestamp / (60 * 60 * 1000) % 24);
	var minutes = Math.floor(timestamp / (60 * 1000) % 60);
	var seconds = Math.floor(timestamp / 1000 % 60);
	var milliseconds = Math.floor(timestamp % 1000);

	return {
		days: days,
		hours: getAdjustValue(isDibit, hours),
		minutes: getAdjustValue(isDibit, minutes),
		seconds: getAdjustValue(isDibit, seconds),
		milliseconds: milliseconds
	};
}
