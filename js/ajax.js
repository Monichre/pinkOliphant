//gets called on button click in index.html
function runAjax() {

  $.get('/tweets', function(data, status){

    //put the values into an array, seemed chill
    var outputArr = [JSON.parse(data)];

    for (var i = 0; i <5; i++) {

      // console.log(outputArr[0]);
      console.log(outputArr[0].statuses[i].user.name);
      console.log(outputArr[0].statuses[i].user.name && outputArr[0].statuses[i].text && outputArr[0].statuses[i].user.location);


      $('.tweets').append("<blockquote>" + outputArr[0].statuses[i].text + "</blockquote>");

      // $('#twitter-data').text("<li>" + outputArr[i].statuses[i].text + "</li>");
    }
    //just putting it in the dom to test.
      // output.text(data.statuses.);


   });
};

$(document).ready(function(){

    runAjax();

});
