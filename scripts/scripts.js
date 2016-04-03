$(document).ready(function() {
    $("#inputNumber").keydown(function(event) {
        if (event.which === 13) {
            event.preventDefault();

            fizzbuzz();
        }
    });

    function fizzbuzz() {
        var number = $("#inputNumber").val();

        if ($.trim(number) === '' || isNaN(number)) {
            alert("not a number, please enter a number.");
        }

        for (var i = 1; i <= number; i++) {
            if (i % 5 === 0 && i % 3 === 0) {
                print('<span class="fb">FizzBuzz</span>');
            } else if (i % 3 === 0) {
                print('Fizz');
            } else if (i % 5 === 0) {
                print('Buzz');
            } else {
                print(i);
            }
        }
    }

    function print(msg) {
        $('#main').append("<li>" + msg + "</li>");
    }
})
