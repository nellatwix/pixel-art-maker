function makeGrid() {

  var gridTable = $('table');
  var gridHeight = $('input[name="height"]').val();
  var gridWidth = $('input[name="width"]').val();

  // Select size input
  for(i = 0; i < gridHeight; i++) {
    gridTable.append('<tr></tr>');
  };

  for(y = 0; y < gridWidth; y++) {
    $('tr').append('<td></td>');
  };

  // Select color input
  $('td').click(function() {
    var colorPicker = $('input[type="color"]').val();
    $(this).css('background-color', colorPicker);
  })

};

// When size is submitted by the user, call makeGrid()
var submitButton = $('input[type="submit"]');

submitButton.click(function(event) {
  event.preventDefault();
  makeGrid();
});
