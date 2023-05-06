import { AppointmentService } from '../../_services/_user/appointment.service.ts';





// Define a function to export
function myFunction(Data_) {
    console.log('Hello from myScript.js!');
    console.log(Data_);
  }
  function myFunction2( Data_ ) {


    
  var calendarEl = document.getElementById('calendar');
  function handleDatesRender(arg) {
    console.log('viewType:', arg.view.calendar.state.viewType);
  }
  var calendar = new FullCalendar.Calendar(calendarEl, {
   
    plugins: [ 'interaction', 'dayGrid', 'timeGrid', 'list' ],
     eventClick: function(info) {
      // alert('Event: ' + info.event.title);
      // alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
      // alert('View: ' + info.view.type);
   
       // change the border color just for fun
       //info.el.style.borderColor = 'red';
    //   appointmentService = new AppointmentService();
      // appointmentService.send();
       console.log(info.event.title); 
     //  console.log('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
       console.log('View: ' + info.event.start);
       console.log('View: ' + info.view.type);

       
      }, 
    defaultView: 'dayGridMonth',
    datesRender: handleDatesRender,
    defaultDate: '2019-08-07',
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    dayMaxEvents: true, // allow "more" link when too many events
    header: {
      left: 'prev,next,today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    events: Data_
  });

  calendar.render();  }

 
  // Export the function for use in other files
export { myFunction , myFunction2 };


var modalEdit = "";

/*
modalEdit += '<div class="modal bd-example-modal-lg "   role="dialog" tabindex="-1" style="display: block;">'
modalEdit +=     '<div class="modal-dialog modal-lg modal-dialog-centered " role="document" >'
modalEdit +=         '<div class="modal-content">'
modalEdit +=             '<div class="modal-header"><i class="fa fa-calendar-check-o primary-light-blue-color" style="font-size: 35px;margin-right: 10px;"></i>
modalEdit +=                <h4 class="modal-title">Add Appointment<br></h4><button   type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button></div>''
modalEdit +=             <div class="modal-body" style="padding-bottom: 0px;">
modalEdit +=                 <p><span style="font-size: 30px;font-family: TimesNewRoman;">A</span>dding an appointment for a patient can be a crucial task for a healthcare provider, and having the necessary fields can help ensure that the appointment is properly
modalEdit +=                     scheduled and documented. </p>
modalEdit +=                    <div  class="group-input" style="width: 100%;">
modalEdit +=                 <div class="table-responsive table table-borderless style-text-timenewroman">
modalEdit +=                     <table style="margin-bottom: 0px;"class="table table table-bordered table-hover" id="demande-stage-detaille-stagiaire-modale-table">
modalEdit +=                        <thead>
modalEdit +=                             <tr style="background-color: #f7f6f6;"></tr>
modalEdit +=                        </thead>
modalEdit +=                         <tbody>
modalEdit +=                             <tr>
modalEdit +=                                 <td>Reason</td>
modalEdit +=                                 <td><input type="text" class="form-control input-design"></td>
modalEdit +=                                 <td>First Visit<br></td>
modalEdit +=                                 <td>
modalEdit +=                                     <div class="d-flex flex-row row-input" style="margin-top: 2px;">
modalEdit +=                                         <p style="font: 40px TimesNewRoman;color: rgb(73,80,87);font-size: 18px;margin-top: auto;margin-bottom: auto;margin-right: 5px;margin-left: 10px;">Yes</p><input type="radio" style="margin-top: auto;margin-bottom: auto;margin-left: 5px;">
modalEdit +=                                         <p style="font: 40px TimesNewRoman;color: rgb(73,80,87);font-size: 18px;margin-top: auto;margin-bottom: auto;margin-right: 5px;margin-left: 10px;">No</p><input type="radio" style="margin-top: auto;margin-bottom: auto;margin-left: 5px;"></div>
modalEdit +=                                 </td>
modalEdit +=                             </tr>
modalEdit +=                             <tr>
modalEdit +=                                 <td>Date<br></td>
modalEdit +=                                 <td><input class="form-control input-design" type="date"></td>
modalEdit +=                                 <td>Start Time<br></td>
modalEdit +=                                 <td><input class="form-control input-design" type="date"></td>
modalEdit +=                             </tr>
modalEdit +=                             <tr> 
modalEdit +=                                 <td></td>
modalEdit +=                                 <td></td>
modalEdit +=                                 <td>End Time<br></td>
modalEdit +=                                 <td ><input class="form-control input-design" type="date"></td>
modalEdit +=                             </tr>
modalEdit +=                             <tr>
modalEdit +=                                <td>Comments :</td>
modalEdit +=                                <td colspan="3"><textarea class="form-control "></textarea></td> 
modalEdit +=                             </tr>
modalEdit +=                         </tbody>
modalEdit +=                     </table>
modalEdit +=                 </div>
modalEdit +=             </div>
modalEdit +=             </div>
modalEdit +=             <div class="modal-footer">
modalEdit +=                <button class="btn btn-primary style-text-timenewroman primary-light-blue-color-backgroud" type="button">Update</button>
modalEdit +=                 <button  (click)="onClickNo()" class="btn btn-light" type="button style-text-timenewroman" data-dismiss="modal" >no</button></div>
modalEdit +=         </div>
modalEdit += </div> 
*/
