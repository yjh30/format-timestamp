module.exports = function(timestamp) {
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
	var hours = Math.floor(timestamp % (24 * 60 * 60 * 1000) / (60 * 60 * 1000));
	var minutes = Math.floor(timestamp % (60 * 60 * 1000) / (60 * 1000));
	var seconds = Math.floor(timestamp % (60 * 1000) / 1000);
	var milliseconds = Math.floor(timestamp % 1000);

	return {
		days: days,
		hours: hours,
		minutes: minutes,
		seconds: seconds,
		milliseconds: milliseconds
	}
}
