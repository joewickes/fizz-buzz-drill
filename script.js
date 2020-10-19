function fizzBuzz(num) {
  let appArr = [];
    
  for (let i = 1; i <= num; i++) {
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
}

$(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();

    let numInput = parseInt($('#number').val());
    
    fizzBuzz(numInput);
  });
});