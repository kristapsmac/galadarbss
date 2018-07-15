var movieArray = ['http://www.omdbapi.com/?i=tt2402927&apikey=4a1cb752', 'http://www.omdbapi.com/?i=tt0317248&apikey=4a1cb752',
    'http://www.omdbapi.com/?i=tt1462900&apikey=4a1cb752', 'http://www.omdbapi.com/?i=tt1560747&apikey=4a1cb752',
    'http://www.omdbapi.com/?i=tt1392190&apikey=4a1cb752', 'http://www.omdbapi.com/?i=tt2718492&apikey=4a1cb752'];




function apiCall() {
    $.each(movieArray, function(index, value){
        $.getJSON(value).then(function (data) {
            console.log(data);
            var image = data.Poster;
            $('#poster'+index).attr('src', image);
            var title = data.Title;
            var year = data.Year;
            var rated = data.Rated;
            var awards = data.Awards;
            $('#movie'+index).append("</br>", title, " ", year, "</br>", "Rated: ", rated, "</br>", " ", awards);
        });
    })
}
apiCall();