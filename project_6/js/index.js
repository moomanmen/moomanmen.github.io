$(document).ready(function() {
  //this make the logo fade in on load.
  $(".caption").fadeIn(3000);

  //on click will change the background image
  $(".PressForNew").click(function() {
    newNova();
  });

  //on click will make it color or grayscale
  $(".bgimg-1").click(function() {
    colorChange();
  });
});

//this function turn the grayscale on or off depending on the current value
function colorChange() {
  var done = 0;

  if ($(".bgimg-1").css("filter") == "grayscale(1)") {
    var filterVal = "grayscale(0)";
    $(".bgimg-1").css("filter", filterVal);
    $(".bgimg-1").css("webkitFilter", filterVal);
    done = 1;
  }

  if ($(".bgimg-1").css("filter") == "grayscale(0)") {
    if (done == 0) {
      var filterVal = "grayscale(1)";
      $(".bgimg-1").css("filter", filterVal);
      $(".bgimg-1").css("webkitFilter", filterVal);
    }
  }
}

//This function loads a new background image depending on the current loaded image.
function newNova() {
  var image = $(".bgimg-1").css("background-image");
  if (
    image ==
    'url("https://lh3.googleusercontent.com/b0F0qkh09Q3GSNFnundVaEurrPJ8dMm0D1MfMWEuLy22RDEfuxAkO1oA_rzvdwJ3BKkQhOA2Pg=w640-h400-e365")'
  ) {
    $(".bgimg-1").css(
      "background-image",
      'url("https://wallpapercave.com/wp/OGoNYgZ.jpg")'
    );
  }
  if (image == 'url("https://wallpapercave.com/wp/OGoNYgZ.jpg")') {
    $(".bgimg-1").css(
      "background-image",
      'url("https://lh3.googleusercontent.com/b0F0qkh09Q3GSNFnundVaEurrPJ8dMm0D1MfMWEuLy22RDEfuxAkO1oA_rzvdwJ3BKkQhOA2Pg=w640-h400-e365")'
    );
  }
}