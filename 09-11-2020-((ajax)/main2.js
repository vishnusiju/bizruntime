function loadD()
    {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function()
    {
        if(this.readyState == 4 && status == 200)
        {
            document.getElementById("Aja").innerHTML = this.responseXml;
        }

    };

    xhttp.open("get", "test.xml", true);
    xhttp.send();
}