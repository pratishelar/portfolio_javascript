//ajax-json request
var xhr = new XMLHttpRequest();
xhr.onload = function () {

    if (xhr.status === 200) {
        responseObject = JSON.parse(xhr.responseText);
        var newContent = '';
        for (var i = 0; i < responseObject.events.length; i++) {
            newContent += '<div class="event">';
            newContent += '<p>' + responseObject.events[i].location + '<br />'
            newContent += responseObject.events[i].date + '</p>';
            newContent += '</div>';
        }

    } else if (xhr.status === 404) {
        newContent = '<p><i><mark><strong>404 Error. Page not found.</strong></mark></i></p>';
        
    }
    document.getElementById('uitext').innerHTML = newContent;
};

xhr.open('GET', 'data/data.json', true);
xhr.send(null);