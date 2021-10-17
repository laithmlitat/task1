function myFunction() {
    var x = document.createElement("IMG");
    x.setAttribute("src", "rose.jpg");
    x.setAttribute("width", "300");
    x.setAttribute("height", "500");
    x.setAttribute("alt", "rose");
    x.classList.add('dis');
    document.body.appendChild(x);
}