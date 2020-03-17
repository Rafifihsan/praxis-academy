( function($) {
     
    $(document).ready(function(){
         
        //Weather API
        //https://apidev.accuweather.com/developers/weatherIcons
        $.get( "http://apidev.accuweather.com/currentconditions/v1/349818.json?language=en&apikey=your-api-key", 
        function( data ) {
            var iconUrl = "/wp-content/themes/theme-folder/assets/images/weather-icons/" + data[0]['WeatherIcon'] + "-s.png";
             
            $( '.header-right__weather-icon').html('<img src="' + iconUrl + '" />' );
             
             
            $( '.header-right__weather-sit').text( data[0]['WeatherText'] );
            $( '.header-right__weather-temp').text( data[0]['Temperature']['Imperial']['Value'] + ' ' + data[0]['Temperature']['Imperial']['Unit'] );
            console.log( data );
        });
} )( jQuery )