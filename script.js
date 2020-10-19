/*
$(function() {
  $('form').on('submit', (event) => {
    event.preventDefault();

    function fizzBuzz(num) {
      console.log('started');
      num = parseInt(num);
      let results = [];
      for (let i = 0; i <= num; i++) {
        console.log(i);
        if (i === 0) {
          results.push($(`<div class="fizz-buzz-item">
          <span>${i}</span>
          </div>`));
        } else if (i % 3 === 0 && i % 5 === 0) {
          results.push($(`<div class="fizz-buzz-item">
          <span>FizzBuzz</span>
          </div>`));
        } else if (i % 3 === 0) {
          results.push($(`<div class="fizz-buzz-item">
          <span>Fizz</span>
          </div>`));
        } else if (i % 5 === 0) {
          results.push($(`<div class="fizz-buzz-item">
          <span>Buzz</span>
          </div>`));
        } else {
          results.push($(`<div class="fizz-buzz-item"><span>${i}</span></div>`));
        }
      }
      console.log(results);
      console.log('finishing');
      $('js-results').append(results);
    }

    let numberInput = $('#number').val();
    console.log(numberInput);
    fizzBuzz(numberInput);
    $('#number').val('');
  });
});
*/

$(function() {
  $('form').on('submit', function(event) {
    event.preventDefault(); // Works

    let numInput = parseInt($('#number').val()); // Works

    let appArr = [];

    for (let i = 1; i <= numInput; i++) { // Works in console
      if (i % 3 === 0 && i % 5 === 0) {
        appArr.push('<div class="fizz-buzz-item fizzbuzz"><span>FizzBuzz</span></div>');
      } else if (i % 3 === 0) {
        appArr.push('<div class="fizz-buzz-item fizzbuzz"><span>Fizz</span></div>');
      } else if (i % 5 === 0) {
        appArr.push('<div class="fizz-buzz-item fizzbuzz"><span>Buzz</span></div>');
      } else {
        appArr.push(`<div class="fizz-buzz-item fizzbuzz"><span>${i}</span></div>`);
      }
    }

    $('.js-results').append(appArr);
  });
});