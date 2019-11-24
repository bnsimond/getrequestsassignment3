'use strict';

function getDogImage (breedInput) {
    fetch (`https://dog.ceo/api/breed/${breedInput}/images/random`)
    .then(response => response.json())
    .then(responseJson => display(responseJson))
    .catch(error => alert ('Error. Try again'));
}

function display (responseJson) {

    if (responseJson.status === "success") {
        var dogBreed = responseJson.message
        $(".results").html(`<img src="${dogBreed}"/>`)
    } else {
        $(".results").html(`<h1>No results available.</h1>`)
    }
      
}

function dogForm () {
    $('form').submit(e=> {
        e.preventDefault ();
        var breed = $("#breedRequested").val();
        getDogImage(breed);
    });
}

$(function() {
    alert('Search for a breed. Any breed.');
    dogForm();
});