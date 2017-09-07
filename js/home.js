$(function() {

	var todayDate = moment().startOf('day');
	var YM = todayDate.format('YYYY-MM');
	var YESTERDAY = todayDate.clone().subtract(1, 'day').format('YYYY-MM-DD');
	var TODAY = todayDate.format('YYYY-MM-DD');
	var TOMORROW = todayDate.clone().add(1, 'day').format('YYYY-MM-DD');

	$('#calendar').fullCalendar({
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay,listWeek'
		},
		editable: true,
		eventLimit: true, // allow "more" link when too many events
		navLinks: true,
		events: [
			{
				color: '#A89166',
       			textColor: 'yellow',
				title: 'All Day Event',
				start: YM + '-01'
			},
			{
				color: '#00FF00',
       			textColor: 'yellow',
				title: 'Long Event',
				start: YM + '-07',
				end: YM + '-10'
			},
			{
				color: 'grey',
       			textColor: 'yellow',
				id: 999,
				title: 'Repeating Event',
				start: YM + '-09T16:00:00'
			},
			{
				color: 'grey',
       			textColor: 'yellow',
				id: 999,
				title: 'Repeating Event',
				start: YM + '-16T16:00:00'
			},
			{
				color: 'light-green',
       			textColor: 'yellow',
				title: 'Conference',
				start: YESTERDAY,
				end: TOMORROW
			},
			{
				color: 'blue',
       			textColor: 'yellow',
				title: 'Meeting',
				start: TODAY + 'T10:30:00',
				end: TODAY + 'T12:30:00'
			},
			{
				color: '#f00',
       			textColor: 'yellow',
				title: 'Lunch',
				start: TODAY + 'T12:00:00'
			},
			{
				color: 'blue',
       			textColor: 'yellow',
				title: 'Meeting',
				start: TODAY + 'T14:30:00'
			},
			{
				color: '#228B22',
       			textColor: 'yellow',
				title: 'Happy Hour',
				start: TODAY + 'T17:30:00'
			},
			{
				color: '#f00',
       			textColor: 'yellow',
				title: 'Dinner',
				start: TODAY + 'T20:00:00'
			},
			{
				color: 'green',
       			textColor: 'yellow',
				title: 'Birthday Party',
				start: TOMORROW + 'T07:00:00'
			},
			{
				color: 'purple',
       			textColor: 'yellow',
				title: 'Click for Google',
				url: 'http://google.com/',
				start: YM + '-28'
			}
		]
	});
});