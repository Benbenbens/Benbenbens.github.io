function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.

  var event_lat_value = false;
  var event_lng_value = false;

  var latitude = parseFloat(document.querySelector("#Latitude").value);
  var longitude = parseFloat(document.querySelector("#Longitude").value);


  if (latitude >= -90 && latitude <=90){
    event_lat_value = true;
    hideErrorMessage("#latitude-error-msg");
  } 
  else{
    showErrorMessage("#latitude-error-msg", "Must be a valid Latitude (-90 to 90)");
  }


  if(longitude >= -180 && longitude <= 180){
    event_lng_value = true;
    hideErrorMessage("#longitude-error-msg");
  }
  else{
    showErrorMessage("#longitude-error-msg", "Must be a valid Longitude (-180 to 180)");
  }

  if (event_lat_value === true && event_lng_value === true){
    event = true;    
    hideErrorMessage();
  }
  else
  {
    event = false;    
  }
                                                                                   
  console.log('TODO - validate the longitude, latitude values before submitting');
  return event;
}

function showErrorMessage(msg_type, msg) {
  var errMessage = document.querySelector(msg_type); 
  // Remove the hidden class so the error message shows.
  errMessage.classList.remove('hidden');
  // Set the error message text
  errMessage.innerHTML = msg;
}

function hideErrorMessage(msg_type) {
  var errMessage = document.querySelector(msg_type);
  // Add the hidden class so the error message goes away.
  errMessage.classList.add('hidden');
  // Set the error message text to null
  errMessage.innerHTML = '';
}


// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};



