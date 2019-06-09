<script>

/*Input: the user types the temperature and Fahrenheit and the wind speed 
         *Processing:The program will store the values in two variables, (tempf, speed) and will call a new function to run the operation.
         *Output: The windchill factor.
         */

    function compute(){//This first function will record the variables typed by the user, create the variable that will call the future function, and will, receive the value returned, and will send the result to be displayed by the user.
        var tempF = parseFloat(document.getElementById('temperatureF').value);
        var speed = parseFloat(document.getElementById('wind').value);
        var windspeed = windChill(tempF, speed);
        var round = Math.round(windspeed);
        document.getElementById('output').innerHTML ="the windchill factor is: " +round;
    }
        /* Input: It does not have an input from the user, it uses the values from the previous function.
         * Processing: Using the values will calculate the windChill factor, using this formula (f = 35.74 + 0.6215t - 35.75s0.16 + 0.4275t s0.16) and then will return the result to the function that called it.
         * Output: No for the user to see.
         */
        
        function windChill(tempF1, speed1){
            var factor = 35.74 + (0.6215 * tempF1) - 35.75 * Math.pow(speed1, 0.16) + 0.4275 * tempF1 * Math.pow(speed1, 0.16);
            return factor;
        }

</script>
