/*
handles the creation of the server request
param: the url for the file being requested
*/
function makeRequest(url) {
  webRequest = new XMLHttpRequest();

  if (!webRequest) {
    alert("Cannot create XMLHTTP instance");
    return false;
  }
  webRequest.onreadystatechange = alertContents;

  webRequest.open('GET', url);
  webRequest.send();


}
/*
handles the retirival of the data from the server
*/
function alertContents() {
  if (webRequest.readyState === XMLHttpRequest.DONE) {
    if (webRequest.status === 200) {
      // converts the raw data into JSON objects
      var JSONdata = JSON.parse(webRequest.responseText);
      createTable(JSONdata);
    } else {
      alert("There was a problem with the request");
    }
  }
}
/*
creates a table from the server data
*/
function createTable(text) {
  var columns = [];
  for (var i = 0; i < text.length; i++) {
    for (var key in text[i]) {
      if (columns.indexOf(key) === -1) {
        columns.push(key);
      }
    }
  }

  var table = document.createElement("table");

  var tr = table.insertRow(-1);

  for (var i = 0; i < columns.length; i++) {
    var th = document.createElement("th");
    th.innerHTML = columns[i];
    tr.appendChild(th);
  }

  for (var i = 0; i < text.length; i++) {
    tr = table.insertRow(-1);

    for (var j = 0; j < columns.length; j++) {
      var tableCell = tr.insertCell(-1);
      tableCell.innerHTML = text[i][columns[j]];
    }

  }

  var tableLocation = document.getElementById("data");
  tableLocation.innerHTML = "";
  tableLocation.appendChild(table);






}
