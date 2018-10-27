//Our JS

//Animation

$(function() {
  $("#lorries").animate(
    {
      backgroundPosition: "10000px 0px"
    },
    240000,
    "linear"
  );

  $("#background-vehicles").animate(
    {
      backgroundPosition: "-8000px 0px"
    },
    140000,
    "linear"
  );

  $("#background-small-cranes").animate(
    {
      backgroundPosition: "-10000px 0px"
    },
    500000,
    "linear"
  );

  $("#clouds").animate(
    {
      backgroundPosition: "-10000px -0px"
    },
    960000,
    "linear"
  );
});

//Countdown

$(function() {
  var austDay = new Date();
  austDay = new Date(austDay.getFullYear() + 1, 11 - 1, 29);
  $("#defaultCountdown").countdown({ until: austDay });
  $("#year").text(austDay.getFullYear());
});
