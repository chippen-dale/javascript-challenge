// Data from data.js
var ufoData = data;
console.log(ufoData);
// Select the table body
var tbody = d3.select("tbody");
// Append UFO Sighting data
ufoData.forEach(function(sighting) {
    console.log(sighting);
    // Table Row
    var row = tbody.append("tr");
    // Write data
    Object.entries(sighting).forEach(function([key, value]) {
      console.log(key, value);
      // Data within rows
      var field = row.append("td");
      field.text(value);
    });
  });


// Select the button
var button = d3.select("#filter-btn");
button.on("click", function() {
    tbody.html("");
    // Get datetime input
    var inputField = d3.select("#datetime");
    var fieldValue = inputField.property("value");
    console.log(fieldValue);
    // Filter and write data
    var filteredUFOData = ufoData.filter(sighting => sighting.datetime === fieldValue);
    console.log(filteredUFOData);

    filteredUFOData.forEach(function(filteredData) {
    console.log(filteredData);
    // Append filtered data
    var row = tbody.append("tr");
    // Write filtered data
    Object.entries(filteredData).forEach(function([key, value]) {
        console.log(key, value);
        var field = row.append("td");
        field.text(value);
    });
});
});