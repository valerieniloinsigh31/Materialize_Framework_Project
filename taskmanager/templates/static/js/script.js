<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function() {
  // sidenav initialization
  let sidenav = document.querySelectorAll(".sidenav");
  M.Sidenav.init(sidenav);

  // datepicker initialization
  let datepicker = document.querySelectorAll(".datepicker");
  M.Datepicker.init(datepicker, {
      format: "dd mmmm, yyyy",
      i18n: {done: "Select"}
=======
document.addEventListener('DOMContentLoaded', function() {
    //sidenav initialisation
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    //datepicker initialisation
    let datepicker = document.querySelectorAll('datepicker');
    M.Datepicker.init(datepicker {
      format:"dd mm, yyyy",
      i18n: {done: "Select"}
    }
      );

     //select initialisation
     let selects = document.querySelectorAll("select");
     M.FormSelect.init(selects);
>>>>>>> 8784b5c79aa212ebf3e10ffba003fb62357cbcf7
  });

  // select initialization
  let selects = document.querySelectorAll("select");
  M.FormSelect.init(selects);

  // collapsible initializataion
  let collapsibles = document.querySelectorAll(".collapsible");
  M.Collapsible.init(collapsibles);
});
