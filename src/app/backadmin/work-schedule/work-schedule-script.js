// Define a function to export 
function geyWorkScheduleList(_data_) {

  var calendarEl = document.getElementById('calendar');
  function handleDatesRender(arg) {
    console.log('viewType:', arg.view.calendar.state.viewType);
  }
  var calendar = new FullCalendar.Calendar(calendarEl, {

    plugins: ['interaction', 'dayGrid', 'timeGrid', 'list'],
    defaultView: 'timeGridWeek',
    datesRender: handleDatesRender,
    defaultDate: new Date(),
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    dayMaxEvents: true, // allow "more" link when too many events
    header: {
      left: 'prev,next,today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    events: _data_
  });

  calendar.render();
}


// Export the function for use in other files
export { geyWorkScheduleList };