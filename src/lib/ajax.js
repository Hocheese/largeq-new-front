export default function ajax(url,fx){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function () {
        fx(xhr.responseText);
    }.bind(this);
    xhr.send();
}