$(document).ready(function(){

    $('button').on('click', function() {
        var gifz = $(this).data('name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifz + "&api_key=dc6zaTOxFJmzC&limit=5";

        $.ajax({
            url: queryURL,
            method: 'GET'
        })
            .done(function(response) {


                console.log(response)

                var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var searchDiv = $('<div/>');

                    var p =$('<p/>');

                    p.text(results[i].rating);

                    var gif = $('<img/>');

                    gif.addClass('anImg')

                    gif.attr('src', results[i].images.fixed_height.url);

                    gif.attr('data-still', results[i].images.fixed_height_still.url)

                    gif.attr('data-animate', results[i].images.fixed_height.url)

                    .attr('data-state', 'still');

                    searchDiv.append(p);

                    searchDiv.append(gif);

                    searchDiv.prependTo($('#gifs'));
                }

                $('.anImg').on('click', function() {
            
                    var state = $(this).attr('data-state'); 
                    console.log(this);

                    if (state == 'still') {
                    
                    $(this).attr('src', $(this).data('animate'));
                    
                    $(this).attr('data-state', 'animate');

                    } else {
                            
                    $(this).attr('src', $(this).data('still'));
                    
                    $(this).attr('data-state', 'still');
                    }      
                });
            });
    });

    var search = [''];


        $('#theButton').on('click', function(){
            var gifzButton = $("#gif-input").val();
            

            var newButton = $("<button/>").addClass( "btn btn-info gifz").attr('data-name',gifzButton).html(gifzButton).css({'margin': '5px'});
            
            $("#searchbuttons").append(newButton);
                console.log("Work");

            queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifzButton + "&api_key=dc6zaTOxFJmzC&limit=10";
                console.log(gifzButton);

            $.ajax({
            url: queryURL,
            method: 'GET'
            })

            .done(function(response) {

            var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var gifzDiv = $('<div/>');

                    var p =$('<p/>');

                    p.text(results[i].rating);

                    var gif = $('<img/>');

                    gif.addClass('anImg')

                    gif.attr('src', results[i].images.fixed_height_still.url);

                    gif.attr('data-still', results[i].images.fixed_height_still.url)

                    gif.attr('data-animate', results[i].images.fixed_height.url)

                    .attr('data-state', 'still');

                    gifzDiv.append(p);

                    gifzDiv.append(gif);

                    gifzDiv.prependTo($('#gifs'));
                }

                $('.anImg').on('click', function() {
            
                    var state = $(this).attr('data-state'); 
                    console.log(this);

                    if (state == 'still') {
                    
                    $(this).attr('src', $(this).data('animate'));
                    
                    $(this).attr('data-state', 'animate');

                    } else {
                            
                    $(this).attr('src', $(this).data('still'));
                    
                    $(this).attr('data-state', 'still');
                    }      
                });
            });

            $("#gif-input").val("");
            return false;
        })
  
});