'use strict';

// PART 1: SHOW A FORTUNE

function showFortune(evt) {
  // TODO: get the fortune and show it in the #fortune-text div
  $.get('/fortune', res => {
    $('#fortune-text').html(res);
  });
}
$('#get-fortune-button').on('click', showFortune);

// PART 2: SHOW WEATHER
function weatherForecast(results) {
  $('#weather-info').html(results.forecast);
}
// function weatherForecasTemp(results) {
//   $('#weather-info').html(results.temp);
// }

function showWeather(evt) {
  evt.preventDefault();

  const url = '/weather. json';
  const formData = {zipcode: $('#zipcode-field').val()};
$.get(url,formData,weatherForecast);  
}

$('#weather-form').on('submit', showWeather);

// PART 3: ORDER MELON
function resultHandler(results) {
  if (results.code === 'ERROR') {
    $('#order-status').addClass('order-error');
    $('#order-status').html(`${results.msg}`);
  }
  if (results.code === 'OK') {
    $('#order-status').html(`${results.msg}`);
  }
}

function orderMelons(evt) {
  evt.preventDefault();

  const formValues = {
    qty: $('#qty-field').val(),
    melon_type: $('#melon-type-field').val()
  };
  $.post('/order-melons.json',formValues, resultHandler);
}
//   // TODO: show the result message after your form
//   // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
// }

$('#order-form').on('submit', orderMelons)
