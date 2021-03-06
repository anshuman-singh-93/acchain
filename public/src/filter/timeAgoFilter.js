angular.module('asch').filter('timeAgoFilter', function($filter) {
	return function (time, fullTime) {
		if (fullTime) {
			return $filter('timestampFilter')(time);
		}
		return AcchainJS.utils.format.timeAgo(time);
	}
});
