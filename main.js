window.onload = function () {
    showPeople();
};
function showPeople() 
{
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://swapi.co/api/people/');
    xhr.addEventListener('load', function () 
    {
        var test = JSON.parse(this.responseText);
        for (var i = 0; i < test.results.length; i++) 
        {
            console.log(test.results[i]);
        }
    });
    xhr.send();}