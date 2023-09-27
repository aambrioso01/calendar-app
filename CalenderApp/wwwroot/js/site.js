document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            center: 'addEventButton'
        },
        customButtons: {
            addEventButton: {
                text: 'add event...',
                click: function () {
                    document.getElementById('eventPopup').style.display = 'block';
                }
            }
        }
    });

    calendar.render();

    // Handle the form submission within the FullCalendar context
    document.getElementById('closePopup').addEventListener('click', function () {
        document.getElementById('eventPopup').style.display = 'none';
    });

    document.getElementById('submitEvent').addEventListener('click', function () {
        var dateStr = document.getElementById('date').value;
        var title = document.getElementById('title').value;
        var date = new Date(dateStr + 'T00:00:00');

        if (!isNaN(date.valueOf())) { // valid date?
            calendar.addEvent({
                title: title,
                start: date,
                allDay: true
            });

            // TODO update database

            // Close the popup
            document.getElementById('eventPopup').style.display = 'none';
        } else {
            alert('Invalid input.');
        }
    });
});
