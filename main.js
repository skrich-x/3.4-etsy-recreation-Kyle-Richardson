(function(){
  'use strict';



function fetchJSONP(url, callback) {
    var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
    var script = document.createElement('script');

    window[callbackName] = function(data) {
        delete window[callbackName];
        document.body.removeChild(script);
        callback(data);
    };

    script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
    document.body.appendChild(script);
}

function logData(data) {
console.log(data);
}

function logData(response) {
 console.log(response.results.title);
 }

var url = "https://api.etsy.com/v2/listings/active.js?api_key=19vjkb65j5uuobqlp0889tzd&keywords=caferacer&includes=Images,Shop";
fetchJSONP(url, logData);


})();
