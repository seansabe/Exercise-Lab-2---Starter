const itemsPerPage = 10;
var numOfPages;
var data;

fetch('./data.js')
    .then(response => {
        console.log(response);
        data = window.data;
        numOfPages = Math.ceil(data.length / itemsPerPage);
        document.getElementById('counter').innerHTML = data.length;
        displayPage(1);
        var pageNumber = '';
        for (let index = 1; index <= numOfPages; index++) {
            pageNumber += `<li><a href="#" onclick="displayPage(${index})">${index}</a></li>`;
        }
        document.getElementById('pagination').innerHTML = pageNumber;
    })
    .catch(error => {
        console.error('Error loading data:', error);
    });

function displayPage(pageNumber) {
    const start = (pageNumber - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const items = data.slice(start, end);
    var html = '';
    items.forEach(element => {
        html += '<li class="contact-item cf">' +
            '<div class="contact-details">' +
            '<img class="avatar" src="' + element.image + '">' +
            '<h3>' + element.name + '</h3>' +
            '<span class="email">' + (element.name).replace(' ', ".").toLowerCase() + '@example.com</span>' +
            '</div>' +
            '<div class="joined-details">' +
            '<span class="date">' + element.joined + '</span>' +
            '</div>' +
            '</li>';
    });
    document.getElementById('contact-list').innerHTML = html;
}


