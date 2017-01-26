$(document).ready(function () {
  var $menu = $("#sidebar-wrapper");

  $(document)
    .on("click", ".js-menu-open", function(evt) {
      $menu.addClass("open");

      return evt.target.tagName === "A";
    })
    .on("click", ".js-menu-close", function(evt) {
      $menu.removeClass("open");

      return evt.target.tagName === "A";
    });

getWeather();
function getWeather() {
  $.ajax( url: 'http://api.wunderground.com/api/31c55d0cbd8f5085/geolookup/conditions/q/91360.json', dataType: 'jsonp',
          success: function(response){
            var conditions = response.current_observation.weather;
            console.log(conditions);
            loadImage(conditions);
          }
        });
}

function getTimeOfDay() {
  var time = new Date;
  var hours = time.getHours();
  var timeOfDay;

  if (hours >= 17) {
    timeOfDay = 'night';
  } else if (hours >= 12 && hours <= 16) {
    timeofDay = 'afternoon'
  }else {
      timeOfDay = 'morning';
    }
    return timeOfDay;
}

function loadImage(conditions) {
  var imageSRC = 'img/weather/hero-';
  var validConditions = ["clear","cloudy","rain","snow"];
  var timeofDay = getTimeOfDay();
  conditions = conditions.toLowerCase();
  if (conditions.indexOf(validConditions) == -1) {
    conditions = 'cloudy';
  }
    var url = imageSRC + conditions + '-' + timeofDay + ".jpg";
    $('#intro').css("background-image", " url(" + url +")");

}

});
